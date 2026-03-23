import { useState } from "react";

const LEAVES_TOP = "https://cdn.poehali.dev/projects/e3bc3631-22b9-4e63-a381-a0ddce546fff/files/8d5bfe5f-6c62-4f04-a3ec-19e636395e99.jpg";
const LEAVES_BOTTOM = "https://cdn.poehali.dev/projects/e3bc3631-22b9-4e63-a381-a0ddce546fff/files/3f87787c-6e95-40c2-9294-2f271c434eb2.jpg";
const COUPLE_PHOTO = "https://cdn.poehali.dev/projects/e3bc3631-22b9-4e63-a381-a0ddce546fff/files/63fb3336-cfa0-4ade-9d9e-4dd5fe1ed92a.jpg";

export default function Index() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    attending: "",
    parts: "",
    wishes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#FAFAF7", color: "#1a2e1a", minHeight: "100vh" }}>
      <style>{`
        .font-script { font-family: 'Great Vibes', cursive; }
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans-w { font-family: 'Montserrat', sans-serif; }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUpW {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .anim-top { animation: fadeDown 1s ease both; }
        .anim-w1 { animation: fadeUpW 0.8s ease 0.2s both; }
        .anim-w2 { animation: fadeUpW 0.8s ease 0.4s both; }
        .anim-w3 { animation: fadeUpW 0.8s ease 0.6s both; }
        .anim-w4 { animation: fadeUpW 0.8s ease 0.8s both; }
        .anim-w5 { animation: fadeUpW 0.8s ease 1.0s both; }
        .anim-w6 { animation: fadeUpW 0.8s ease 1.2s both; }

        .divider-vline {
          width: 1px;
          background: #2d5a2d;
          opacity: 0.25;
          align-self: stretch;
          min-height: 160px;
        }

        .w-section-card {
          background: #fff;
          border: 1px solid #d4e4d4;
          padding: 40px 32px;
          position: relative;
        }
        .w-section-card::before {
          content: '';
          position: absolute;
          top: 6px; left: 6px; right: 6px; bottom: 6px;
          border: 1px solid #d4e4d4;
          opacity: 0.5;
          pointer-events: none;
        }

        .w-input {
          width: 100%;
          border: none;
          border-bottom: 1px solid #a8c5a8;
          background: transparent;
          padding: 8px 0;
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          color: #1a2e1a;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }
        .w-input:focus { border-bottom-color: #2d5a2d; }
        .w-input::placeholder { color: #a8c5a8; }

        .w-radio-label {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          color: #1a2e1a;
          transition: color 0.2s;
        }
        .w-radio-label:hover { color: #2d5a2d; }
        .w-radio-label input { accent-color: #2d5a2d; width: 16px; height: 16px; }

        .w-submit-btn {
          width: 100%;
          background: #2d5a2d;
          color: #fff;
          border: none;
          padding: 16px;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.3s;
        }
        .w-submit-btn:hover { background: #1a3d1a; }

        .couple-photo-wrap {
          position: relative;
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
        }
        .couple-photo-wrap::before {
          content: '';
          position: absolute;
          top: -8px; left: -8px; right: 8px; bottom: 8px;
          border: 1px solid #a8c5a8;
          opacity: 0.5;
          z-index: 0;
        }
        .couple-photo-wrap::after {
          content: '';
          position: absolute;
          top: 8px; left: 8px; right: -8px; bottom: -8px;
          border: 1px solid #a8c5a8;
          opacity: 0.3;
          z-index: 0;
        }
        .couple-photo-wrap img {
          position: relative;
          z-index: 1;
          display: block;
          width: 100%;
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(1.04); }
          to { opacity: 1; transform: scale(1); }
        }
        .anim-photo { animation: scaleIn 1.2s ease both; }
      `}</style>

      {/* ===== ФОТО + ПРИВЕТСТВИЕ ===== */}
      <section style={{ background: "#FAFAF7", padding: "0 0 0", position: "relative", overflow: "hidden" }}>
        {/* Листья сверху */}
        <div className="anim-top">
          <img
            src={LEAVES_TOP}
            alt=""
            style={{ width: "100%", display: "block", maxHeight: 260, objectFit: "cover", objectPosition: "center top", mixBlendMode: "multiply" }}
          />
        </div>

        {/* Фото пары */}
        <div style={{ padding: "32px 32px 0", display: "flex", justifyContent: "center" }}>
          <div className="couple-photo-wrap anim-photo" style={{ maxWidth: 460 }}>
            <img
              src={COUPLE_PHOTO}
              alt="Александр и Ангелина"
              style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Имена и приветствие */}
        <div style={{ textAlign: "center", padding: "40px 24px 48px" }}>
          <p className="anim-w1 font-sans-w" style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "#2d5a2d", opacity: 0.7, marginBottom: 20 }}>
            ✦ &nbsp; Свадебное приглашение &nbsp; ✦
          </p>

          <h1 className="anim-w2 font-script" style={{ fontSize: "clamp(52px, 15vw, 88px)", color: "#1a2e1a", lineHeight: 1.15, marginBottom: 24 }}>
            Александр<br />& Ангелина
          </h1>

          <div className="anim-w3" style={{ display: "flex", alignItems: "center", gap: 14, maxWidth: 340, margin: "0 auto 28px" }}>
            <div style={{ flex: 1, height: 1, background: "#2d5a2d", opacity: 0.2 }} />
            <span style={{ color: "#b8860b", opacity: 0.6, fontSize: 11 }}>✦</span>
            <div style={{ flex: 1, height: 1, background: "#2d5a2d", opacity: 0.2 }} />
          </div>

          <p className="anim-w4 font-serif" style={{ fontSize: "clamp(18px, 5vw, 26px)", color: "#2d5a2d", fontStyle: "italic", lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
            С радостью приглашаем вас разделить с нами<br />
            самый счастливый день нашей жизни
          </p>
        </div>
      </section>

      {/* ===== HERO — ДАТА И ПРОГРАММА ===== */}
      <section style={{ background: "#FAFAF7", position: "relative", overflow: "hidden" }}>
        {/* Контент */}
        <div style={{ textAlign: "center", padding: "48px 24px 48px" }}>
          <h2 className="anim-w1 font-serif" style={{ fontSize: "clamp(44px, 12vw, 80px)", fontWeight: 600, color: "#1a2e1a", letterSpacing: "0.04em", lineHeight: 1, margin: "0 0 36px" }}>
            24 Июня 2026
          </h2>

          {/* Разделитель */}
          <div className="anim-w3" style={{ display: "flex", alignItems: "center", gap: 16, maxWidth: 380, margin: "0 auto 44px" }}>
            <div style={{ flex: 1, height: 1, background: "#2d5a2d", opacity: 0.2 }} />
            <span style={{ color: "#b8860b", opacity: 0.6, fontSize: 12 }}>✦</span>
            <div style={{ flex: 1, height: 1, background: "#2d5a2d", opacity: 0.2 }} />
          </div>

          {/* Программа — две колонки */}
          <div className="anim-w4" style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", maxWidth: 560, margin: "0 auto 48px" }}>
            {/* ЗАГС */}
            <div style={{ flex: 1, textAlign: "center", padding: "0 20px" }}>
              <p className="font-sans-w" style={{ fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "#2d5a2d", marginBottom: 14, lineHeight: 1.6 }}>
                Торжественная<br />регистрация
              </p>
              <p className="font-serif" style={{ fontSize: "clamp(36px, 10vw, 52px)", fontWeight: 600, color: "#1a2e1a", lineHeight: 1, marginBottom: 14 }}>
                13:00
              </p>
              <div style={{ fontSize: 28, marginBottom: 14 }}>💍</div>
              <p className="font-sans-w" style={{ fontSize: 12, color: "#4a6a4a", lineHeight: 1.8 }}>
                г. Тюмень<br />
                ул. Малыгина, 85<br />
                ЗАГС
              </p>
            </div>

            {/* Вертикальная линия */}
            <div className="divider-vline" />

            {/* Ресторан */}
            <div style={{ flex: 1, textAlign: "center", padding: "0 20px" }}>
              <p className="font-sans-w" style={{ fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "#2d5a2d", marginBottom: 14, lineHeight: 1.6 }}>
                Праздничный<br />ужин
              </p>
              <p className="font-serif" style={{ fontSize: "clamp(36px, 10vw, 52px)", fontWeight: 600, color: "#1a2e1a", lineHeight: 1, marginBottom: 14 }}>
                [00:00]
              </p>
              <div style={{ fontSize: 28, marginBottom: 14 }}>🥂</div>
              <p className="font-sans-w" style={{ fontSize: 12, color: "#4a6a4a", lineHeight: 1.8 }}>
                г. Тюмень<br />
                ул. Николая Фёдорова, 9<br />
                Ресторан «Грин Хаус»
              </p>
            </div>
          </div>

          {/* Имена каллиграфией */}
          <div className="anim-w5">
            <p className="font-script" style={{ fontSize: "clamp(44px, 13vw, 72px)", color: "#2d5a2d", lineHeight: 1.2 }}>
              Александр и Ангелина
            </p>
          </div>
        </div>

        {/* Листья снизу (перевёрнутые) */}
        <div>
          <img
            src={LEAVES_BOTTOM}
            alt=""
            style={{ width: "100%", display: "block", maxHeight: 280, objectFit: "cover", objectPosition: "center", mixBlendMode: "multiply", transform: "scaleY(-1)" }}
          />
        </div>
      </section>

      {/* ===== ДРЕСС-КОД ===== */}
      <section style={{ background: "#f0f5f0", padding: "64px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <p className="font-sans-w" style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: "#2d5a2d", marginBottom: 16, opacity: 0.6 }}>
            03
          </p>
          <h2 className="font-serif" style={{ fontSize: "clamp(32px, 8vw, 48px)", fontWeight: 400, color: "#1a2e1a", fontStyle: "italic", marginBottom: 8 }}>
            Дресс-код
          </h2>
          <div style={{ width: 48, height: 1, background: "#2d5a2d", opacity: 0.3, margin: "0 auto 24px" }} />

          <p className="font-sans-w" style={{ fontSize: 14, lineHeight: 1.9, color: "#4a6a4a", marginBottom: 36 }}>
            Нам будет очень приятно, если вы поддержите атмосферу нашего праздника
            и выберете наряды в соответствии с нашим стилем.
          </p>

          <div className="w-section-card" style={{ display: "inline-block", maxWidth: 400, width: "100%", textAlign: "center" }}>
            <p className="font-script" style={{ fontSize: 38, color: "#2d5a2d", marginBottom: 8 }}>
              [Стиль]
            </p>
            <p className="font-sans-w" style={{ fontSize: 12, color: "#6a8a6a", marginBottom: 24, letterSpacing: "0.05em" }}>
              например: Коктейль / Пастельные тона
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              {["#F5F5EE", "#D4E4D4", "#A8C5A8", "#2d5a2d", "#1a2e1a"].map((c) => (
                <div key={c} style={{ width: 36, height: 36, background: c, border: "1px solid #d4e4d4" }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== RSVP ===== */}
      <section style={{ background: "#FAFAF7", padding: "64px 24px" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p className="font-sans-w" style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: "#2d5a2d", marginBottom: 16, opacity: 0.6 }}>
              04
            </p>
            <h2 className="font-serif" style={{ fontSize: "clamp(32px, 8vw, 48px)", fontWeight: 400, color: "#1a2e1a", fontStyle: "italic", marginBottom: 8 }}>
              Анкета гостя
            </h2>
            <div style={{ width: 48, height: 1, background: "#2d5a2d", opacity: 0.3, margin: "0 auto 20px" }} />
            <p className="font-sans-w" style={{ fontSize: 14, color: "#4a6a4a", lineHeight: 1.8 }}>
              Пожалуйста, ответьте до <strong>[Дата]</strong>, чтобы мы могли лучше подготовиться.
            </p>
          </div>

          {submitted ? (
            <div className="w-section-card" style={{ textAlign: "center", padding: "60px 32px" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>🌿</div>
              <p className="font-serif" style={{ fontSize: 28, fontStyle: "italic", color: "#2d5a2d", marginBottom: 8 }}>
                Спасибо!
              </p>
              <p className="font-sans-w" style={{ fontSize: 14, color: "#4a6a4a" }}>
                Мы получили ваш ответ и будем ждать вас!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-section-card">
              <div style={{ marginBottom: 28 }}>
                <label className="font-sans-w" style={{ display: "block", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#2d5a2d", marginBottom: 8 }}>
                  Имя и Фамилия
                </label>
                <input
                  type="text"
                  className="w-input"
                  placeholder="Иван Иванов"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div style={{ marginBottom: 28 }}>
                <label className="font-sans-w" style={{ display: "block", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#2d5a2d", marginBottom: 8 }}>
                  Номер телефона
                </label>
                <input
                  type="tel"
                  className="w-input"
                  placeholder="+7 (999) 000-00-00"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <div style={{ marginBottom: 28 }}>
                <label className="font-sans-w" style={{ display: "block", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#2d5a2d", marginBottom: 14 }}>
                  Сможете ли вы присутствовать?
                </label>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { value: "yes", label: "Да, с удовольствием приду" },
                    { value: "no", label: "К сожалению, не смогу быть" },
                  ].map((opt) => (
                    <label key={opt.value} className="w-radio-label">
                      <input
                        type="radio"
                        name="attending"
                        value={opt.value}
                        checked={form.attending === opt.value}
                        onChange={(e) => setForm({ ...form, attending: e.target.value })}
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 28 }}>
                <label className="font-sans-w" style={{ display: "block", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#2d5a2d", marginBottom: 14 }}>
                  На каких частях праздника вы будете?
                </label>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { value: "both", label: "И в ЗАГСе, и в ресторане" },
                    { value: "registry", label: "Только в ЗАГСе" },
                    { value: "dinner", label: "Только в ресторане" },
                  ].map((opt) => (
                    <label key={opt.value} className="w-radio-label">
                      <input
                        type="radio"
                        name="parts"
                        value={opt.value}
                        checked={form.parts === opt.value}
                        onChange={(e) => setForm({ ...form, parts: e.target.value })}
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 36 }}>
                <label className="font-sans-w" style={{ display: "block", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#2d5a2d", marginBottom: 8 }}>
                  Особые пожелания или аллергии
                </label>
                <textarea
                  rows={3}
                  className="w-input"
                  style={{ resize: "none" }}
                  placeholder="Укажите аллергии или пожелания..."
                  value={form.wishes}
                  onChange={(e) => setForm({ ...form, wishes: e.target.value })}
                />
              </div>

              <button type="submit" className="w-submit-btn">
                Подтвердить присутствие
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ===== ФИНАЛ ===== */}
      <section style={{ background: "#f0f5f0", padding: "64px 24px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, maxWidth: 320, margin: "0 auto 32px" }}>
          <div style={{ flex: 1, height: 1, background: "#2d5a2d", opacity: 0.2 }} />
          <span style={{ color: "#b8860b", opacity: 0.5, fontSize: 12 }}>✦</span>
          <div style={{ flex: 1, height: 1, background: "#2d5a2d", opacity: 0.2 }} />
        </div>

        <p className="font-serif" style={{ fontSize: "clamp(24px, 6vw, 36px)", fontStyle: "italic", color: "#1a2e1a", marginBottom: 20, lineHeight: 1.5 }}>
          До встречи на нашей свадьбе!
        </p>

        <p className="font-script" style={{ fontSize: "clamp(38px, 10vw, 58px)", color: "#2d5a2d", lineHeight: 1.3, marginBottom: 24 }}>
          Александр и Ангелина
        </p>

        <p className="font-sans-w" style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#2d5a2d", opacity: 0.5 }}>
          24 · Июня · 2026
        </p>
      </section>
    </div>
  );
}