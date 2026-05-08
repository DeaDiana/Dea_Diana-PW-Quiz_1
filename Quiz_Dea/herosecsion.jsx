import React from "react";

export function HeroSection() {
  return (
    <section
      id="home"
      style={styles.section}
    >
      <div style={styles.inner}>

        <div style={styles.left}>
          <h1 style={styles.heading}>
            <span style={styles.blue}>Baca</span> Mangga<br />
            Favoritmu <span style={styles.orange}>Tanpa Ribet</span>
          </h1>
          <p style={styles.desc}>
            Nikmati ribuan manga dari berbagai genre dengan tampilan nyaman,
            cepat, dan gratis. Update terbaru, kapan saja, di mana saja.
          </p>
        </div>

        <div style={styles.right}>
          <span style={styles.label}>No. 1 Mangga di Mangganime</span>
          <div style={styles.card}>
            <img src="/icon/blackclover.jpg" alt="Black Clover" style={styles.cardImg} />
            <div style={styles.cardName}>Black Clover</div>
          </div>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#fff",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    fontFamily: "'Nunito', sans-serif",
    paddingLeft: "80px",
    paddingRight: "80px",
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 1000,
    margin: "0 auto",
    gap: 60,
  },
  left: { flex: 1 },
  heading: {
    fontSize: "2.6rem",
    fontWeight: 900,
    color: "#1a1a2e",
    lineHeight: 1.2,
    margin: "0 0 14px",
  },
  blue: { color: "#4361ee" },
  orange: { color: "#f77f00" },
  desc: {
    fontSize: "0.95rem",
    color: "#6b7280",
    lineHeight: 1.7,
    margin: 0,
    maxWidth: 340,
  },
  right: {
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
  },
  label: {
    fontSize: "0.78rem",
    color: "#9ca3af",
    fontWeight: 600,
  },
  card: {
    background: "white",
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    width: 320,
},
cardImg: {
    width: "100%",
    height: 280,
    objectFit: "cover",
    display: "block",
},
  cardName: {
    textAlign: "center",
    fontSize: "0.88rem",
    fontWeight: 800,
    color: "#1a1a2e",
    padding: "10px 12px 12px",
  },
};