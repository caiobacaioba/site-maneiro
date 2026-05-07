import { useEffect, useRef, useState } from "react";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "1rem 1.25rem",
    borderRadius: "0.875rem",
    border: "1.5px solid #d0e4ef",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    color: "#334155",
    background: "#fff",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box" as const,
  };

  return (
    <section id="contato" ref={ref} style={{ background: "#B8D4E3", padding: "7rem 1.5rem", position: "relative", overflow: "hidden" }}>
      {/* Pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `radial-gradient(circle, rgba(27,58,107,0.08) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="reveal opacity-0-init" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(27,58,107,0.1)",
            border: "1px solid rgba(27,58,107,0.2)",
            borderRadius: "2rem",
            padding: "0.35rem 1rem",
            marginBottom: "1.25rem",
          }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#1B3A6B", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Contato
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            fontWeight: 700,
            color: "#1B3A6B",
            marginBottom: "1rem",
          }}>
            Dê o primeiro passo <em>hoje</em>
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.05rem",
            color: "#1B3A6B",
            opacity: 0.8,
            maxWidth: 520,
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Entre em contato para agendar sua consulta de avaliação. Responderei em até 24 horas.
          </p>
        </div>

        <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap", alignItems: "flex-start" }}>
          {/* Left: contact options */}
          <div style={{ flex: "0 1 340px" }}>
            <div className="reveal opacity-0-init" style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
              {[
                {
                  href: "https://wa.me/5531998879744",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#1B3A6B">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  ),
                  label: "WhatsApp",
                  value: "(31) 99887-9744",
                  sub: "Resposta em até 24h",
                },
                {
                  href: "https://instagram.com/psicaioaugusto",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ),
                  label: "Instagram",
                  value: "@psicaioaugusto",
                  sub: "Conteúdo sobre saúde mental",
                },
                {
                  href: "mailto:psicaioaugusto@gmail.com",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  label: "E-mail",
                  value: "psicaioaugusto@gmail.com",
                  sub: "Para dúvidas e agendamentos",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "1.25rem",
                    padding: "1.25rem",
                    border: "1px solid rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.9)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.7)"; e.currentTarget.style.transform = "translateX(0)"; }}
                >
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: "0.875rem",
                    background: "#B8D4E3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#1B3A6B" }}>{item.label}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#334155" }}>{item.value}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#7BAFC9" }}>{item.sub}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA button */}
            <a
              className="reveal opacity-0-init"
              href="https://wa.me/5531998879744"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                background: "#1B3A6B",
                color: "#fff",
                padding: "1.1rem 2rem",
                borderRadius: "3rem",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 500,
                textDecoration: "none",
                boxShadow: "0 8px 30px rgba(27,58,107,0.25)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#0F2547"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#1B3A6B"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#4ade80">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar consulta agora
            </a>
          </div>

          {/* Right: form */}
          <div className="reveal opacity-0-init" style={{ flex: "1 1 380px" }}>
            <div style={{
              background: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(12px)",
              borderRadius: "2rem",
              padding: "2.5rem",
              border: "1px solid rgba(255,255,255,0.9)",
              boxShadow: "0 20px 60px rgba(27,58,107,0.1)",
            }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: "#B8D4E3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                  }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#1B3A6B", fontSize: "1.4rem", marginBottom: "0.75rem" }}>Mensagem enviada!</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#64748B", lineHeight: 1.7 }}>
                    Obrigado pelo contato. Responderei em até 24 horas. Até breve!
                  </p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#1B3A6B", marginBottom: "0.5rem" }}>
                    Envie uma mensagem
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#64748B", marginBottom: "2rem" }}>
                    Preencha o formulário e entrarei em contato em breve.
                  </p>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div>
                      <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 500, color: "#1B3A6B", display: "block", marginBottom: "0.4rem" }}>
                        Nome
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Seu nome completo"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => { e.currentTarget.style.borderColor = "#7BAFC9"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "#d0e4ef"; }}
                      />
                    </div>
                    <div>
                      <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 500, color: "#1B3A6B", display: "block", marginBottom: "0.4rem" }}>
                        E-mail
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="seu@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => { e.currentTarget.style.borderColor = "#7BAFC9"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "#d0e4ef"; }}
                      />
                    </div>
                    <div>
                      <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 500, color: "#1B3A6B", display: "block", marginBottom: "0.4rem" }}>
                        Mensagem
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Conte um pouco sobre o que você está buscando..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        style={{ ...inputStyle, resize: "vertical" as const }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = "#7BAFC9"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "#d0e4ef"; }}
                      />
                    </div>
                    <button
                      type="submit"
                      style={{
                        background: "#1B3A6B",
                        color: "#fff",
                        padding: "1rem",
                        borderRadius: "0.875rem",
                        border: "none",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "1rem",
                        fontWeight: 500,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        marginTop: "0.5rem",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "#0F2547"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "#1B3A6B"; e.currentTarget.style.transform = "translateY(0)"; }}
                    >
                      Enviar mensagem
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
