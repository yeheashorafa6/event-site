import "./Venue.css";
import venue_1 from "./../../assets/image/venue/venue_1.png";

function Venue() {
  return (
    <section className="venue-section section-y-margin" id="venue">
      <div className="row w-100">
        <div className="col-lg-7 col-12">
          <div className="venue-text">
            <h1>Venue</h1>
            <p className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              eum omnis consequuntur illum ea quae ex totam quam nulla veniam,
              earum dignissimos possimus repellendus numquam quasi error alias
              dolor a.
            </p>
            <p className="venue-place ms-3">
              New Evnt <br />
              Gaza st , Lababide <br />
              Gaza , Palestine <br />
              Tel : 123-456-789
            </p>
          </div>
        </div>
        <div className="col-lg-5 ">
          <div className="venue-image w-100 d-sm-none d-lg-block">
            <img src={venue_1} alt="venue" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Venue;
