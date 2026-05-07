import { useEffect, useRef } from "react";

export function About() {
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
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={ref} style={{ background: "#fff", padding: "7rem 1.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "5rem", alignItems: "center", flexWrap: "wrap" }}>

          {/* Photo */}
          <div className="reveal opacity-0-init" style={{ flex: "0 0 auto" }}>
            <div style={{
              width: 320,
              height: 400,
              borderRadius: "2rem",
              overflow: "hidden",
              boxShadow: "0 24px 64px rgba(27,58,107,0.18)",
              position: "relative",
            }}>
              <img
                src="/caio-photo.png"
                alt="Caio Augusto Ferreira – Psicólogo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
              {/* CRP badge */}
              <div style={{
                position: "absolute",
                bottom: "1.5rem",
                right: "1.5rem",
                background: "rgba(27,58,107,0.88)",
                backdropFilter: "blur(6px)",
                borderRadius: "1rem",
                padding: "0.5rem 1rem",
              }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#B8D4E3", fontWeight: 500 }}>
                  CRP 04/79361
                </span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div style={{ flex: "1 1 400px" }}>
            <div className="reveal opacity-0-init" style={{
              display: "inline-block",
              background: "#F4F8FB",
              border: "1px solid #d0e4ef",
              borderRadius: "2rem",
              padding: "0.35rem 1rem",
              marginBottom: "1.25rem",
            }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#7BAFC9", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Sobre mim
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
              Ciência e cuidado <br />
              <em>na mesma sala</em>
            </h2>

            <p className="reveal opacity-0-init" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "#334155", lineHeight: 1.85, marginBottom: "1.25rem" }}>
              Sou psicólogo formado em Psicologia, com atuação orientada pela Terapia Cognitivo-Comportamental (TCC).
              Minha trajetória é movida por um propósito simples: oferecer um espaço seguro onde ciência e humanidade caminham juntas.
            </p>

            <p className="reveal opacity-0-init" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "#334155", lineHeight: 1.85, marginBottom: "1.25rem" }}>
              Atuo com adolescentes e adultos que buscam mais clareza sobre si mesmos, seus relacionamentos e seus padrões emocionais.
              Tenho especial interesse em <strong style={{ color: "#1B3A6B" }}>neuropsicologia</strong> e na integração entre funcionamento cerebral e comportamento humano.
            </p>

            <p className="reveal opacity-0-init" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "#334155", lineHeight: 1.85, marginBottom: "2.5rem" }}>
              Acredito que a psicoterapia eficaz é aquela que respeita a individualidade de cada pessoa, usa o que a ciência comprova e
              gera mudanças reais — não apenas no consultório, mas na vida cotidiana.
            </p>

            {/* Credentials */}
            <div className="reveal opacity-0-init" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {[
                { icon: "🎓", label: "Formado em Psicologia" },
                { icon: "🧠", label: "Atuação pela TCC" },
                { icon: "🔬", label: "Neuropsicologia" },
                { icon: "📋", label: "Psicologia Baseada em Evidências" },
                { icon: "🪪", label: "CRP 04/79361" },
              ].map((item) => (
                <div key={item.label} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#F4F8FB",
                  border: "1px solid #d0e4ef",
                  borderRadius: "2rem",
                  padding: "0.5rem 1rem",
                }}>
                  <span style={{ fontSize: "0.9rem" }}>{item.icon}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#1B3A6B", fontWeight: 500 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
