import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Lucas M.",
    age: "32 anos",
    text: "Comecei o processo achando que terapia não era para mim. Hoje entendo que foi a melhor decisão que tomei. O Caio é preciso, direto e ao mesmo tempo muito humano. Minha ansiedade reduziu muito em poucos meses.",
    stars: 5,
  },
  {
    name: "Rafael S.",
    age: "27 anos",
    text: "A abordagem baseada em evidências me convenceu a tentar. Não é papo de coach nem promessa vazia. É técnica, é ciência, e funciona. Minha autoestima e minha vida profissional mudaram completamente.",
    stars: 5,
  },
  {
    name: "Eduardo L.",
    age: "41 anos",
    text: "Sempre tive resistência à terapia, mas o atendimento online facilitou muito. O Caio tem uma habilidade incrível de tornar o complexo simples. Consegui entender padrões que me prendiam há anos.",
    stars: 5,
  },
  {
    name: "Gabriel P.",
    age: "23 anos",
    text: "Fui encaminhado por um médico com TOC severo. O tratamento com TCC superou minhas expectativas. Voltei a ter controle da minha rotina e da minha vida. Recomendo sem hesitar.",
    stars: 5,
  },
];

export function Testimonials() {
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
              }, i * 120);
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
    <section ref={ref} style={{ background: "#F4F8FB", padding: "7rem 1.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="reveal opacity-0-init" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{
            display: "inline-block",
            background: "#fff",
            border: "1px solid #d0e4ef",
            borderRadius: "2rem",
            padding: "0.35rem 1rem",
            marginBottom: "1.25rem",
          }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#7BAFC9", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Depoimentos
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            fontWeight: 700,
            color: "#1B3A6B",
            marginBottom: "0.75rem",
          }}>
            O que dizem <em>os pacientes</em>
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            color: "#9DB4C3",
            maxWidth: 400,
            margin: "0 auto",
          }}>
            * Depoimentos ilustrativos para fins de visualização
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal opacity-0-init"
              style={{
                background: "#fff",
                borderRadius: "1.5rem",
                padding: "2rem",
                border: "1px solid #e2eef5",
                transition: "all 0.3s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 15px 40px rgba(27,58,107,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
            >
              {/* Quote mark */}
              <div style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                fontFamily: "'Playfair Display', serif",
                fontSize: "4rem",
                color: "#B8D4E3",
                lineHeight: 1,
                userSelect: "none",
              }}>
                "
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: "0.2rem", marginBottom: "1rem" }}>
                {Array.from({ length: t.stars }).map((_, s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#1B3A6B" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>

              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                color: "#334155",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
                fontStyle: "italic",
              }}>
                "{t.text}"
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "#B8D4E3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#1B3A6B", fontSize: "1rem" }}>
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#1B3A6B", fontSize: "0.9rem" }}>{t.name}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#9DB4C3" }}>{t.age}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
