import React from "react";

export function Footer() {
  return (
    <footer style={s.footer}>
      <img src="/icon/logomangaku.png" alt="Komiku Logo" style={s.logo} />
      <p style={s.text}>Copyright @Dea Diana Sari 242310045 All right reserved.</p>
    </footer>
  );
}

const s = {
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    background: "#ece9e9e1",
    fontFamily: "'Nunito', sans-serif",
    borderTop: "1px solid #e5e7eb",
    gap: 12,
  },
  logo: {
    width: 80,
    height: 80,
    objectFit: "contain",
  },
  text: {
    fontSize: "0.85rem",
    color: "#9ca3af",
    margin: 0,
  },
};