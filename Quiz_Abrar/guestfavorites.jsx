"use client";
import React from "react";

const listings = [
  {
    img: "/icon/hero.jpeg",
    badge: "Guest favorite",
    name: "Villa in Babakan Madang",
    rating: "4.89",
    reviews: "816",
    desc: "Istana Savage – stunning private seclude...",
    beds: "4 king beds",
    dates: "May 19 – 24",
    price: "Rp22,800,716",
    oldPrice: null,
    nights: "5 nights",
  },
  {
    img: "/icon/img1.jpeg",
    badge: "Guest favorite",
    name: "Apartment in Kecamatan Bo...",
    rating: "4.92",
    reviews: "37",
    desc: "Tiny, Comfortable, Easy Access...",
    beds: "2 beds",
    dates: "May 17 – 22",
    price: "Rp2,567,648",
    oldPrice: null,
    nights: "5 nights",
  },
  {
    img: "/icon/img2.jpeg",
    badge: "Guest favorite",
    name: "Apartment in Kecamatan Ba...",
    rating: "4.91",
    reviews: "35",
    desc: "Apart Royal Sentul, cozy place",
    beds: "3 beds",
    dates: "May 7 – 12",
    price: "Rp4,499,661",
    oldPrice: null,
    nights: "5 nights",
  },
  {
    img: "/icon/img3.jpeg",
    badge: "Guest favorite",
    name: "Villa in Kecamatan Bogor Se...",
    rating: "4.96",
    reviews: "98",
    desc: "The Private Peaceful Villa",
    beds: "3 beds",
    dates: "May 7 – 12",
    price: "Rp4,412,869",
    oldPrice: "Rp8,805,793",
    nights: "5 nights",
  },
  {
    img: "/icon/img4.jpeg",
    badge: "Guest favorite",
    name: "Villa in Kecamatan Bogor Se...",
    rating: "4.96",
    reviews: "98",
    desc: "The Private Peaceful Villa",
    beds: "3 beds",
    dates: "May 7 – 12",
    price: "Rp4,412,869",
    oldPrice: "Rp8,805,793",
    nights: "5 nights",
  },
  {
    img: "/icon/img5.jpeg",
    badge: "Guest favorite",
    name: "Villa in Kecamatan Bogor Se...",
    rating: "4.96",
    reviews: "98",
    desc: "The Private Peaceful Villa",
    beds: "3 beds",
    dates: "May 7 – 12",
    price: "Rp4,412,869",
    oldPrice: "Rp8,805,793",
    nights: "5 nights",
  },
];

const sx = {
  section: {
    fontFamily: "'Segoe UI', sans-serif",
    padding: "2rem 0",
    maxWidth: "1100px",
  },
  title: {
    fontSize: "26px",
    fontWeight: 700,
    color: "#222",
    marginBottom: "6px",
  },
  subtitle: {
    fontSize: "15px",
    color: "#717171",
    marginBottom: "1.5rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
    marginBottom: "1.5rem",
  },
  card: {
    borderRadius: "14px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.18s",
    backgroundColor: "#fff",
  },
  imgWrap: {
    position: "relative",
    width: "100%",
    aspectRatio: "4 / 3",
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  badge: {
    position: "absolute",
    top: "10px",
    left: "10px",
    background: "#fff",
    color: "#222",
    fontSize: "12px",
    fontWeight: 600,
    padding: "4px 10px",
    borderRadius: "20px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
  },
  body: {
    padding: "10px 2px 0",
  },
  nameRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "6px",
  },
  nameText: {
    flex: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontSize: "14px",
    fontWeight: 500,
    color: "#222",
  },
  rating: {
    display: "flex",
    alignItems: "center",
    gap: "3px",
    fontSize: "13px",
    fontWeight: 500,
    color: "#222",
    whiteSpace: "nowrap",
    flexShrink: 0,
  },
  ratingCount: {
    fontWeight: 400,
    color: "#717171",
  },
  desc: {
    fontSize: "13px",
    color: "#717171",
    marginTop: "2px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  beds: {
    fontSize: "13px",
    color: "#717171",
    marginTop: "1px",
  },
  dates: {
    fontSize: "13px",
    color: "#717171",
    marginTop: "1px",
  },
  priceRow: {
    fontSize: "14px",
    color: "#222",
    marginTop: "5px",
  },
  oldPrice: {
    textDecoration: "line-through",
    color: "#aaa",
    fontSize: "13px",
    marginRight: "4px",
  },
  priceStrong: {
    fontWeight: 700,
  },
  exploreBtn: {
    display: "inline-block",
    padding: "10px 20px",
    border: "1.5px solid #222",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 500,
    color: "#222",
    background: "transparent",
    cursor: "pointer",
    transition: "background 0.15s, color 0.15s",
  },
};

function PropertyCard({ listing }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={{
        ...sx.card,
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={sx.imgWrap}>
        <img src={listing.img} alt={listing.name} style={sx.img} loading="lazy" />
        <span style={sx.badge}>{listing.badge}</span>
      </div>
      <div style={sx.body}>
        <div style={sx.nameRow}>
          <span style={sx.nameText}>{listing.name}</span>
          <span style={sx.rating}>
            ★ {listing.rating}{" "}
            <span style={sx.ratingCount}>({listing.reviews})</span>
          </span>
        </div>
        <div style={sx.desc}>{listing.desc}</div>
        <div style={sx.beds}>{listing.beds}</div>
        <div style={sx.dates}>{listing.dates}</div>
        <div style={sx.priceRow}>
          {listing.oldPrice && (
            <span style={sx.oldPrice}>{listing.oldPrice}</span>
          )}
          <span style={sx.priceStrong}>{listing.price}</span>{" "}
          for {listing.nights}
        </div>
      </div>
    </div>
  );
}

export default function GuestFavorites() {
  const [btnHovered, setBtnHovered] = React.useState(false);

  return (
    <section style={sx.section}>
      <h2 style={sx.title}>Guest Favorites in Kampung Parung Jambu</h2>
      <p style={sx.subtitle}>
        These are some of the most loved homes on Airbnb based on ratings,
        reviews, and reliability.
      </p>

      <div style={sx.grid}>
        {listings.map((listing, i) => (
          <PropertyCard key={i} listing={listing} />
        ))}
      </div>

      <button
        style={{
          ...sx.exploreBtn,
          background: btnHovered ? "#222" : "transparent",
          color: btnHovered ? "#fff" : "#222",
        }}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
      >
        Explore more
      </button>
    </section>
  );
}
