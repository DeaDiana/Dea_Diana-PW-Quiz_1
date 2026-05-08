"use client";
import { Button } from "../ui/button";
import { useState } from "react";

export function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");

    const menu_nav = [
        { id: 1, name: "Home", link: "#home" },
        { id: 2, name: "Trending", link: "#trending" },
        { id: 3, name: "Categories", link: "#categories" },
    ];

    return (
        <nav
            className="navbar navbar-expand-lg"
            style={styles.navigationBar}
        >
            <div className="container-fluid px-4">
                <div className="d-flex align-items-center">
                    <a className="navbar-brand d-flex align-items-center me-4" href="#">
                        <img
                            src="/icon/logomangaku.png"
                            style={{ height: "50px", objectFit: "contain" }}
                            alt="Mangaku Logo"
                        />
                    </a>

                    <ul className="navbar-nav d-flex flex-row gap-3 mb-0">
                        {menu_nav.map((menu) => (
                            <li className="nav-item" key={menu.id}>
                                <a
                                    className="nav-link"
                                    href={menu.link}
                                    style={styles.navLink}
                                >
                                    {menu.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="d-flex flex-grow-1 justify-content-center px-4">
                    <div className="input-group" style={styles.searchContainer}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="manggaku"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={styles.searchInput}
                        />
                        <button
                            className="btn"
                            type="button"
                            style={styles.searchButton}
                        >
                            Cari
                        </button>
                    </div>
                </div>

                <div className="d-flex gap-2">
                    <Button className="btn btn-light text-dark">
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Sign In
                    </Button>
                    <Button className="btn btn-primary">
                        <i className="bi bi-person-plus me-2"></i>
                        Sign Up
                    </Button>
                </div>
            </div>
        </nav>
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
    paddingTop: "70px",
    paddingBottom: "10px",
    paddingLeft: "80px",
    paddingRight: "80px",
  },
    navLink: {
        color: "#333",
        fontWeight: 500,
        fontSize: "15px",
        transition: "color 0.2s",
    },
    searchContainer: {
        maxWidth: "400px",
        width: "100%",
        borderRadius: "8px",
        overflow: "hidden",
        border: "1px solid #e0e0e0",
        backgroundColor: "#fff",
    },
    searchInput: {
        border: "none",
        boxShadow: "none",
        padding: "10px 16px",
        fontSize: "14px",
    },
    searchButton: {
        backgroundColor: "#007bff",
        color: "#fff",
        borderRadius: "0",
        padding: "10px 20px",
        fontSize: "14px",
        fontWeight: 500,
    },
    navigationBar: {
    backgroundColor: "rgba(247, 248, 226, 0.95)",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
},
};
