import React from 'react'
import Jnv from "../assets/img/jnv.jpeg";
import Clg from "../assets/img/gehu.jpeg";
const Education = () => {
    return (
        <section id="education" class="edu">
            <div className="container">
                <h3>My <span>Education</span></h3>
                <div className="edu-card">
                    <div className='d1'>
                        <img src={Jnv} alt="school" />
                        <div className="cont">
                            <p>2013-2020
                                <br />
                                <span>Javahar Navodaya Vidhayala</span> - Bageshwar
                                <br />
                                Percentage 75%
                                <ul>
                                    <li>Studied from 6th to 12th standard.</li>
                                    <li>PCM in 11th and 12th standard.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className='d2'>
                        <img src={Clg} alt="school" />
                        <div className="cont">
                            <p>2020-Present
                                <br />
                                <span> Graphic Era Hill University</span> - Dehradun
                                <br />
                                CGPA 8.22/10
                                <ul>
                                    <li>Bachlores in computer science and engineering.</li>
                                    <li>Minor in cyber Security.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education