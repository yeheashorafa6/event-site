import React from 'react'
import { Link, Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter , faFacebook , faInstagram , faGoogle } from '@fortawesome/free-brands-svg-icons'
import "./Footer.css"
function Footer() {

    const icons = [
        {id : 1 , icon : faFacebook},
        {id : 2 , icon : faTwitter},
        {id : 3 , icon : faInstagram},
        {id : 4 , icon : faGoogle},
    ]

    const iconList = icons.map((icon) =>{
        return (
                <li className="soical-item ms-lg-4 ms-2" key={icon.id}>
                    <Link style={{cursor :"pointer"}}>
                        <FontAwesomeIcon icon={icon.icon} className="icon my-3 mx-4"/>
                    </Link>
                </li>

        );
    })
  return (
    <section className="footer section-y-margin section-y-padding">
        <div className="copyright">
            <h4>Copyright © 2024 Your Company | Desing By <span>Yehea Shorafa</span></h4>
        </div>
        <div className="soical-list">
            <div className="soical-items">
                {iconList}
            </div>
        </div>
    </section>
  )
}

export default Footer
