import { useEffect, useRef } from "react";

const pillars = [
  {
    num: "01",
    title: "Pensamentos",
    desc: "Identificar padrões de pensamento automáticos que geram sofrimento e aprender a questioná-los com base em evidências reais.",
  },
  {
    num: "02",
    title: "Emoções",
    desc: "Compreender e regular as emoções sem suprimi-las, desenvolvendo tolerância ao desconforto e respostas mais adaptativas.",
  },
  {
    num: "03",
    title: "Comportamentos",
    desc: "Modificar padrões comportamentais que perpetuam sofrimento, substituindo-os por ações alinhadas aos seus valores e objetivos.",
  },
  {
    num: "04",
    title: "Autonomia",
    desc: "O objetivo final é que você se torne o seu próprio terapeuta — capaz de lidar com os desafios da vida com clareza e equilíbrio.",
  },
];

export function Approach() {
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
    <section id="abordagem" ref={ref} style={{ background: "#B8D4E3", padding: "7rem 1.5rem", position: "relative", overflow: "hidden" }}>
      {/* Background pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `radial-gradient(circle, rgba(27,58,107,0.08) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", gap: "5rem", alignItems: "flex-start", flexWrap: "wrap" }}>
          {/* Left: intro */}
          <div style={{ flex: "1 1 380px" }}>
            <div className="reveal opacity-0-init" style={{
              display: "inline-block",
              background: "rgba(27,58,107,0.1)",
              border: "1px solid rgba(27,58,107,0.2)",
              borderRadius: "2rem",
              padding: "0.35rem 1rem",
              marginBottom: "1.25rem",
            }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#1B3A6B", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Minha abordagem
              </span>
            </div>

            <h2 className="reveal opacity-0-init" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "#1B3A6B",
              lineHeight: 1.25,
              marginBottom: "1.5rem",
            }}>
              Terapia Cognitivo-<br />
              <em>Comportamental</em>
            </h2>

            <p className="reveal opacity-0-init" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "#1B3A6B", lineHeight: 1.85, marginBottom: "1.5rem", opacity: 0.85 }}>
              A TCC é uma das abordagens mais estudadas e eficazes da psicologia moderna, e orienta minha prática clínica. 
              É estruturada, prática e orientada para resultados concretos na sua vida cotidiana.
            </p>

            <p className="reveal opacity-0-init" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "#1B3A6B", lineHeight: 1.85, marginBottom: "2rem", opacity: 0.85 }}>
              Diferente de abordagens puramente introspectivas, a TCC trabalha a partir do presente — 
              identificando o que mantém o sofrimento e desenvolvendo estratégias reais para transformá-lo.
            </p>

            {/* Science badge */}
            <div className="reveal opacity-0-init" style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              background: "rgba(27,58,107,0.12)",
              borderRadius: "1.25rem",
              padding: "1.25rem 1.5rem",
              border: "1px solid rgba(27,58,107,0.2)",
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "#1B3A6B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8D4E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", fontWeight: 600, color: "#1B3A6B" }}>Respaldo científico</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#1B3A6B", opacity: 0.75, marginTop: "0.2rem" }}>
                  Milhares de estudos clínicos comprovam a eficácia da TCC para ansiedade, depressão, TOC e muito mais
                </div>
              </div>
            </div>
          </div>

          {/* Right: pillars */}
          <div style={{ flex: "1 1 380px", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {pillars.map((p, i) => (
              <div
                key={i}
                className="reveal opacity-0-init"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "1.25rem",
                  padding: "1.5rem",
                  border: "1px solid rgba(255,255,255,0.8)",
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.9)"; e.currentTarget.style.transform = "translateX(6px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.7)"; e.currentTarget.style.transform = "translateX(0)"; }}
              >
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "rgba(27,58,107,0.2)",
                  lineHeight: 1,
                  flexShrink: 0,
                }}>
                  {p.num}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 600, color: "#1B3A6B", marginBottom: "0.5rem" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#334155", lineHeight: 1.7 }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
