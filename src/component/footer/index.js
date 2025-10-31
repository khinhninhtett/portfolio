import React from "react";
import '../../assets/css/styles.css';

export default function Footer(){
    return(
        <footer class="footer">
        <div class="footer__container container">
            <h1 class="footer__title">Khin Hnin Htet | Portfolio</h1>

            <span class="footer__copy">
                <p>&copy; {new Date().getFullYear()} Khin Hnin Htet. All rights reserved.</p>
            </span>
        </div>
    </footer>
    )
}