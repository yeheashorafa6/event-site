import React from "react";
import "./Video.css"
import image_cover from "./../../assets/image/video/cover.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'


function Video() {
  return (
    <section className="video-section section-y-margin">
      <div className="container">
        <div className="row w-100">
          <div className="col-lg-6 col-12">
            <div className="video-content">
              <h2 className="my-lg-5">Watch Video</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                quae ut voluptatum? Tenetur obcaecati commodi, voluptas nostrum
                illo et quia error corporis repellendus corrupti? Aut ullam eius
                perferendis reiciendis veniam.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, doloribus maxime aspernatur illo vero incidunt
                consequatur ratione exercitationem non labore praesentium.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="video ms-lg-5">
                <div className="video-content">
                    <img src={image_cover} alt="image_video" className="w-100 h-100" />
                    <div className="btn-click d-flex justify-content-center align-items-center">
                        <a href="!">
                        <FontAwesomeIcon icon={faPlay} className="play-icon"/>
                        </a>
                    </div>
                </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Video;
