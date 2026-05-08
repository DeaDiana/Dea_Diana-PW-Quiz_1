import React from "react";

const latestComics = [
  { id: 1, title: "The Demon King Overrun...", genre: "Fantasi", time: "53 menit lalu", chapter: "Chapter 29", img: "/icon/demon_king.jpeg", update: "UP 1", flag: "🇰🇷" },
  { id: 2, title: "From Goblin to Goblin God", genre: "Fantasi", time: "54 menit lalu", chapter: "Chapter 107", img: "/icon/Goblin.jpg", update: "UP 1", flag: "🇨🇳" },
  { id: 3, title: "Cystic Story (Call The Spe...", genre: "Fantasi", time: "1 jam lalu", chapter: "Chapter 236", img: "/icon/komik.jpg", update: "UP 1", flag: "🇨🇳" },
  { id: 4, title: "Heavenly Demon Tavern", genre: "Martial Arts", time: "1 jam lalu", chapter: "Chapter 66", img: "/icon/heavenly.jpeg", update: "UP 1", flag: "🇰🇷" },
];

export function LatestSection() {
  return (
    <section id="latest" style={s.section}>
      <div style={s.header}>
        <h2 style={s.title}>
          Baca Komik <span style={s.badge}>Terbaru</span>
        </h2>
      </div>

      <div style={s.grid}>
        {latestComics.map((item) => (
          <div key={item.id} style={s.card}>
            <div style={s.imgWrap}>
              <img src={item.img} alt={item.title} style={s.img} />
              <span style={s.updateBadge}>{item.update}</span>
              <span style={s.flagBadge}>{item.flag}</span>
            </div>

            <div style={s.info}>
              <div style={s.itemTitle}>{item.title}</div>
              <div style={s.meta}>{item.genre} · {item.time}</div>
              <button style={s.chapterBtn}>{item.chapter}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const s = {
  section: {
    padding: "40px 80px",
    background: "#fff",
    fontFamily: "'Nunito', sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: 28,
  },
  title: {
    fontSize: "1.4rem",
    fontWeight: 800,
    color: "#1a1a2e",
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
  },
  badge: {
    background: "#4361ee",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: 800,
    padding: "4px 16px",
    borderRadius: 8,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 20,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    cursor: "pointer",
  },
  imgWrap: {
    position: "relative",
    borderRadius: 10,
    overflow: "hidden",
    aspectRatio: "3/4",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  updateBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    background: "#4361ee",
    color: "#fff",
    fontSize: "0.7rem",
    fontWeight: 800,
    padding: "3px 8px",
    borderRadius: 6,
  },
  flagBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    fontSize: "1.1rem",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  itemTitle: {
    fontSize: "0.92rem",
    fontWeight: 800,
    color: "#1a1a2e",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  meta: {
    fontSize: "0.78rem",
    color: "#9ca3af",
  },
  chapterBtn: {
    marginTop: 4,
    padding: "5px 14px",
    fontSize: "0.78rem",
    fontWeight: 700,
    background: "#fff",
    color: "#1a1a2e",
    border: "1px solid #e5e7eb",
    borderRadius: 6,
    cursor: "pointer",
    width: "fit-content",
    fontFamily: "'Nunito', sans-serif",
  },
};