"use client";
import React, { useState } from "react";

const rankings = [
  { id: 1, title: "Black Clover", genre: "Aksi", views: "94rb views", chapter: "Chapter 392", img: "/icon/blackclover.jpg" },
  { id: 2, title: "Tsue to Tsurugi no Wistoria", genre: "Fantasi", views: "89rb views", chapter: "Chapter 63", img: "/icon/Tsue-to.jpg" },
  { id: 3, title: "Mairimashita! Iruma-kun", genre: "Fantasi", views: "73rb views", chapter: "Chapter 441", img: "/icon/Mairimashita.jpg" },
  { id: 4, title: "One Punch Man", genre: "Aksi", views: "66rb views", chapter: "Chapter 302", img: "/icon/One-Punch-Man.jpg" },
  { id: 5, title: "Super God Pet Shop", genre: "Fantasi", views: "64rb views", chapter: "Chapter 210", img: "/icon/Super-God.jpeg" },
  { id: 6, title: "One Piece", genre: "Aksi", views: "51rb views", chapter: "Chapter 1181", img: "/icon/One-Piece.jpg" },
  { id: 7, title: "Magic Emperor", genre: "Fantasi", views: "49rb views", chapter: "Chapter 852", img: "/icon/Magic-Emperor.jpg" },
  { id: 8, title: "Ao Ashi", genre: "Drama", views: "36rb views", chapter: "Chapter 357", img: "/icon/Ao-Ashi.jpg" },
  { id: 9, title: "God of Martial Arts", genre: "Isekai", views: "34rb views", chapter: "Chapter 1141", img: "/icon/God-of-Martial-Arts.jpg" },
  { id: 10, title: "Release That Witch", genre: "Isekai", views: "32rb views", chapter: "Chapter 695", img: "/icon/That-Witch.jpg" },
];

export function RankingSection() {
  return (
    <section id="ranking" style={s.section}>
      <h2 style={s.title}>Peringkat Komiku</h2>

      <div style={s.grid}>
        {rankings.map((item) => (
          <div key={item.id} style={s.card}>
            <div style={s.rank}>{item.id}</div>
            <img src={item.img} alt={item.title} style={s.img} />
            <div style={s.info}>
              <div style={s.itemTitle}>{item.title}</div>
              <div style={s.meta}>{item.genre} · {item.views}</div>
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
    padding: "20px",
    background: "#ece9e9e1",
    fontFamily: "'Nunito', sans-serif",
  },
  title: {
    fontSize: "1.3rem",
    fontWeight: 800,
    color: "#1a1a2e",
    marginBottom: 16,
  },
  tabRow: {
    display: "flex",
    borderBottom: "1px solid #e5e7eb",
    marginBottom: 24,
  },
  tab: {
    padding: "10px 40px",
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "#6b7280",
    cursor: "pointer",
    border: "1px solid #e5e7eb",
    borderBottom: "none",
    background: "#fff",
  },
  tabActive: {
    background: "#4361ee",
    color: "#fff",
    borderColor: "#4361ee",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 1,
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    overflow: "hidden",
  },
  card: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "14px 16px",
    border: "1px solid #e5e7eb",
    background: "#fff",
    position: "relative",
  },
  rank: {
    position: "absolute",
    top: 0,
    left: 0,
    background: "#4361ee",
    color: "#fff",
    fontSize: "0.7rem",
    fontWeight: 800,
    width: 22,
    height: 22,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 6,
  },
  img: {
    width: 80,
    height: 80,
    objectFit: "cover",
    borderRadius: 8,
    flexShrink: 0,
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  itemTitle: {
    fontSize: "0.95rem",
    fontWeight: 800,
    color: "#1a1a2e",
  },
  meta: {
    fontSize: "0.78rem",
    color: "#9ca3af",
  },
  chapterBtn: {
    marginTop: 6,
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