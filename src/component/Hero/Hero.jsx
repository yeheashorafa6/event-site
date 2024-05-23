import "./Hero.css"

function Hero() {
  return (
    <section className="hero-section d-flex" id="intro">
        <div className="hero-content">
            <div className="date my-5">
                <h2>July 22 - 26 in Gaza , Palestine</h2>
            </div>
            <div className="main-content">
                <h1 className="my-lg-5">Web Design Conference</h1>
                <button className="btn me-lg-5 me-3">Learn More</button>
                <button className="btn active">Register Now</button>
            </div>
        </div>
    </section>
  )
}

export default Hero
