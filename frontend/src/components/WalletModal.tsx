import { useEffect } from "react";
import { Modal } from 'react-bootstrap';
import { ethers } from "ethers";
import toast from 'react-hot-toast';
import { useMoralis } from "react-moralis";

export default function WalletModal(props: any) {
    const { authenticate, isAuthenticated, logout } = useMoralis();
    useEffect(() => {
        if (isAuthenticated) {
            // add your logic here
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);
    const handleMetamaskClick = async (event: React.MouseEvent<HTMLElement>) => {
        if (localStorage.accountDetail) {
            toast.success("Wallet connected successfully.", { duration: 3000 });
        } else {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = await provider.send("eth_requestAccounts", []);
                localStorage.setItem('accountDetail', JSON.stringify({ address: signer[0], type: "metamask" }));
                props.onHide();
                toast.success("Wallet connected successfully.", { duration: 3000 });
            } else {
                toast.error("Install metamask extension.", { duration: 3000 });
            }
        }
    };
    const handleWalletConnectClick = async (event: React.MouseEvent<HTMLElement>) => {
        await logout();
        if (!isAuthenticated) {
            await authenticate({
                provider: "walletconnect",
            })
                .then(async function (user) {
                    const address = user!.get("ethAddress");
                    localStorage.setItem('accountDetail', JSON.stringify({ address: address, type: "walletconnect" }));
                    props.onHide();
                    toast.success("Wallet connected successfully.", { duration: 3000 });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };
    return (
        <>
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className="modal-dark" centered>
                <Modal.Header className="text-center px-5 border-0">
                    <Modal.Title className="text-white">Click the Wallet you want to connect to.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row align-items-center">
                        <div className="col text-center">
                            <button type="button" className="btn btn-link" onClick={handleMetamaskClick} name="Metamask">
                                <img loading="lazy" src={require("../assets/images/metamask.png").default} alt="Metamask logo" width={150} />
                            </button>
                        </div>
                        <div className="col text-center">
                            <button type="button" className="btn btn-link" onClick={handleWalletConnectClick} name="Wallet Connect">
                                <img loading="lazy" src={require("../assets/images/walletconnect.png").default} alt="Walletconnect logo" width={150} />
                            </button>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="justify-content-center border-0">
                    <button className="btn btn-secondary" onClick={props.onHide}>Cancel</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}