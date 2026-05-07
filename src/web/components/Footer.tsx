import { BrainLogo } from "./BrainLogo";

export function Footer() {
  return (
    <footer style={{
      background: "#0F2547",
      padding: "4rem 1.5rem 2rem",
      color: "#B8D4E3",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap", marginBottom: "3rem", justifyContent: "space-between" }}>
          {/* Brand */}
          <div style={{ flex: "0 1 280px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <BrainLogo size={38} invert={true} />
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1rem", color: "#fff", lineHeight: 1.2 }}>
                  Caio Augusto Ferreira
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "#7BAFC9", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Psicólogo
                </div>
              </div>
            </div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
              color: "#7BAFC9",
              lineHeight: 1.75,
              maxWidth: 260,
            }}>
              Psicoterapia baseada em evidências para quem busca transformação real com fundamento científico.
            </p>
          </div>

          {/* Links */}
          <div style={{ flex: "0 1 180px" }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#7BAFC9", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              Navegação
            </div>
            {[
              { label: "Sobre mim", href: "#sobre" },
              { label: "Como funciona", href: "#tratamento" },
              { label: "Abordagem TCC", href: "#abordagem" },
              { label: "Áreas de atuação", href: "#areas" },
              { label: "Contato", href: "#contato" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{
                display: "block",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                color: "#B8D4E3",
                textDecoration: "none",
                marginBottom: "0.6rem",
                transition: "color 0.2s",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#B8D4E3"; }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact info */}
          <div style={{ flex: "0 1 240px" }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#7BAFC9", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              Contato
            </div>
            {[
              { label: "WhatsApp: (31) 99887-9744", href: "https://wa.me/5531998879744" },
              { label: "@psicaioaugusto", href: "https://instagram.com/psicaioaugusto" },
              { label: "psicaioaugusto@gmail.com", href: "mailto:psicaioaugusto@gmail.com" },
            ].map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" style={{
                display: "block",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.875rem",
                color: "#B8D4E3",
                textDecoration: "none",
                marginBottom: "0.75rem",
                transition: "color 0.2s",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#B8D4E3"; }}
              >
                {item.label}
              </a>
            ))}

            <div style={{ marginTop: "1.5rem" }}>
              <a
                href="#contato"
                style={{
                  display: "inline-block",
                  background: "#1B3A6B",
                  color: "#fff",
                  padding: "0.7rem 1.5rem",
                  borderRadius: "2rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  border: "1px solid rgba(184,212,227,0.2)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#B8D4E3"; e.currentTarget.style.color = "#1B3A6B"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#1B3A6B"; e.currentTarget.style.color = "#fff"; }}
              >
                Agendar consulta
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(184,212,227,0.1)",
          paddingTop: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#7BAFC9" }}>
            © {new Date().getFullYear()} Caio Augusto Ferreira — Psicólogo. Todos os direitos reservados.
          </span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#7BAFC9" }}>
            CRP 04/79361 · Psicologia Baseada em Evidências
          </span>
        </div>
      </div>
    </footer>
  );
}
