//import racingCar from "../../assets/js/racing-car.json";
import ScrollAnimation from 'react-animate-on-scroll';

export default function Team() {
  return (
    <>                
      <section className="timeline-section-heading" id="team">
        <div className="container container-2">
        <ScrollAnimation animateIn='fadeInUp' style={{opacity : '0.75'}}>
          <div className="text-sm-center pt-5">
            <p className="text-light fs-12 fw-400"><strong>THE TEAM</strong></p>
            <h2 className="section-title mw-940 mx-auto">Our Team is our Biggest Unfair Advantage</h2>            
            <p className="text-light">We want you to know who we are! We are the ones accountable for the success of our projects, and if you choose to invest in our company, you are also investing in us. Together, we are a team that drives for innovation and creates real value to the NFTs we release.</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="them-card-box text-center">
                <div className="them-image">
                  <img src={require("../../assets/images/Jack.png").default} className="cover" alt="img"/>
                </div>
                <h3 className="sub-title fw-600 fs-24 text-white">Jack</h3>
                <p className="text-light">Founder and NFT Guru. Manages the team and builds the Brand</p>
                <div className="d-flex align-items-center justify-content-center">
                  <a href="/#" className="icon-link mx-2">
                    <img src={require("../../assets/images/twitter.png").default} className="sm-icon" alt="img"/>
                  </a>
                  <a href="/#" className="icon-link mx-2">
                    <img src={require("../../assets/images/instagram.png").default} className="sm-icon" alt="img"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="them-card-box text-center">
                <div className="them-image">
                  <img src={require("../../assets/images/Carols.png").default} className="cover" alt="img"/>
                </div>
                <h3 className="sub-title fw-600 fs-24 text-white">Carlos</h3>
                <p className="text-light">Business leader who has had 30 plus years of experience in running business.</p>
                <div className="d-flex align-items-center justify-content-center">
                  <a href="/#" className="icon-link mx-2">
                    <img src={require("../../assets/images/twitter.png").default} className="sm-icon" alt="img"/>
                  </a>
                  <a href="/#" className="icon-link mx-2">
                    <img src={require("../../assets/images/instagram.png").default} className="sm-icon" alt="img"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="them-card-box text-center">
                <div className="them-image">
                  <img src={require("../../assets/images/Jack.png").default} className="cover" alt="img"/>
                </div>
                <h3 className="sub-title fw-600 fs-24 text-white">Max</h3>
                <p className="text-light">Lead directing artist who creates and animates all of the NFTs</p>
                <div className="d-flex align-items-center justify-content-center">
                  <a href="/#" className="icon-link mx-2">
                    <img src={require("../../assets/images/twitter.png").default} className="sm-icon" alt="img"/>
                  </a>
                  <a href="/#" className="icon-link mx-2">
                    <img src={require("../../assets/images/instagram.png").default} className="sm-icon" alt="img"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="them-card-box text-center">
                <div className="them-image">
                  <img src={require("../../assets/images/Carols.png").default} className="cover" alt="img"/>
                </div>
                <h3 className="sub-title fw-600 fs-24 text-white">Brad</h3>
                <p className="text-light">Six Sigma Black Belt, Director of Quality Management and Sales</p>
                <div className="d-flex align-items-center justify-content-center">
                  <a href="/#" className="icon-link mx-2">
                    <img src={require("../../assets/images/twitter.png").default} className="sm-icon" alt="img"/>
                  </a>
                  <a href="/#" className="icon-link mx-2">
                    <img src={require("../../assets/images/instagram.png").default} className="sm-icon" alt="img"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        </div>
      </section>      
    </>
  );
}
