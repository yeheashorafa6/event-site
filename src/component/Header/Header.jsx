import { useState } from "react";
import "./Header.css";
import { Link, Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import menu from "./../../assets/image/menu.png";

function header() {

    const items = [
        { id : "intro"    , name : "Intro"},
        { id : "overview" , name : "Overview"},
        { id : "speaker"  , name : "Spekers"},
        { id : "program" , name : "Programs"},
        { id : "register" , name : "Register"},
        { id : "venue"    , name : "Venue"},
        { id : "contact"  , name : "Contact"},
    ]


    const itemList = items.map((item) =>{
        // download Link مهم
    const isActive = item.name == "Intro" ? "active" : "";
        return(
            <li className="nav-item ms-lg-4 ms-2" key={item.id}>
                <Link to={item.id} smooth={true} offset={-150} duration={300} className={`${isActive} nav-link`}  style={{cursor :"pointer"}}>{item.name}</Link>
            </li>
            
        );
    })

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);
  const color =  colorChange  ? "navbar colorChange" : "navbar"

  const [mobileMenu , setMobileMenu] = useState(false);

  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  const hide = mobileMenu ? "hide-menu" : "";
  return (
    <header>
        <nav className={`${color} navbar`}>
             <div className="container">
                <div className="row w-100">
                    <div className="col-lg-3 col-md-3 col-5">
                        <div className="logo-content my-lg-3 my-4">
                            <h2 className="title">New <span>Event</span></h2>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-7 mt-4 start">
                        <div className="menuToggle">
                            <img src={menu} alt="menu" className="menu" onClick={toggleMenu} />
                        </div>
                        <div className="nav-list">
                            <ul className={`${hide} nav-items ms-auto mb-2 mb-lg-0`}>
                                {itemList}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default header
