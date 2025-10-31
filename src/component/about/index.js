import React from "react";
import '../../assets/css/styles.css';
import KhinHninHtet from '../../assets/img/khinhninhtet.png';
import Resume from '../../assets/pdf/KhinHninHtet_Resume.pdf';

export default function About(){
    return(
         <section class="about section" id="about">
            <span class="section__subtitle">My Intro</span>
            <h2 class="section__title">About Me</h2>

            <div class="about__container container grid">
                <img src={KhinHninHtet} alt="" class="about__img"></img>

                <div class="about__data">
                    <div class="about__info">
                        <div class="about__box">
                            <i class='bx bx-award about__icon'></i>
                            <h3 class="about__title">Experience</h3>
                            <span class="about__subtitle">2 Years Working</span>
                        </div>
                        <div class="about__box">
                            <i class='bx bx-briefcase-alt about__icon'></i>
                            <h3 class="about__title">Completed</h3>
                            <span class="about__subtitle">16+ Projects</span>
                        </div>
                        <div class="about__box">
                            <i class='bx bx-support about__icon'></i>
                            <h3 class="about__title">Support</h3>
                            <span class="about__subtitle">Online 24/7</span>
                        </div>
                    </div>

<p class="about__description">
I'm Khin Hnin Htet, a 23-year-old Full Stack Developer and a final-year student at the University of Computer Studies, Mandalay. I design and develop complete web applications, handling both frontend and backend with modern technologies. My passion lies in creating responsive, user-friendly interfaces and building efficient, secure server-side systems to deliver seamless digital experiences. Through dedication and continuous learning, I’ve successfully completed various projects that reflect my creativity, problem-solving skills, and commitment to quality.
</p>

                    <a href={Resume} class="button about__button-contact">Resume</a>
                </div>
            </div>
        </section>
    )
}