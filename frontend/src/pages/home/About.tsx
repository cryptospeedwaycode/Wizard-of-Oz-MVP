import ScrollAnimation from 'react-animate-on-scroll';

export default function About() {
  return (
    <>
      <section id="about" className="about-section">
        <div className="container container-2">
          <div className="row">
            <div className="col-lg-6">
              {/* <div data-is-ix2-target="1" data-animation-type="lottie" data-src={racingCar} data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="5" data-duration="0"></div> */}
              <img src={require("../../assets/images/gallery-image1.png").default} className="w-100" alt="img" />
            </div>
            <div className="col-lg-6">
              <ScrollAnimation animateIn='fadeInUp' style={{ opacity: '0.25' }}>
                <h2 className="section-title">What is Crypto Speedway?</h2>
                <p className="text-light">Crypto Speedway is an NFT based company, bringing you NFT cars to race in the metaverse. Race in multiplayer to claim the top of the leaderboards, beat the weekly times to earn Speedway Points, and collect cars to build your garage. We are starting out with an awesome mobile game for testing, and we are dropping a 10,000 car collection for users to experience Crypto Speedway first hand! We are also doing a Giveaway of  10 unique NFT cars that will be compatible in the game. Enter below to receive one free entry!</p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="mw-940 mx-auto">
          <div id="gallery" className="gallery-section">
            <div className="text-sm-center">
              <h2 className="section-title">Gallery</h2>
              <p className="text-white">Check out some of our Designs!</p>
            </div>
            <div className="gallery-grid-container">
              <a href="/#" className="gallery-lightbox gallery-2">
                <img src={require("../../assets/images/gallery-image9.png").default} className="gallery-image cover" alt="img" />
              </a>
              <a href="/#" className="gallery-lightbox">
                <img src={require("../../assets/images/gallery-image10.png").default} className="gallery-image cover" alt="img" />
              </a>
              <a href="/#" className="gallery-lightbox">
                <img src={require("../../assets/images/gallery-image8.png").default} className="gallery-image cover" alt="img" />
              </a>
              <a href="/#" className="gallery-lightbox">
                <img src={require("../../assets/images/gallery-image11.png").default} className="gallery-image cover" alt="img" />
              </a>
              <a href="/#" className="gallery-lightbox">
                <img src={require("../../assets/images/gallery-image3.png").default} className="gallery-image cover" alt="img" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}