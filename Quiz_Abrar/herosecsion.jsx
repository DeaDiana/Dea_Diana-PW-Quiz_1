import React from "react";
import "../ui/hero.css";
export function HeroSection() {
    return (
        <section
            id="home" className="relative min-h-screen flex items-center overflow-hidden bg-light text-white" style={styles.section}
        >
            <div className="hero">
  <div className="hero-left">
    <h1>Find places to stay </h1>
    <p>Great getaways start on Hallo.Villa, with unique homes for every kind of trip.</p>

    <div className="form-box">
    <div className="row">
      <input type="text" placeholder="Location" />
        <input type="text" placeholder="Check in" />
        <input type="text" placeholder="Check out" />
      </div>
      <div className="row">
        <input type="number" placeholder="Adults" />
        <input type="number" placeholder="Children" />
      </div>
      <button>Search</button>
    </div>
  </div>


  <div className="hero-right">
    <img src="/icon/hero.jpeg" alt="villa" />
  </div>
</div>
        </section>
    );
}
const styles = {
    section: {
        minHeight: "100vh", marginTop: "-70px", paddingTop: "70px", display: "flex", alignItems: "center",
    },
}