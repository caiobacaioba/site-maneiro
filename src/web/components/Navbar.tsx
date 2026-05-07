import { useState, useEffect } from "react";
import { BrainLogo } from "./BrainLogo";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamento", href: "#tratamento" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "Áreas", href: "#areas" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #d0e4ef" : "none",
        padding: "0 1.5rem",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <a href="#hero" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
          <BrainLogo size={44} />
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1rem", color: "#1B3A6B", lineHeight: 1.2 }}>
              Caio Augusto
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "#7BAFC9", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Psicólogo
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                color: "#334155",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1B3A6B")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#334155")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5531998879744"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#1B3A6B",
              color: "#fff",
              padding: "0.6rem 1.5rem",
              borderRadius: "2rem",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#0F2547"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#1B3A6B"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Agendar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }}
        >
          <div style={{ width: 24, height: 2, background: "#1B3A6B", marginBottom: 5, borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <div style={{ width: 24, height: 2, background: "#1B3A6B", marginBottom: 5, borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: "opacity 0.3s" }} />
          <div style={{ width: 24, height: 2, background: "#1B3A6B", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(255,255,255,0.98)",
          borderTop: "1px solid #d0e4ef",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#1B3A6B", textDecoration: "none", fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            style={{ background: "#1B3A6B", color: "#fff", padding: "0.8rem 1.5rem", borderRadius: "2rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", fontWeight: 500, textDecoration: "none", textAlign: "center" }}
          >
            Agendar atendimento
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
