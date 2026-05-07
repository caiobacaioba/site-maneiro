interface BrainLogoProps {
  size?: number;
  color?: string; // kept for API compatibility but not used — image uses original navy color
  className?: string;
  invert?: boolean; // true = white version (for dark backgrounds)
}

export function BrainLogo({ size = 60, className = "", invert = false }: BrainLogoProps) {
  return (
    <img
      src="/brain-logo.png"
      alt="Logo Caio Augusto Ferreira Psicólogo"
      width={size}
      height={size}
      className={className}
      style={{
        objectFit: "contain",
        filter: invert ? "brightness(0) invert(1)" : "none",
        display: "block",
      }}
    />
  );
}
