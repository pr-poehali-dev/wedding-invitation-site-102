import json
import os
import psycopg2

ATTENDING_LABELS = {
    "yes": "Придёт",
    "no": "Не придёт",
}

PARTS_LABELS = {
    "both": "ЗАГС + ресторан",
    "registry": "Только ЗАГС",
    "dinner": "Только ресторан",
}

ALCOHOL_LABELS = {
    "wine": "Вино",
    "champagne": "Шампанское",
    "strong": "Крепкий",
    "none": "Не пьёт",
}

TRANSPORT_LABELS = {
    "own_car": "Своя машина",
    "own_car_help": "Своя машина + помощь",
    "self": "Сам добирается",
    "unknown": "Не знает",
}


def handler(event: dict, context) -> dict:
    """Возвращает список всех ответов гостей из БД для страницы администратора."""
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()

    schema = os.environ.get("MAIN_DB_SCHEMA", "public")
    cur.execute(f"""
        SELECT id, name, phone, attending, parts, alcohol, transport, wishes, created_at
        FROM {schema}.rsvp_responses
        ORDER BY created_at DESC
    """)
    rows = cur.fetchall()
    cur.close()
    conn.close()

    responses = []
    for row in rows:
        responses.append({
            "id": row[0],
            "name": row[1],
            "phone": row[2],
            "attending": ATTENDING_LABELS.get(row[3], row[3] or "—"),
            "parts": PARTS_LABELS.get(row[4], row[4] or "—"),
            "alcohol": ALCOHOL_LABELS.get(row[5], row[5] or "—"),
            "transport": TRANSPORT_LABELS.get(row[6], row[6] or "—"),
            "wishes": row[7] or "—",
            "created_at": row[8].strftime("%d.%m.%Y %H:%M") if row[8] else "—",
        })

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"responses": responses, "total": len(responses)}, ensure_ascii=False),
    }
