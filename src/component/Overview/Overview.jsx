import "./Overview.css";
import image from "./../../assets/image/overview/overview.png";

function Overview() {
  return (
    <section className="overview-section section-y-margin" id="overview">
      <div className="container">
        <div className="row w-100">
          <div className="col-lg-7 col-12">
            <div className="content">
              <h2 className="my-lg-4">
                New Event is a fully responsive one-page template for event ,
                Conference or wordshops
              </h2>
              <p className="ms-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                repellendus tenetur quisquam iste, quis magni quos amet
                perspiciatis aliquid, ipsum rerum saepe error quod repudiandae
                pariatur maxime tempore commodi iusto!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, deserunt optio rem odit nulla incidunt placeat
                dolores ducimus error saepe quas asperiores quod voluptates
                eaque expedita, fugit, corporis accusantium nobis?
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="overview-image">
              <img
                className="img-fluid w-100"
                src={image}
                alt="overview"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
