import { useEffect, useRef } from "react";

const cards = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Atendimento Online",
    desc: "Sessões por videochamada com a mesma qualidade e sigilo do consultório presencial. Flexibilidade para você cuidar da saúde mental de qualquer lugar.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "Atendimento Presencial",
    desc: "Consultas em ambiente acolhedor, pensado para seu conforto e privacidade. Um espaço onde você pode ser quem realmente é.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: "Sessões Individuais",
    desc: "Atendimento exclusivamente focado em você — suas necessidades, seus objetivos, seu ritmo. Sem julgamentos, com total atenção.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Terapia Baseada em Evidências",
    desc: "Técnicas com comprovação científica, especialmente da Terapia Cognitivo-Comportamental. Resultados mensuráveis e alinhados ao que a ciência comprova.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Ambiente Sigiloso",
    desc: "Absoluta confidencialidade em todos os atendimentos. Tudo o que é compartilhado em sessão permanece protegido, conforme o Código de Ética Profissional.",
  },
];

export function HowItWorks() {
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
              }, i * 100);
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
    <section id="tratamento" ref={ref} style={{ background: "#F4F8FB", padding: "7rem 1.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal opacity-0-init" style={{ textAlign: "center", marginBottom: "1rem" }}>
          <div style={{
            display: "inline-block",
            background: "#fff",
            border: "1px solid #d0e4ef",
            borderRadius: "2rem",
            padding: "0.35rem 1rem",
            marginBottom: "1.25rem",
          }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#7BAFC9", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Como funciona
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            fontWeight: 700,
            color: "#1B3A6B",
            marginBottom: "1rem",
          }}>
            O tratamento do jeito <em>que funciona para você</em>
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.05rem",
            color: "#64748B",
            maxWidth: 560,
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Cada pessoa tem um percurso único. Por isso, o atendimento é estruturado para se adaptar às suas necessidades — não o contrário.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginTop: "3.5rem",
        }}>
          {cards.map((card, i) => (
            <div
              key={i}
              className="reveal opacity-0-init"
              style={{
                background: "#fff",
                borderRadius: "1.5rem",
                padding: "2rem",
                border: "1px solid #e2eef5",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 20px 50px rgba(27,58,107,0.12)";
                el.style.borderColor = "#7BAFC9";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "#e2eef5";
              }}
            >
              <div style={{
                width: 60,
                height: 60,
                borderRadius: "1rem",
                background: "#F4F8FB",
                border: "1px solid #d0e4ef",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
              }}>
                {card.icon}
              </div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "#1B3A6B",
                marginBottom: "0.75rem",
              }}>
                {card.title}
              </h3>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                color: "#64748B",
                lineHeight: 1.75,
              }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
