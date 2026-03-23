import { useState } from "react";
import Icon from "@/components/ui/icon";

const WEDDING_PHOTO = "https://cdn.poehali.dev/projects/e3bc3631-22b9-4e63-a381-a0ddce546fff/files/2f0b9d84-34e9-4884-a063-0e484c4abda9.jpg";

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
    <div className="min-h-screen bg-[#FAF8F5] font-golos text-[#1C1917]">
      <style>{`
        .font-cormorant { font-family: 'Cormorant', serif; }
        .font-golos { font-family: 'Golos Text', sans-serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .anim-1 { animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) both; }
        .anim-2 { animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) 0.15s both; }
        .anim-3 { animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) 0.3s both; }
        .anim-4 { animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) 0.45s both; }
        .anim-5 { animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) 0.6s both; }
        .line-anim { animation: lineGrow 1.2s cubic-bezier(.22,1,.36,1) 0.2s both; transform-origin: left; }
        .photo-anim { animation: fadeIn 1.4s ease 0.1s both; }
        .divider-geo {
          display: flex; align-items: center; gap: 16px; margin: 0 auto;
        }
        .divider-geo::before, .divider-geo::after {
          content: ''; flex: 1; height: 1px; background: #C9B99A;
        }
      `}</style>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #8B7355 0%, transparent 50%), radial-gradient(circle at 80% 80%, #C9B99A 0%, transparent 50%)" }} />
        </div>

        <div className="absolute top-8 left-8 anim-1">
          <div className="w-12 h-12 border border-[#C9B99A] rotate-45 opacity-40" />
        </div>
        <div className="absolute bottom-12 right-8 anim-1">
          <div className="w-8 h-8 border border-[#C9B99A] rotate-45 opacity-30" />
        </div>
        <div className="absolute top-1/3 right-12 anim-2">
          <div className="w-px h-24 bg-[#C9B99A] opacity-30" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
          <p className="anim-1 font-golos text-[11px] tracking-[0.35em] uppercase text-[#8B7355] mb-8">
            Приглашение
          </p>

          <div className="anim-2 w-full max-w-sm aspect-[3/4] mb-10 overflow-hidden">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 border border-[#C9B99A] opacity-50 z-10 pointer-events-none" />
              <div className="absolute top-3 left-3 right-3 bottom-3 border border-[#C9B99A] opacity-25 z-10 pointer-events-none" />
              <img
                src={WEDDING_PHOTO}
                alt="Свадебное фото"
                className="photo-anim w-full h-full object-cover"
                style={{ filter: "sepia(15%) contrast(1.05)" }}
              />
            </div>
          </div>

          <h1 className="anim-3 font-cormorant text-[52px] sm:text-[68px] font-light leading-none tracking-tight text-[#1C1917] mb-3">
            Мы женимся!
          </h1>

          <div className="anim-4 divider-geo w-full max-w-xs my-5">
            <span className="font-golos text-[10px] tracking-[0.3em] uppercase text-[#8B7355]">◆</span>
          </div>

          <p className="anim-4 font-cormorant text-[28px] sm:text-[36px] italic font-light text-[#1C1917] tracking-wide">
            [Имя Жениха] &amp; [Имя Невесты]
          </p>

          <p className="anim-5 font-golos text-[13px] tracking-[0.25em] uppercase text-[#8B7355] mt-5">
            [Число · Месяц · Год]
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 anim-5 flex flex-col items-center gap-2 text-[#C9B99A]">
          <span className="font-golos text-[10px] tracking-[0.3em] uppercase">листайте</span>
          <Icon name="ChevronDown" size={16} />
        </div>
      </section>

      {/* PROGRAM */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <div className="mb-16 text-center">
          <p className="font-golos text-[10px] tracking-[0.35em] uppercase text-[#8B7355] mb-4">02</p>
          <h2 className="font-cormorant text-[38px] sm:text-[48px] font-light text-[#1C1917]">Программа дня</h2>
          <div className="mt-5 h-px w-16 bg-[#C9B99A] mx-auto line-anim" />
        </div>

        <p className="font-golos text-[15px] leading-relaxed text-[#6B5E52] text-center mb-16 max-w-xl mx-auto">
          Дорогие родные и близкие! Мы будем очень рады видеть вас в этот важный для нас день.
          Наш праздник пройдёт в два этапа.
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* ЗАГС */}
          <div className="relative bg-white border border-[#E8DDD0] p-8">
            <div className="absolute -top-3 left-8 bg-[#FAF8F5] px-3">
              <span className="font-golos text-[10px] tracking-[0.3em] uppercase text-[#8B7355]">Часть I</span>
            </div>
            <h3 className="font-cormorant text-[24px] font-light text-[#1C1917] mb-6 mt-2">Официальная регистрация</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="Clock" size={14} className="text-[#C9B99A] mt-1 shrink-0" />
                <div>
                  <p className="font-golos text-[11px] tracking-[0.2em] uppercase text-[#8B7355] mb-0.5">Время</p>
                  <p className="font-golos text-[15px] text-[#1C1917]">[00:00]</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="MapPin" size={14} className="text-[#C9B99A] mt-1 shrink-0" />
                <div>
                  <p className="font-golos text-[11px] tracking-[0.2em] uppercase text-[#8B7355] mb-0.5">Место</p>
                  <p className="font-golos text-[15px] text-[#1C1917]">[Название ЗАГСа]</p>
                  <p className="font-golos text-[13px] text-[#6B5E52] mt-0.5">[Точный адрес]</p>
                </div>
              </div>
            </div>
            <div className="mt-6 h-32 bg-[#F0EBE3] border border-[#E8DDD0] flex items-center justify-center">
              <div className="text-center">
                <Icon name="Map" size={20} className="text-[#C9B99A] mx-auto mb-2" />
                <p className="font-golos text-[11px] tracking-[0.2em] uppercase text-[#8B7355]">Карта проезда</p>
              </div>
            </div>
          </div>

          {/* Ресторан */}
          <div className="relative bg-white border border-[#E8DDD0] p-8">
            <div className="absolute -top-3 left-8 bg-[#FAF8F5] px-3">
              <span className="font-golos text-[10px] tracking-[0.3em] uppercase text-[#8B7355]">Часть II</span>
            </div>
            <h3 className="font-cormorant text-[24px] font-light text-[#1C1917] mb-6 mt-2">Свадебный ужин</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="Clock" size={14} className="text-[#C9B99A] mt-1 shrink-0" />
                <div>
                  <p className="font-golos text-[11px] tracking-[0.2em] uppercase text-[#8B7355] mb-0.5">Время</p>
                  <p className="font-golos text-[15px] text-[#1C1917]">[00:00]</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="MapPin" size={14} className="text-[#C9B99A] mt-1 shrink-0" />
                <div>
                  <p className="font-golos text-[11px] tracking-[0.2em] uppercase text-[#8B7355] mb-0.5">Место</p>
                  <p className="font-golos text-[15px] text-[#1C1917]">[Название ресторана]</p>
                  <p className="font-golos text-[13px] text-[#6B5E52] mt-0.5">[Точный адрес]</p>
                </div>
              </div>
            </div>
            <div className="mt-6 h-32 bg-[#F0EBE3] border border-[#E8DDD0] flex items-center justify-center">
              <div className="text-center">
                <Icon name="Map" size={20} className="text-[#C9B99A] mx-auto mb-2" />
                <p className="font-golos text-[11px] tracking-[0.2em] uppercase text-[#8B7355]">Карта проезда</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DRESS CODE */}
      <section className="py-24 px-6 bg-[#1C1917]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <p className="font-golos text-[10px] tracking-[0.35em] uppercase text-[#8B7355] mb-4">03</p>
            <h2 className="font-cormorant text-[38px] sm:text-[48px] font-light text-[#FAF8F5]">Дресс-код</h2>
            <div className="mt-5 h-px w-16 bg-[#8B7355] mx-auto" />
          </div>

          <p className="font-golos text-[15px] leading-relaxed text-[#C9B99A] text-center mb-12 max-w-xl mx-auto">
            Нам будет очень приятно, если вы поддержите атмосферу нашего праздника
            и выберете наряды в соответствии с нашим стилем.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-10 justify-center">
            <div className="text-center">
              <div className="w-20 h-20 border border-[#8B7355] rotate-45 flex items-center justify-center mx-auto mb-5">
                <div className="w-8 h-8 bg-[#8B7355] opacity-60" />
              </div>
              <p className="font-cormorant text-[22px] italic text-[#FAF8F5] font-light">[Стиль]</p>
              <p className="font-golos text-[12px] tracking-[0.2em] uppercase text-[#8B7355] mt-1">Например: Коктейль</p>
            </div>

            <div className="hidden sm:block w-px h-24 bg-[#333] mx-8" />

            <div className="text-center">
              <p className="font-golos text-[11px] tracking-[0.3em] uppercase text-[#8B7355] mb-5">Цветовая палитра</p>
              <div className="flex gap-3 justify-center">
                {["#F5F0E8", "#E8DDD0", "#C9B99A", "#8B7355", "#5C4A35"].map((color) => (
                  <div
                    key={color}
                    className="w-10 h-10 border border-[#333]"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <p className="font-golos text-[11px] text-[#6B5E52] mt-3">Пастельные и тёплые тона</p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section className="py-24 px-6 max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <p className="font-golos text-[10px] tracking-[0.35em] uppercase text-[#8B7355] mb-4">04</p>
          <h2 className="font-cormorant text-[38px] sm:text-[48px] font-light text-[#1C1917]">Анкета гостя</h2>
          <div className="mt-5 h-px w-16 bg-[#C9B99A] mx-auto" />
        </div>

        <p className="font-golos text-[15px] leading-relaxed text-[#6B5E52] text-center mb-10">
          Пожалуйста, ответьте на вопросы до{" "}
          <span className="text-[#1C1917] font-medium">[Дата]</span>,
          чтобы мы могли лучше подготовиться к встрече с вами.
        </p>

        {submitted ? (
          <div className="text-center py-16 border border-[#E8DDD0] bg-white">
            <div className="w-12 h-12 border border-[#C9B99A] rotate-45 mx-auto mb-6 flex items-center justify-center">
              <Icon name="Check" size={16} className="text-[#8B7355] -rotate-45" />
            </div>
            <p className="font-cormorant text-[28px] font-light text-[#1C1917]">Спасибо!</p>
            <p className="font-golos text-[14px] text-[#6B5E52] mt-2">Мы получили ваш ответ.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-[#E8DDD0] p-8 sm:p-10 space-y-8">
            <div>
              <label className="block font-golos text-[11px] tracking-[0.25em] uppercase text-[#8B7355] mb-2">
                Имя и Фамилия
              </label>
              <input
                type="text"
                className="w-full border-b border-[#E8DDD0] bg-transparent py-2 font-golos text-[15px] text-[#1C1917] outline-none focus:border-[#8B7355] transition-colors placeholder:text-[#C9B99A]"
                placeholder="Иван Иванов"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block font-golos text-[11px] tracking-[0.25em] uppercase text-[#8B7355] mb-2">
                Номер телефона
              </label>
              <input
                type="tel"
                className="w-full border-b border-[#E8DDD0] bg-transparent py-2 font-golos text-[15px] text-[#1C1917] outline-none focus:border-[#8B7355] transition-colors placeholder:text-[#C9B99A]"
                placeholder="+7 (999) 000-00-00"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="block font-golos text-[11px] tracking-[0.25em] uppercase text-[#8B7355] mb-4">
                Сможете ли вы присутствовать?
              </label>
              <div className="space-y-3">
                {[
                  { value: "yes", label: "Да, с удовольствием приду" },
                  { value: "no", label: "К сожалению, не смогу быть" },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="attending"
                      value={opt.value}
                      checked={form.attending === opt.value}
                      onChange={(e) => setForm({ ...form, attending: e.target.value })}
                      className="w-4 h-4 accent-[#8B7355]"
                    />
                    <span className="font-golos text-[14px] text-[#1C1917] group-hover:text-[#8B7355] transition-colors">
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-golos text-[11px] tracking-[0.25em] uppercase text-[#8B7355] mb-4">
                На каких частях праздника вы будете?
              </label>
              <div className="space-y-3">
                {[
                  { value: "both", label: "И в ЗАГСе, и в ресторане" },
                  { value: "registry", label: "Только в ЗАГСе" },
                  { value: "dinner", label: "Только в ресторане" },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="parts"
                      value={opt.value}
                      checked={form.parts === opt.value}
                      onChange={(e) => setForm({ ...form, parts: e.target.value })}
                      className="w-4 h-4 accent-[#8B7355]"
                    />
                    <span className="font-golos text-[14px] text-[#1C1917] group-hover:text-[#8B7355] transition-colors">
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-golos text-[11px] tracking-[0.25em] uppercase text-[#8B7355] mb-2">
                Особые пожелания или аллергии
              </label>
              <textarea
                rows={3}
                className="w-full border-b border-[#E8DDD0] bg-transparent py-2 font-golos text-[15px] text-[#1C1917] outline-none focus:border-[#8B7355] transition-colors resize-none placeholder:text-[#C9B99A]"
                placeholder="Укажите аллергии или пожелания..."
                value={form.wishes}
                onChange={(e) => setForm({ ...form, wishes: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1C1917] text-[#FAF8F5] py-4 font-golos text-[12px] tracking-[0.3em] uppercase hover:bg-[#8B7355] transition-colors duration-300"
            >
              Подтвердить присутствие
            </button>
          </form>
        )}
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 text-center border-t border-[#E8DDD0]">
        <div className="w-8 h-8 border border-[#C9B99A] rotate-45 mx-auto mb-8 opacity-40" />
        <p className="font-cormorant text-[32px] sm:text-[40px] italic font-light text-[#1C1917] mb-3">
          До встречи на нашей свадьбе!
        </p>
        <p className="font-golos text-[13px] tracking-[0.25em] uppercase text-[#8B7355]">
          С любовью, [Ваши имена]
        </p>
        <div className="mt-10 h-px w-12 bg-[#C9B99A] mx-auto" />
        <p className="font-golos text-[11px] text-[#C9B99A] mt-6 tracking-[0.2em]">
          [Число · Месяц · Год]
        </p>
      </footer>
    </div>
  );
}
