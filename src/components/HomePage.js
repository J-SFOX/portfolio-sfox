import React from 'react'
import {FaTwitter,FaGithub} from "react-icons/fa";



const HomePage = () =>{
    return(
       <>
            <section className="homepage">
               <div className="overlay">
                <h1>JEMMAL Soufiane</h1>
                <p>Front-end Web Developer</p>

                <ul>
                    <li>
                        <a href="http://twitter.com/" target="_blank" rel="noopener noreferrer"> 
                            <FaTwitter/>
                        </a>
                    </li>
                    <li>
                        <a href="http://github.com/"target="_blank" rel="noopener noreferrer"> 
                            <FaGithub/>
                        </a>
                    </li>
                </ul>
               </div>
            </section>
       </>
    );
}

export default HomePage;