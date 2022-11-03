import { useState, useEffect } from 'react';
import Header from "../components/Header";
import Banner from "./home/Banner";
import { Table } from 'react-bootstrap';
import { getAddress } from "../actions/wallet.action";
import { Link } from "react-router-dom";
import moment from 'moment';

export default function WalletListing() {
	const [addresses, setAddresses] = useState([] as any);
	useEffect(() => {
		const getAllAddresses = async () => {
			const allAddresses = await getAddress();
			console.log(allAddresses);
			setAddresses(allAddresses.data);
		}
		getAllAddresses();
	}, []);
	return (
		<>
			<Header />
			<Banner />
			<section className="wallet-history">
				<div className="container">
					<div className="d-flex align-items-center justify-content-between flex-wrap mb-5">
						<h2 className="section-title">Wallet History</h2>
						<Link className="btn btn-wallet" to="/">Back</Link>
					</div>
					<Table striped borderless responsive className='custom-table'>
						<thead>
							<tr>
								<th>ID</th>
								<th>Address</th>
							</tr>
						</thead>
						<tbody>
							{addresses.map(function (address, i) {
								return (
									<>
										<tr key={i}>
											<td>{i + 1}</td>
											<td>{address.address}</td>
										</tr>
										<tr>
											<td></td>
											<td>
												<Table striped borderless responsive className='custom-table'>
													<thead>
														<tr>
															<th>Date</th>
															<th>Amount</th>
															<th>Price</th>
															<th>Total</th>
														</tr>
													</thead>
													<tbody>
														{address.mintData.map(function (data, j) {
															return (
																<>
																	<tr key={j}>
																		<td>{moment(data.created).format("DD-MM-YYYY")}</td>
																		<td>{data.amount}</td>
																		<td>{data.price}</td>
																		<td>{data.total}</td>
																	</tr>
																</>
															)
														})}
													</tbody>
												</Table>
											</td>
										</tr>
									</>
								)
							})}
							
						</tbody>
					</Table>
				</div>
			</section>
		</>
	);
}
