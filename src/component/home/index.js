import React from "react";
import '../../assets/css/homestyle.css';
import Homephoto from '../../assets/img/pro.png';
export default function Home(){
    return(
        <section id="home">
            <main class="l-main bd-grid">
                <div class="home" >
                    <h1 class="home__title">I´M A <br></br> FULLSTACK <br></br> DEVELOPER</h1>
                    <div class="home__img">
                        <img src={Homephoto} alt="KhinHninHtet"></img>
                    </div>
                    <div class="home__social">
                        <a href="https://www.tiktok.com/@user304747139" class="home__social-link">tiktok</a>
                        <a href="https://www.instagram.com/your_priority_23" class="home__social-link">instagram</a>
                        <a href="https://www.facebook.com/share/19X6jQJYoQ/" class="home__social-link">facebook</a>
                    </div>
                    <h2 class="home__subtitle">Full<br></br>Stack<br></br>Developer</h2>
                    <a href="#contact" class="home__button">Contact <ion-icon name="arrow-forward-outline" class="home__button-icon"></ion-icon></a>
                </div>
            </main>
        </section>
    )
}