import { useState, useEffect, useRef } from "react";

const faqs = [
  {
    q: "Como funciona a primeira sessão?",
    a: "A primeira sessão é uma consulta de avaliação. Conversamos sobre o que te trouxe até a terapia, suas expectativas e objetivos. Também explico como funciona meu trabalho e respondemos dúvidas. Não há compromisso — é um espaço para você decidir se quer continuar.",
  },
  {
    q: "Com que frequência acontecem as sessões?",
    a: "Na maioria dos casos, iniciamos com sessões semanais, que geralmente duram entre 50 e 60 minutos. À medida que o processo avança, podemos ajustar a frequência conforme suas necessidades e evolução.",
  },
  {
    q: "O atendimento online tem a mesma eficácia?",
    a: "Sim. Estudos comprovam que a TCC online é tão eficaz quanto o atendimento presencial para a maioria das demandas. A plataforma é segura, sigilosa e com qualidade de vídeo e áudio adequados para o atendimento.",
  },
  {
    q: "Quanto tempo dura um processo terapêutico?",
    a: "A TCC é uma abordagem focada e estruturada, o que geralmente resulta em tratamentos mais breves em comparação a outras abordagens. O tempo varia conforme a demanda, mas muitos pacientes notam mudanças significativas entre 12 e 20 sessões.",
  },
  {
    q: "Você atende planos de saúde?",
    a: "Atualmente trabalho com atendimento particular. Para informações sobre valores e formas de pagamento, entre em contato por WhatsApp ou pelo formulário de contato.",
  },
  {
    q: "O que é discutido em sessão fica em sigilo?",
    a: "Absolutamente. O sigilo profissional é uma obrigação ética e legal do psicólogo. Tudo o que é compartilhado em sessão é estritamente confidencial, com exceção das situações previstas no Código de Ética do Conselho Federal de Psicologia.",
  },
  {
    q: "Qual a diferença entre psicólogo e psiquiatra?",
    a: "O psicólogo realiza psicoterapia — trabalha com a mente através da fala, técnicas e comportamento. O psiquiatra é médico e pode prescrever medicamentos. Em muitos casos, o tratamento combinado (terapia + medicação) é o mais eficaz, e trabalhamos em colaboração quando necessário.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
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
    <section ref={ref} style={{ background: "#fff", padding: "7rem 1.5rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
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
              Perguntas frequentes
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            fontWeight: 700,
            color: "#1B3A6B",
          }}>
            Dúvidas comuns <em>sobre o processo</em>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal opacity-0-init"
              style={{
                border: "1px solid",
                borderColor: open === i ? "#7BAFC9" : "#e2eef5",
                borderRadius: "1.25rem",
                overflow: "hidden",
                transition: "all 0.3s ease",
                background: open === i ? "#F4F8FB" : "#fff",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "1rem",
                }}
              >
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#1B3A6B",
                }}>
                  {faq.q}
                </span>
                <div style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: open === i ? "#1B3A6B" : "#F4F8FB",
                  border: "1px solid",
                  borderColor: open === i ? "#1B3A6B" : "#d0e4ef",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "all 0.3s ease",
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke={open === i ? "#fff" : "#1B3A6B"} strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </button>
              {open === i && (
                <div style={{
                  padding: "0 1.5rem 1.5rem",
                  animation: "fadeIn 0.3s ease",
                }}>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.95rem",
                    color: "#334155",
                    lineHeight: 1.8,
                  }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
