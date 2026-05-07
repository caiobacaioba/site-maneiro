import { useEffect, useRef } from "react";
import { BrainLogo } from "./BrainLogo";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = ref.current?.querySelectorAll(".animate-on-load");
    elements?.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.15}s`;
      el.classList.add("animate-fade-in-up");
    });
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        background: "linear-gradient(160deg, #B8D4E3 0%, #cce0ed 50%, #daeaf5 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "5rem",
      }}
    >
      {/* Decorative circles */}
      <div style={{
        position: "absolute",
        top: "5%",
        right: "5%",
        width: 320,
        height: 320,
        borderRadius: "50%",
        background: "rgba(27, 58, 107, 0.05)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "-5%",
        left: "-3%",
        width: 280,
        height: 280,
        borderRadius: "50%",
        background: "rgba(27, 58, 107, 0.04)",
        pointerEvents: "none",
      }} />
      {/* Grid pattern overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `radial-gradient(circle, rgba(27,58,107,0.07) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 1.5rem", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "3rem", flexWrap: "wrap" }}>

          {/* Text content */}
          <div style={{ flex: "1 1 500px", maxWidth: 640 }}>
            {/* Badge */}
            <div
              className="animate-on-load opacity-0-init"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(27,58,107,0.1)",
                border: "1px solid rgba(27,58,107,0.15)",
                borderRadius: "2rem",
                padding: "0.4rem 1rem",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#1B3A6B" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#1B3A6B", fontWeight: 500, letterSpacing: "0.05em" }}>
                Psicologia Baseada em Evidências
              </span>
            </div>

            <h1
              className="animate-on-load opacity-0-init"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 700,
                color: "#1B3A6B",
                lineHeight: 1.15,
                marginBottom: "0.5rem",
              }}
            >
              Caio Augusto
              <br />
              <span style={{ color: "#0F2547" }}>Ferreira</span>
            </h1>

            <div
              className="animate-on-load opacity-0-init"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.1rem",
                color: "#1B3A6B",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
                opacity: 0.8,
              }}
            >
              Psicólogo
            </div>

            <p
              className="animate-on-load opacity-0-init"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.1rem",
                color: "#334155",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                maxWidth: 520,
              }}
            >
              Psicoterapia baseada em evidências para{" "}
              <strong style={{ color: "#1B3A6B" }}>ansiedade</strong>,{" "}
              <strong style={{ color: "#1B3A6B" }}>autoestima</strong>,{" "}
              <strong style={{ color: "#1B3A6B" }}>relacionamentos</strong> e{" "}
              <strong style={{ color: "#1B3A6B" }}>desenvolvimento emocional</strong>.
            </p>

            <div
              className="animate-on-load opacity-0-init"
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <a
                href="#contato"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#1B3A6B",
                  color: "#fff",
                  padding: "1rem 2rem",
                  borderRadius: "3rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 8px 30px rgba(27,58,107,0.25)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#0F2547"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(27,58,107,0.35)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#1B3A6B"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(27,58,107,0.25)"; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Agendar atendimento
              </a>
              <a
                href="#sobre"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "transparent",
                  color: "#1B3A6B",
                  padding: "1rem 2rem",
                  borderRadius: "3rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  border: "2px solid #1B3A6B",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(27,58,107,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Saiba mais
              </a>
            </div>

            {/* Stats */}
            <div
              className="animate-on-load opacity-0-init"
              style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", flexWrap: "wrap" }}
            >
              {[
                { num: "TCC", label: "Orientação clínica" },
                { num: "Online", label: "& Presencial" },
                { num: "Adultos", label: "& Adolescentes" },
              ].map((stat) => (
                <div key={stat.num}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700, color: "#1B3A6B" }}>{stat.num}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#64748B", marginTop: "0.2rem" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Logo visual block */}
          <div
            className="animate-on-load opacity-0-init"
            style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}
          >
            <div style={{
              width: 260,
              height: 260,
              border: "2px solid rgba(27,58,107,0.2)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              background: "rgba(255,255,255,0.4)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 20px 60px rgba(27,58,107,0.12)",
            }}>
              {/* Rotating ring */}
              <div style={{
                position: "absolute",
                inset: -12,
                border: "1px dashed rgba(27,58,107,0.25)",
                borderRadius: "50%",
                animation: "spin 20s linear infinite",
              }} />
              <BrainLogo size={200} />
            </div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              color: "#7BAFC9",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textAlign: "center",
            }}>
              Ciência · Evidência · Cuidado
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        opacity: 0.6,
      }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#1B3A6B", letterSpacing: "0.1em" }}>SCROLL</div>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #1B3A6B, transparent)" }} />
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
