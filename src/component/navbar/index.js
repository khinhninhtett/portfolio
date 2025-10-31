import React, { useEffect, useState } from "react";
import "../../assets/css/styles.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrollHeader, setScrollHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Change header background
      setScrollHeader(scrollY >= 50);

      // Highlight active section
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 58;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrollHeader ? "scroll-header" : ""}`} id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">Khin Hnin Htet</a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className={`nav__link ${activeSection === "home" ? "active-link" : ""}`}>
                <i className="bx bx-home"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className={`nav__link ${activeSection === "about" ? "active-link" : ""}`}>
                <i className="bx bx-user"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#work" className={`nav__link ${activeSection === "work" ? "active-link" : ""}`}>
                <i className="bx bx-briefcase-alt-2"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className={`nav__link ${activeSection === "contact" ? "active-link" : ""}`}>
                <i className="bx bx-message-square-dots"></i>
              </a>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  );
}
