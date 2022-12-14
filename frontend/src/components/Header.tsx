import { useState } from "react";
import WalletModal from "./WalletModal";

export default function Header() {
  const [walletModalShow, setWalletModalShow] = useState(false);
  const [walletButtonText, setWalletButtonText] = useState("Connect Wallet");
  const wallectConnectAction = async (event: React.MouseEvent<HTMLElement>) => {
    if (localStorage.accountDetail) {
      localStorage.removeItem("accountDetail");
      setWalletButtonText("Connect Wallet");
    } else {
      setWalletModalShow(true);
      setWalletButtonText("Disconnect");
    }
  };
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a href="/#" className="navbar-brand">
              {/* <img src={require("../assets/images/logo.png").default} alt="logo"/> */}
            </a>
            <button
              className="navbar-toggler ms-auto collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
									<Link className="nav-link" to="address-listing">Listing</Link>
								</li> */}
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#roadmap">
                    ROADMAP
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#team">
                    TEAM
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-btn d-flex align-items-center">
              <button
                type="button"
                className="btn btn-secondary btn-wallet"
                onClick={wallectConnectAction}
              >
                {localStorage.accountDetail ? "Disconnect" : "Connect Wallet"}
              </button>
              <a
                href="https://discord.gg/xwB4S5Yhw3"
                target="_blank"
                className="btn btn-secondary btn-discord"
              >
                <img
                  loading="lazy"
                  src={require("../assets/images/discord.png").default}
                  alt="Discord logo"
                  className="button-icon"
                />
                <div className="text-block small">Join now</div>
              </a>
            </div>
          </div>
        </nav>
      </header>
      <WalletModal
        show={walletModalShow}
        onHide={() => setWalletModalShow(false)}
      />
    </>
  );
}
