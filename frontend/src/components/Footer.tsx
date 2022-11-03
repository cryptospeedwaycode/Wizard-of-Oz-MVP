import ScrollAnimation from 'react-animate-on-scroll';

export default function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <ScrollAnimation animateIn='fadeInUp' style={{opacity : '0.75'}}>
          <div className="text-sm-center mw-640 mx-auto">
            <h2 className="section-title">Join the Community</h2>
            <p className="text-light">Join our community on Discord and give us a follow on Twitter and Instagram and keep up to date on the latest developments from the Crypto Speedway team.</p>
            <div className="button-wrap mt-4">
              <a href="https://discord.gg/xwB4S5Yhw3" className="btn btn-secondary btn-discord">
                <img loading="lazy" src={require("../assets/images/discord-white.png").default} alt="Discord logo" className="button-icon" />
                <div className="text-block">Discord</div>
              </a>
              <a href="https://instagram.com/cryptospeedway?igshid=YmMyMTA2M2Y=" className="btn btn-secondary btn-instagram">
                <img loading="lazy" src={require("../assets/images/instagram-white.png").default} alt="Instagram logo" className="button-icon" />
                <div className="text-block">Instagram</div>
              </a>
              <a href="https://twitter.com/CryptoSpeedway?t=1yaCRvoYWwtaoI2oLK3Glw&s=09" className="btn btn-secondary btn-twitter">
                <img loading="lazy" src={require("../assets/images/twitter-white.png").default} alt="Twitter logo" className="button-icon" />
                <div className="text-block">Twitter</div>
              </a>
              {/* <a href="/#" className="btn btn-secondary btn-opensea">
                <img loading="lazy" src={require("../assets/images/opensea-white.png").default} alt="Opensea logo" className="button-icon" />
                <div className="text-block">Opensea</div>
              </a> */}
            </div>
          </div>
          </ScrollAnimation>
          <div className="copyrights">
            <p className="my-2 text-light fs-12">&copy; 2022, Crypto Speedway. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
