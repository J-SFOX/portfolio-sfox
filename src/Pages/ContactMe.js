import { FaPhone, FaEnvelope } from "react-icons/fa";
const ContactMe =()=>{
    return(
        <>
      
            <section className="contacts" >
                <h1>Contact Me</h1>
                <ul>
                    <li><a href="tel :0707959006"><FaPhone/> +212 (0) 607 959 006</a></li>
                    <li><a href="mailto: jemmalsoufiane@gmail.com"><FaEnvelope/> jemmalsoufiane@gmail.com</a></li>
                </ul>
            </section>
        </>
    )
}

export default ContactMe;