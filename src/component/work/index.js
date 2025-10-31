import React, { useEffect } from "react";
import mixitup from "mixitup";
import "../../assets/css/styles.css";
import JobFinder from '../../assets/img/work/jobFinder.png';
import RemoteCode from '../../assets/img/work/remoteCode.png';
import ChronoCraft from '../../assets/img/work/chronocraft.png';
import Portfolio from '../../assets/img/work/portfolio.png';
import KidGarden from '../../assets/img/work/KidGarden.png';

export default function Work() {
  useEffect(() => {
    // Initialize MixItUp
    const mixer = mixitup(".work__container", {
      selectors: { target: ".work__card" },
      animation: { duration: 300 },
    });

    // Handle active link
    const workLinks = document.querySelectorAll(".work__item");

    function activeWork(e) {
      workLinks.forEach((wl) => wl.classList.remove("active-work"));
      e.target.classList.add("active-work");
    }

    workLinks.forEach((wl) => {
      wl.addEventListener("click", activeWork);
    });

    // Cleanup listeners on unmount
    return () => {
      mixer.destroy();
      workLinks.forEach((wl) => wl.removeEventListener("click", activeWork));
    };
  }, []);

  return (
    <section className="work section" id="work">
      <span className="section__subtitle">My Portfolio</span>
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span className="work__item active-work" data-filter="all">
          All
        </span>
        <span className="work__item" data-filter=".web">
          Web
        </span>
        <span className="work__item" data-filter=".rmi">
          RMI
        </span>
        <span className="work__item" data-filter=".design">
          Design
        </span>
      </div>

      <div className="work__container container grid">
        <div className="work__card mix web">
          <img src={JobFinder} alt="" className="work__img" />
          <h3 className="work__title">JobFinder Website</h3>
          {/* <a href="#" className="work__button">
            Demo <i className="bx bx-right-arrow work__icon"></i>
          </a> */}
        </div>

        <div className="work__card mix rmi">
          <img src={RemoteCode} alt="" className="work__img" />
          <h3 className="work__title">Remote Code Executor</h3>
          {/* <a href="#" className="work__button">
            Demo <i className="bx bx-right-arrow work__icon"></i>
          </a> */}
        </div>

        <div className="work__card mix design">
          <img src={ChronoCraft} alt="" className="work__img" />
          <h3 className="work__title">Event Manager</h3>
          {/* <a href="#" className="work__button">
            Demo <i className="bx bx-right-arrow work__icon"></i>
          </a> */}
        </div>

        <div className="work__card mix web">
          <img src={Portfolio} alt="" className="work__img" />
          <h3 className="work__title">My Portfolio</h3>
          {/* <a href="#" className="work__button">
            Demo <i className="bx bx-right-arrow work__icon"></i>
          </a> */}
        </div>

        <div className="work__card mix design">
          <img src={KidGarden} alt="" className="work__img" />
          <h3 className="work__title">Kid's Garden</h3>
          {/* <a href="#" className="work__button">
            Demo <i className="bx bx-right-arrow work__icon"></i>
          </a> */}
        </div>
      </div>
    </section>
  );
}
