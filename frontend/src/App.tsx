import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min'
import './App.css';
import '../src/assets/css/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WalletListing from "./pages/WalletListing";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="address-listing" element={<WalletListing />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
export default App;