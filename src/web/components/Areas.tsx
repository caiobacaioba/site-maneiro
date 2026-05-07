import { useEffect, useRef } from "react";

const areas = [
  {
    title: "Ansiedade",
    desc: "Preocupação excessiva, tensão constante e medo que afetam sua qualidade de vida e relacionamentos.",
    color: "#EBF3F9",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
      </svg>
    ),
  },
  {
    title: "Depressão",
    desc: "Tristeza persistente, falta de energia e perda de prazer que comprometem o dia a dia e as conexões afetivas.",
    color: "#F4F8FB",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 15s1.5-2 4-2 4 2 4 2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
  },
  {
    title: "TOC",
    desc: "Pensamentos intrusivos e comportamentos compulsivos que consomem tempo e geram grande sofrimento emocional.",
    color: "#EBF3F9",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/>
        <polyline points="1 20 1 14 7 14"/>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
      </svg>
    ),
  },
  {
    title: "Autoestima",
    desc: "Dificuldade em se valorizar, autocrítica excessiva e sensação constante de não ser bom o suficiente.",
    color: "#F4F8FB",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: "TDAH",
    desc: "Dificuldades de atenção, impulsividade e hiperatividade que impactam a rotina, o trabalho e as relações pessoais.",
    color: "#EBF3F9",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 12h8"/>
        <path d="M12 8v4"/>
        <circle cx="12" cy="16" r="0.5" fill="#1B3A6B"/>
      </svg>
    ),
  },
  {
    title: "Fobia Social",
    desc: "Medo intenso de situações sociais, julgamento alheio e evitação que limita sua vida profissional e pessoal.",
    color: "#F4F8FB",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: "Estresse",
    desc: "Sobrecarga emocional, dificuldade em desacelerar e sensação de estar sempre no limite da sua capacidade.",
    color: "#EBF3F9",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    title: "Desenvolvimento Emocional",
    desc: "Autoconhecimento, inteligência emocional e construção de uma vida mais alinhada com seus valores e propósitos.",
    color: "#F4F8FB",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10"/>
        <line x1="18" y1="20" x2="18" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="16"/>
      </svg>
    ),
  },
];

export function Areas() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in-up");
                (el as HTMLElement).style.opacity = "1";
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="areas" ref={ref} style={{ background: "#fff", padding: "7rem 1.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="reveal opacity-0-init" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{
            display: "inline-block",
            background: "#F4F8FB",
            border: "1px solid #d0e4ef",
            borderRadius: "2rem",
            padding: "0.35rem 1rem",
            marginBottom: "1.25rem",
          }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#7BAFC9", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Áreas de atuação
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            fontWeight: 700,
            color: "#1B3A6B",
            marginBottom: "1rem",
          }}>
            Posso ajudar com <em>o que você enfrenta</em>
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.05rem",
            color: "#64748B",
            maxWidth: 520,
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Cada desafio emocional é único. Abaixo estão algumas das principais questões que trabalho em psicoterapia.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "1.25rem",
        }}>
          {areas.map((area, i) => (
            <div
              key={i}
              className="reveal opacity-0-init"
              style={{
                background: area.color,
                borderRadius: "1.5rem",
                padding: "1.75rem",
                border: "1px solid #e2eef5",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(27,58,107,0.1)";
                e.currentTarget.style.background = "#EBF3F9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.background = area.color;
              }}
            >
              <div style={{
                width: 52,
                height: 52,
                borderRadius: "1rem",
                background: "#fff",
                border: "1px solid #d0e4ef",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
              }}>
                {area.icon}
              </div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#1B3A6B",
                marginBottom: "0.6rem",
              }}>
                {area.title}
              </h3>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                color: "#64748B",
                lineHeight: 1.7,
              }}>
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
