import { useState, useEffect, useRef, MutableRefObject } from "react";
import { getSettings } from "../../actions/setting.action";
import { addMetamaskAddress } from "../../actions/wallet.action";
import WalletModal from "../../components/WalletModal";
import toast from "react-hot-toast";
import Modal from "react-bootstrap/Modal";

export default function MintForm() {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const handleClose = () => setShowInfoModal(false);
  const handleShow = () => setShowInfoModal(true);

  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [walletModalShow, setWalletModalShow] = useState(false);
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState(0);
  const [settings, setSettings] = useState({
    maxAmount: 0,
    price: 0,
  });
  useEffect(() => {
    const getAllSettings = async () => {
      const allSettings = await getSettings();
      setSettings(allSettings.data);
      setTotal(
        amount === ""
          ? allSettings.data.price
          : parseInt(amount) * allSettings.data.price
      );
    };
    getAllSettings();
  }, []);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== "") {
      setAmount(event.target.value);
      setTotal(parseInt(event.target.value) * settings.price);
    } else {
      setAmount("");
      setTotal(settings.price);
    }
  };
  const onPlusClick = async (event: React.MouseEvent<HTMLElement>) => {
    if (inputRef.current.value === "") {
      setAmount("1");
      setTotal(settings.price);
    } else {
      setAmount(
        parseInt(amount) === settings.maxAmount
          ? settings.maxAmount.toString()
          : (parseInt(amount) + 1).toString()
      );
      setTotal(
        parseInt(amount) === settings.maxAmount
          ? settings.maxAmount * settings.price
          : (parseInt(amount) + 1) * settings.price
      );
    }
  };
  const onMinusClick = async (event: React.MouseEvent<HTMLElement>) => {
    if (inputRef.current.value !== "") {
      setAmount(
        parseInt(amount) === 1 ? "1" : (parseInt(amount) - 1).toString()
      );
      setTotal(
        parseInt(amount) === 1
          ? settings.price
          : (parseInt(amount) - 1) * settings.price
      );
    }
  };
  const setMaxAmount = async (event: React.MouseEvent<HTMLElement>) => {
    setAmount(settings.maxAmount.toString());
    setTotal(settings.maxAmount * settings.price);
  };
  const handleSubmit = async (event: React.MouseEvent<HTMLElement>) => {
    if (localStorage.accountDetail) {
      if (parseInt(amount) > settings.maxAmount) {
        toast.error(
          "NFTs shouldn't be greater then " + settings.maxAmount + ".",
          { duration: 3000 }
        );
      } else if (amount === "") {
        toast.error("Amount shouldn't be empty.", { duration: 3000 });
      } else if (parseInt(amount) < 0) {
        toast.error("Amount should be greater then zero.", { duration: 3000 });
      } else {
        var data = JSON.parse(localStorage.accountDetail);
        var reqData = {
          address: data.address,
          amount: amount,
          price: settings.price,
          total: total,
          addressType: data.type,
        } as any;
        const result = await addMetamaskAddress(reqData);
        if (result) {
          // toast.success("MINT request sent successfully.", { duration: 3000 });
          setAmount("");
          setTotal(0);
          handleShow();
        } else {
          toast.error("MINT request  failed.", { duration: 3000 });
        }
      }
    } else {
      setWalletModalShow(true);
    }
  };
  return (
    <>
      <section id="mintform" className="mintform-section">
        <div className="container container-2">
          <div className="text-sm-center mb-5">
            <h2 className="section-title">Mint</h2>
            <h6 style={{ color: "#fff" }}>Total supply 10,000</h6>
            <h6 style={{ color: "#fff" }}>{`Max per mint: 5`}</h6>
          </div>
          <form className="mw-375 mx-auto">
            <div className="d-flex align-items-center justify-content-between">
              <label style={{ color: "#fff" }}>NFTs</label>
              <div className="input-group justify-content-center">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={onMinusClick}
                >
                  －
                </button>
                <input
                  type="number"
                  className="form-control mw-90 text-center"
                  ref={inputRef}
                  value={amount}
                  min={1}
                  max={settings.maxAmount}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={onPlusClick}
                >
                  ＋
                </button>
              </div>
              <button
                type="button"
                className="btn btn-light btn-sm fw-bold"
                onClick={setMaxAmount}
              >
                Max
              </button>
            </div>
            <hr className="border-white"></hr>
            <div className="d-flex align-items-center justify-content-between">
              <label style={{ color: "#fff" }}>Total</label>
              <label style={{ color: "#fff" }}>{total} ETH</label>
            </div>
            <hr className="border-white"></hr>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-secondary btn-wallet w-100"
                onClick={handleSubmit}
              >
                {localStorage.accountDetail ? "Mint" : "Connect Wallet"}
              </button>
            </div>
          </form>
        </div>
      </section>
      <WalletModal
        show={walletModalShow}
        onHide={() => setWalletModalShow(false)}
      />
      <Modal
        show={showInfoModal}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <p>
            Thank you for your interest in Crypto Speedway! For your support, we
            have stored your wallet on our whitelist! Please join our discord to
            claim your whitlist spot by filling out the Google form in
            #whitelist-info. Follow us on Twitter and Instagram to stay updated
            on new developments! Have a great day!
          </p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center border-0">
          <a
            href="https://discord.gg/xwB4S5Yhw3"
            className="btn btn-secondary btn-discord"
          >
            <img
              loading="lazy"
              src={require("../../assets/images/discord-white.png").default}
              alt="Discord logo"
              className="button-icon"
            />
            <div className="text-block">Discord</div>
          </a>
          <button className="btn btn-secondary" onClick={handleClose}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
