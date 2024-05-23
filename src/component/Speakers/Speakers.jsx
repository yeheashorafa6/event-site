import "./Speakers.css";
import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import user_1 from "./../../assets/image/speaker/user_1.png";
import user_2 from "./../../assets/image/speaker/user_2.png";
import user_3 from "./../../assets/image/speaker/user_3.png";
import user_4 from "./../../assets/image/speaker/user_4.png";
import user_5 from "./../../assets/image/speaker/user_5.png";
import user_6 from "./../../assets/image/speaker/user_6.png";



function Speakers() {

    const items = [
        { id : 1 , image : user_1 , name : "Yehea shorafa"  , job : "front End" },
        { id : 2 , image : user_2 , name : "Eman Omer" , job : "BackEnd" },
        { id : 3 , image : user_3 , name : "Ammar Mahmmod" , job : "Web Div"},
        { id : 4 , image : user_4 , name : "Mohammed shorafa" , job : "Desinger"} ,
        { id : 5 , image : user_5 , name : "Yousef Ahmed" , job : "React"},
        { id : 6 , image : user_6 , name : "Mahmoud shorafa" , job : "Vue"},
    ]


    const itemList = items.map((item) =>{
        return(
        <div className='item' key={item.id}>
            <img src={item.image} alt="users" />
            <div className="desc-text">
                <h2 className="name mt-5">{item.name}</h2>
                <h4 className="job mt-3">{item.job}</h4>
            </div>
        </div>
            
        );
    })

  return (
    <section className="speaker-section" id="speaker">
        <div className="container">
            <OwlCarousel className='owl-theme' loop margin={20} autoplay nav={false}>
                {itemList}
            </OwlCarousel>
        </div>
    </section>
  );
}

export default Speakers;
