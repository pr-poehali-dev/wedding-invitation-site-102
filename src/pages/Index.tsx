import { useState } from "react";

const COUPLE_PHOTO = "https://cdn.poehali.dev/projects/e3bc3631-22b9-4e63-a381-a0ddce546fff/bucket/c3869897-c17f-4c2d-ac16-688f958fffd9.png";
const BRIDE_PHOTO = "https://cdn.poehali.dev/projects/e3bc3631-22b9-4e63-a381-a0ddce546fff/bucket/a6347634-fe14-4902-9837-14a7f874fbcc.png";
const GROOM_PHOTO = "https://cdn.poehali.dev/projects/e3bc3631-22b9-4e63-a381-a0ddce546fff/bucket/10aa14eb-a447-45f4-8a35-145949d86920.png";
const IMG_EUCALYPTUS = "https://cdn.poehali.dev/projects/e3bc3631-22b9-4e63-a381-a0ddce546fff/bucket/8674e4a8-62e4-43b5-ab3f-8d2b2f2a8519.jpeg";
const IMG_GEOM = "https://cdn.poehali.dev/projects/e3bc3631-22b9-4e63-a381-a0ddce546fff/bucket/2bb4a89e-dd25-447e-9136-c2e0fa958cf9.jpeg";
const IMG_MARBLE = "https://cdn.poehali.dev/projects/e3bc3631-22b9-4e63-a381-a0ddce546fff/bucket/5dade6b8-1ac8-47b8-833d-0bd566428aaf.jpeg";
const IMG_WHITE_FLOWERS = "https://cdn.poehali.dev/projects/e3bc3631-22b9-4e63-a381-a0ddce546fff/bucket/d3e0f154-1662-45ce-84da-4258474c52f0.jpeg";
const IMG_MINT_FLOWERS = "https://cdn.poehali.dev/projects/e3bc3631-22b9-4e63-a381-a0ddce546fff/bucket/14afae9e-5c87-45f0-a192-8705e53c4cd2.jpeg";

export default function Index() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    attending: "",
    parts: "",
    alcohol: "",
    wishes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", color: "#1a2e1a", minHeight: "100vh", background: "#f4f7f2" }}>
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

        .leaves-bg {
          position: relative;
        }
        .leaves-bg > * { position: relative; z-index: 1; }

        .w-section-card {
          background: rgba(255,255,255,0.85);
          border: 1px solid #c8dcc8;
          padding: 40px 32px;
          position: relative;
          backdrop-filter: blur(2px);
        }
        .w-section-card::before {
          content: '';
          position: absolute;
          top: 6px; left: 6px; right: 6px; bottom: 6px;
          border: 1px solid #c8dcc8;
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

        /* Угловые листья для секций */
        .corner-leaves {
          position: relative;
          overflow: hidden;
        }
        .corner-leaves::before,
        .corner-leaves::after {
          content: '';
          position: absolute;
          width: 180px;
          height: 180px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Cellipse cx='30' cy='20' rx='38' ry='16' fill='%2390b878' opacity='0.22' transform='rotate(-35 30 20)'/%3E%3Cellipse cx='55' cy='45' rx='32' ry='13' fill='%23b8d4a0' opacity='0.18' transform='rotate(-20 55 45)'/%3E%3Cellipse cx='20' cy='60' rx='28' ry='11' fill='%2370a060' opacity='0.16' transform='rotate(-50 20 60)'/%3E%3Cellipse cx='80' cy='25' rx='24' ry='10' fill='%23c8e0b0' opacity='0.15' transform='rotate(-10 80 25)'/%3E%3Ccircle cx='45' cy='15' r='3' fill='white' opacity='0.5'/%3E%3Ccircle cx='70' cy='35' r='2' fill='white' opacity='0.4'/%3E%3Ccircle cx='25' cy='40' r='2.5' fill='white' opacity='0.45'/%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
          pointer-events: none;
          z-index: 0;
        }
        .corner-leaves::before {
          top: -10px; left: -10px;
          transform: rotate(0deg);
        }
        .corner-leaves::after {
          top: -10px; right: -10px;
          transform: scaleX(-1);
        }
        .corner-leaves > * { position: relative; z-index: 1; }
      `}</style>

      {/* ===== ФОНОВЫЕ ДЕКОРАЦИИ С ПЛАВНЫМИ ПЕРЕХОДАМИ ===== */}
      {/* Верхний левый — белые цветы с листьями */}
      <div style={{
        position: "fixed", top: 0, left: 0,
        width: "clamp(200px, 42vw, 420px)", height: "clamp(200px, 42vw, 420px)",
        pointerEvents: "none", zIndex: 10,
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 0% 0%, black 30%, transparent 75%)",
        maskImage: "radial-gradient(ellipse 80% 80% at 0% 0%, black 30%, transparent 75%)",
      }}>
        <img src={IMG_WHITE_FLOWERS} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top left", opacity: 0.72, mixBlendMode: "multiply" }} />
      </div>
      {/* Верхний правый — эвкалипт */}
      <div style={{
        position: "fixed", top: 0, right: 0,
        width: "clamp(180px, 38vw, 380px)", height: "clamp(220px, 50vw, 500px)",
        pointerEvents: "none", zIndex: 10,
        WebkitMaskImage: "radial-gradient(ellipse 75% 85% at 100% 0%, black 30%, transparent 75%)",
        maskImage: "radial-gradient(ellipse 75% 85% at 100% 0%, black 30%, transparent 75%)",
      }}>
        <img src={IMG_EUCALYPTUS} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top right", opacity: 0.65, mixBlendMode: "multiply", transform: "scaleX(-1)" }} />
      </div>
      {/* Нижний левый — мрамор с цветами */}
      <div style={{
        position: "fixed", bottom: 0, left: 0,
        width: "clamp(200px, 44vw, 440px)", height: "clamp(200px, 44vw, 440px)",
        pointerEvents: "none", zIndex: 10,
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 0% 100%, black 30%, transparent 75%)",
        maskImage: "radial-gradient(ellipse 80% 80% at 0% 100%, black 30%, transparent 75%)",
      }}>
        <img src={IMG_MARBLE} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "bottom left", opacity: 0.68, mixBlendMode: "multiply" }} />
      </div>
      {/* Нижний правый — мятные цветы */}
      <div style={{
        position: "fixed", bottom: 0, right: 0,
        width: "clamp(200px, 44vw, 440px)", height: "clamp(200px, 44vw, 440px)",
        pointerEvents: "none", zIndex: 10,
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 100% 100%, black 30%, transparent 75%)",
        maskImage: "radial-gradient(ellipse 80% 80% at 100% 100%, black 30%, transparent 75%)",
      }}>
        <img src={IMG_MINT_FLOWERS} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "bottom right", opacity: 0.62, mixBlendMode: "multiply" }} />
      </div>

      <div className="leaves-bg" style={{ position: "relative", zIndex: 20 }}>

        {/* ===== ФОТО ЖЕНИХА И НЕВЕСТЫ ===== */}
        <section style={{ padding: "48px 24px 32px" }}>
          <p className="anim-w1 font-sans-w" style={{ textAlign: "center", fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "#2d5a2d", opacity: 0.7, marginBottom: 32 }}>
            ✦ &nbsp; Свадебное приглашение &nbsp; ✦
          </p>
          <div className="anim-photo" style={{ display: "flex", gap: 16, justifyContent: "center", maxWidth: 600, margin: "0 auto" }}>
            <div className="couple-photo-wrap" style={{ flex: 1, maxWidth: 280 }}>
              <img
                src={BRIDE_PHOTO}
                alt="Ангелина"
                style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <div className="couple-photo-wrap" style={{ flex: 1, maxWidth: 280 }}>
              <img
                src={GROOM_PHOTO}
                alt="Александр"
                style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </div>
        </section>

        {/* ===== ФОТО + ПРИВЕТСТВИЕ ===== */}
        <section style={{ padding: "0 0 0" }}>
          {/* Фото пары */}
          <div style={{ padding: "24px 32px 0", display: "flex", justifyContent: "center" }}>
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
            <h1 className="anim-w2 font-script" style={{ fontSize: "clamp(52px, 15vw, 88px)", color: "#1a2e1a", lineHeight: 1.15, marginBottom: 24 }}>
              Александр<br />& Ангелина
            </h1>

            <div className="anim-w3" style={{ display: "flex", alignItems: "center", gap: 14, maxWidth: 340, margin: "0 auto 28px" }}>
              <div style={{ flex: 1, height: 1, background: "#2d5a2d", opacity: 0.2 }} />
              <span style={{ color: "#b8860b", opacity: 0.6, fontSize: 11 }}>✦</span>
              <div style={{ flex: 1, height: 1, background: "#2d5a2d", opacity: 0.2 }} />
            </div>

            <p className="anim-w4 font-serif" style={{ fontSize: "clamp(16px, 4.5vw, 22px)", color: "#2d5a2d", fontStyle: "italic", lineHeight: 1.9, maxWidth: 520, margin: "0 auto" }}>
              Привет!<br />
              Мы приглашаем тебя на нашу свадьбу и будем очень рады видеть тебя в этот день.<br /><br />
              Можешь приехать в ЗАГС, поддержать и быть с нами с самого начала, а можешь приехать сразу на банкет. Мы будем очень рады тебе ☺️
            </p>
          </div>
        </section>

        {/* ===== ПРИГЛАСИТЕЛЬНОЕ С ЛИСТЬЯМИ ===== */}
        <section style={{ background: "rgba(255,255,255,0.7)", position: "relative", overflow: "hidden", backdropFilter: "blur(4px)" }}>
          {/* Листья по углам сверху */}
          <div style={{ position: "relative" }}>
            {/* Контент */}
            <div style={{ textAlign: "center", padding: "48px 32px 24px", position: "relative", zIndex: 3 }}>
              <p className="anim-w1 font-sans-w" style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#2d5a2d", marginBottom: 12, lineHeight: 1.7 }}>
                Приглашаем Вас на торжество,<br />посвящённое дню нашего бракосочетания
              </p>

              <h2 className="anim-w2 font-serif" style={{ fontSize: "clamp(36px, 10vw, 68px)", fontWeight: 700, color: "#1a3a1a", letterSpacing: "0.04em", lineHeight: 1, margin: "20px 0 32px", textTransform: "uppercase" }}>
                24 Июня 2026
              </h2>

              {/* Программа — две колонки */}
              <div className="anim-w3" style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", maxWidth: 520, margin: "0 auto 32px", borderTop: "1px solid #b8d0b8", paddingTop: 28 }}>
                {/* ЗАГС */}
                <div style={{ flex: 1, textAlign: "center", padding: "0 16px" }}>
                  <p className="font-sans-w" style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#2d5a2d", marginBottom: 14, lineHeight: 1.7, fontWeight: 600 }}>
                    Торжественная<br />регистрация
                  </p>
                  <p className="font-serif" style={{ fontSize: "clamp(32px, 9vw, 50px)", fontWeight: 700, color: "#1a3a1a", lineHeight: 1, marginBottom: 16 }}>
                    15:00
                  </p>
                  <div style={{ fontSize: 36, marginBottom: 14 }}>💍</div>
                  <p className="font-sans-w" style={{ fontSize: 11, color: "#4a6a4a", lineHeight: 2 }}>
                    г. Тюмень<br />
                    ул. Малыгина, 85<br />
                    ЗАГС
                  </p>
                </div>

                {/* Вертикальная линия */}
                <div style={{ width: 1, background: "#2d5a2d", opacity: 0.2, alignSelf: "stretch", minHeight: 200 }} />

                {/* Ресторан */}
                <div style={{ flex: 1, textAlign: "center", padding: "0 16px" }}>
                  <p className="font-sans-w" style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#2d5a2d", marginBottom: 14, lineHeight: 1.7, fontWeight: 600 }}>
                    Праздничный<br />ужин
                  </p>
                  <p className="font-serif" style={{ fontSize: "clamp(24px, 6.5vw, 38px)", fontWeight: 700, color: "#1a3a1a", lineHeight: 1, marginBottom: 16 }}>
                    18:30–00:30
                  </p>
                  <div style={{ fontSize: 36, marginBottom: 14 }}>🥂</div>
                  <p className="font-sans-w" style={{ fontSize: 11, color: "#4a6a4a", lineHeight: 2 }}>
                    г. Тюмень<br />
                    ул. Николая Фёдорова, 9<br />
                    Ресторан «Грин Хаус»
                  </p>
                </div>
              </div>

              {/* Имена каллиграфией */}
              <div className="anim-w5">
                <p className="font-script" style={{ fontSize: "clamp(40px, 12vw, 68px)", color: "#2d5a2d", lineHeight: 1.2 }}>
                  Александр и Ангелина
                </p>
              </div>
            </div>

            {/* Отступ снизу */}
            <div style={{ height: 48 }}>
            </div>
          </div>
        </section>

        {/* ===== ДРЕСС-КОД ===== */}
        <section style={{ padding: "64px 24px" }}>
          <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
            <p className="font-sans-w" style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: "#2d5a2d", marginBottom: 16, opacity: 0.6 }}>
              03
            </p>
            <h2 className="font-serif" style={{ fontSize: "clamp(32px, 8vw, 48px)", fontWeight: 400, color: "#1a2e1a", fontStyle: "italic", marginBottom: 8 }}>
              Дресс-код
            </h2>
            <div style={{ width: 48, height: 1, background: "#2d5a2d", opacity: 0.3, margin: "0 auto 40px" }} />

            <div style={{ maxWidth: 480, margin: "0 auto", padding: "32px 36px 36px", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(180,210,180,0.4)", backdropFilter: "blur(4px)", position: "relative" }}>
              <div style={{ position: "absolute", top: 12, left: 12, right: 12, bottom: 12, border: "1px solid rgba(180,210,180,0.25)", pointerEvents: "none" }} />
              <p className="font-serif" style={{ fontSize: "clamp(17px, 4.5vw, 22px)", color: "#2d5a2d", lineHeight: 1.85, fontStyle: "italic", margin: 0 }}>
                Для нас самое главное&nbsp;—&nbsp;ваше присутствие!
              </p>
              <div style={{ width: 32, height: 1, background: "#b8860b", opacity: 0.4, margin: "18px auto" }} />
              <p className="font-sans-w" style={{ fontSize: 13, lineHeight: 1.9, color: "#4a6a4a", marginBottom: 28 }}>
                Но мы будем очень благодарны, если поддержите<br />цветовую гамму нашей свадьбы 🥰
              </p>
              <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 14 }}>
                {["#EFE9DF", "#F2C5C5", "#D9C5E8", "#C5D5ED", "#BFD0A8", "#F0F0C0"].map((c) => (
                  <div key={c} style={{ width: 36, height: 36, borderRadius: "50%", background: c, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }} />
                ))}
              </div>
              <p className="font-sans-w" style={{ fontSize: 10, color: "#8aaa8a", letterSpacing: "0.15em", textTransform: "uppercase", margin: 0 }}>
                Пастельные тона · Коктейльный стиль
              </p>
            </div>
          </div>
        </section>

        {/* ===== RSVP ===== */}
        <section style={{ padding: "64px 24px" }}>
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
                Пожалуйста, ответьте до <strong>01.05.2026</strong>, чтобы мы могли лучше подготовиться.
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

                <div style={{ marginBottom: 28 }}>
                  <label className="font-sans-w" style={{ display: "block", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#2d5a2d", marginBottom: 14 }}>
                    Пожелания по алкоголю
                  </label>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { value: "wine", label: "Вино (красное / белое)" },
                      { value: "champagne", label: "Шампанское / игристое" },
                      { value: "strong", label: "Крепкий алкоголь (водка, виски и т.д.)" },
                      { value: "none", label: "Не употребляю алкоголь" },
                    ].map((opt) => (
                      <label key={opt.value} className="w-radio-label">
                        <input
                          type="radio"
                          name="alcohol"
                          value={opt.value}
                          checked={form.alcohol === opt.value}
                          onChange={(e) => setForm({ ...form, alcohol: e.target.value })}
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
        <section style={{ padding: "64px 24px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
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
    </div>
  );
}