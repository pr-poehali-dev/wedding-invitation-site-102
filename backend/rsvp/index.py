import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

TO_EMAILS = ["kovalev.alex2002@yandex.ru", "Angellu1407@mail.ru"]

TRANSPORT_LABELS = {
    "own_car": "На своем автомобиле",
    "own_car_help": "На своем автомобиле и готов(а) помочь с трансфером другим гостям",
    "self": "Своим ходом (такси, общественный транспорт)",
    "unknown": "Пока не знаю, сообщу о своем решении позже",
}

ATTENDING_LABELS = {
    "yes": "Да, с удовольствием приду",
    "no": "К сожалению, не смогу быть",
}

PARTS_LABELS = {
    "both": "И в ЗАГСе, и в ресторане",
    "registry": "Только в ЗАГСе",
    "dinner": "Только в ресторане",
}

ALCOHOL_LABELS = {
    "wine": "Вино (красное / белое)",
    "champagne": "Шампанское / игристое",
    "strong": "Крепкий алкоголь (водка, виски и т.д.)",
    "none": "Не употребляю алкоголь",
}


def handler(event: dict, context) -> dict:
    """Принимает ответ гостя из свадебной анкеты и отправляет уведомление на почту жениха и невесты."""
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    data = json.loads(event.get("body") or "{}")

    name = data.get("name", "—")
    phone = data.get("phone", "—")
    attending = ATTENDING_LABELS.get(data.get("attending", ""), data.get("attending", "—"))
    parts = PARTS_LABELS.get(data.get("parts", ""), data.get("parts", "—"))
    alcohol = ALCOHOL_LABELS.get(data.get("alcohol", ""), data.get("alcohol", "—"))
    transport = TRANSPORT_LABELS.get(data.get("transport", ""), data.get("transport", "—"))
    wishes = data.get("wishes", "—") or "—"

    body_text = f"""Новый ответ на свадебную анкету!

Имя и Фамилия: {name}
Телефон: {phone}
Присутствие: {attending}
Части праздника: {parts}
Алкоголь: {alcohol}
Транспорт: {transport}
Пожелания / аллергии: {wishes}
"""

    body_html = f"""
<html><body style="font-family: Arial, sans-serif; color: #333;">
<h2 style="color: #2d5a2d;">💌 Новый ответ на свадебную анкету</h2>
<table style="border-collapse: collapse; width: 100%; max-width: 600px;">
  <tr><td style="padding: 8px 12px; background: #f4f7f2; font-weight: bold;">Имя и Фамилия</td><td style="padding: 8px 12px;">{name}</td></tr>
  <tr><td style="padding: 8px 12px; background: #f4f7f2; font-weight: bold;">Телефон</td><td style="padding: 8px 12px;">{phone}</td></tr>
  <tr><td style="padding: 8px 12px; background: #f4f7f2; font-weight: bold;">Присутствие</td><td style="padding: 8px 12px;">{attending}</td></tr>
  <tr><td style="padding: 8px 12px; background: #f4f7f2; font-weight: bold;">Части праздника</td><td style="padding: 8px 12px;">{parts}</td></tr>
  <tr><td style="padding: 8px 12px; background: #f4f7f2; font-weight: bold;">Алкоголь</td><td style="padding: 8px 12px;">{alcohol}</td></tr>
  <tr><td style="padding: 8px 12px; background: #f4f7f2; font-weight: bold;">Транспорт</td><td style="padding: 8px 12px;">{transport}</td></tr>
  <tr><td style="padding: 8px 12px; background: #f4f7f2; font-weight: bold;">Пожелания / аллергии</td><td style="padding: 8px 12px;">{wishes}</td></tr>
</table>
</body></html>
"""

    smtp_host = os.environ.get("SMTP_HOST", "smtp.yandex.ru")
    smtp_user = os.environ["SMTP_USER"]
    smtp_password = os.environ["SMTP_PASSWORD"]

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Ответ гостя: {name}"
    msg["From"] = smtp_user
    msg["To"] = ", ".join(TO_EMAILS)
    msg.attach(MIMEText(body_text, "plain", "utf-8"))
    msg.attach(MIMEText(body_html, "html", "utf-8"))

    with smtplib.SMTP_SSL(smtp_host, 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, TO_EMAILS, msg.as_string())

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"ok": True}),
    }
