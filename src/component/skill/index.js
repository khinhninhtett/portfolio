import React from "react";
import '../../assets/css/styles.css';

export default function Skill(){
    return(
        <section class="skills section" id="skills">
            <span class="section__subtitle">My Abilities</span>
            <h2 class="section__title">My Experience</h2>

            <div class="skills__container container grid">
                <div class="skills__content">
                    <h3 class="skills__title">Frontend Development</h3>

                    <div class="skills__box">
                        <div class="skills__group">
                            <div class="skills__data">
                                <i class='bx bxs-badge-check'></i>

                                <div>
                                    <h3 class="skills__name">HTML</h3>
                                    <span class="skills__level">Advanced</span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <i class='bx bxs-badge-check'></i>

                                <div>
                                    <h3 class="skills__name">CSS/SCSS</h3>
                                    <span class="skills__level">Advanced</span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <i class='bx bxs-badge-check'></i>

                                <div>
                                    <h3 class="skills__name">Javascript</h3>
                                    <span class="skills__level">Advanced</span>
                                </div>
                            </div>

                        </div>
                        <div class="skills__group">
                            <div class="skills__data">
                                <i class='bx bxs-badge-check'></i>

                                <div>
                                    <h3 class="skills__name">Bootstrap</h3>
                                    <span class="skills__level">Intermediate</span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <i class='bx bxs-badge-check'></i>

                                <div>
                                    <h3 class="skills__name">Git</h3>
                                    <span class="skills__level">Advanced</span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <i class='bx bxs-badge-check'></i>

                                <div>
                                    <h3 class="skills__name">React</h3>
                                    <span class="skills__level">Advanced</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="skills__content">
                    <h3 class="skills__title">Backend Development</h3>

                    <div class="skills__box">
                        <div class="skills__group">
                            <div class="skills__data">
                                <i class='bx bxs-badge-check'></i>

                                <div>
                                    <h3 class="skills__name">Node JS</h3>
                                    <span class="skills__level">Intermediate</span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <i class='bx bxs-badge-check'></i>

                                <div>
                                    <h3 class="skills__name">Python</h3>
                                    <span class="skills__level">Advanced</span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <i class='bx bxs-badge-check'></i>

                                <div>
                                    <h3 class="skills__name">MySQL</h3>
                                    <span class="skills__level">Advanced</span>
                                </div>
                            </div>

                        </div>
                        <div class="skills__group">
                            <div class="skills__data">
                                <i class='bx bxs-badge-check'></i>

                                <div>
                                    <h3 class="skills__name">PHP</h3>
                                    <span class="skills__level">Intermediate</span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <i class='bx bxs-badge-check'></i>

                                <div>
                                    <h3 class="skills__name">Firebase</h3>
                                    <span class="skills__level">Intermediate</span>
                                </div>
                            </div>

                            {/* <div class="skills__data">
                                <i class='bx bxs-badge-check'></i>

                                <div>
                                    <h3 class="skills__name">Mongo DB</h3>
                                    <span class="skills__level">Intermediate</span>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}