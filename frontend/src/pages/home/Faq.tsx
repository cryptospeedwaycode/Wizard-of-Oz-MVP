//import racingCar from "../assets/js/racing-car.json";
import ScrollAnimation from 'react-animate-on-scroll';

export default function Faq() {
  return (
    <>          
      <section className="faq-section" id="faq">
        <div className="container container-2">
          <ScrollAnimation animateIn='fadeInUp' style={{opacity : '0.75'}}>
          <div className="text-sm-center">
            <h2 className="section-title">Frequently Asked Questions</h2>            
          </div>
          <div className="accordion accordion-wrapper" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading1">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                  When will Crypto Speedway launch?
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  It is TBD, however we estimate that we will start our presale minting around September!
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  What will the price be at launch?
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                <div className="accordion-body">                  
                  <p className="mb-0">White List: 0.1 ETH</p>
                  <p className="mb-0">Presale: 0.15 ETH</p>
                  <p className="mb-0">Public sale:&nbsp;0.2 ETH</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading3">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                  How do I get a Crypto Speedway Car?
                </button>
              </h2>
              <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Stay updated on our discord, because we will announce when we will start our pre-sale, which will be on our website. You can mint during pre-sale, or if you are whitelisted. Otherwise you can buy during the public sale, which will also be announced. When we are sold out you will be able to get one on the secondary market on OpenSea.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading4">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                  How to earn a whitelist spot?
                </button>
              </h2>
              <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Please go to the #whitelist-info channel
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading5">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                I got a discount in my DM. Is this real?
                </button>
              </h2>
              <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  No.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading6">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                  But?
                </button>
              </h2>
              <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  No we will never DM your first. Keep that in mind! 
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading7">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                  Is the WL role permanent?
                </button>
              </h2>
              <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  No.
                  <br></br>
                  Ways you may loose your WL positions is as follows:
                  <br></br>
                  Spamming in the discord. Also not that spamming will not work for being an active member.
                  <br></br>
                  Being disrespectful to the community.
                  <br></br>
                  Trying scam anyone, may that be impersonating us, using your WL role to deceive, or doing anything that is nefarious.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading8">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                  Can I be part of the server staff?
                </button>
              </h2>
              <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Of course! We love to work with people that are passionate about the project, and want to take part! Please visit #hire chat to request a staff position. Note that it is not a paid position, and the role can be taken away at any time, and we are not required to explanation.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading9">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                  If I got a business proposal, who should I contact?  
                </button>
              </h2>
              <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Please email us at jack@lostandfoundartist.com for business related matters only!
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading10">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                  Is there a MAX mint for presale?
                </button>
              </h2>
              <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  The max mint per transaction will be 5. The max mint per person will be 20 This is subject to change. If you have any requests or suggestions relating this project, or about the company, please discuss with us in the #suggestions channel.
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
