import ScrollAnimation from 'react-animate-on-scroll';

export default function Banner() {
  return (
    <>          
      <section id="banner" className="banner-section">
        <div className="centered-container mw-940 mx-auto">
          <ScrollAnimation animateIn='fadeIn' style={{opacity : '1'}}>
            <div className="title-main">
              <h1>Transforming the Racing World into a Racing Metaverse</h1>
              <h2>Race, Collect, and Earn</h2>
            </div>            
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
