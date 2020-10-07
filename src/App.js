import React from "react";
import Header from "./components/Header";
import SliderView from "./components/SliderView";
import MainDashboard from "./components/MainDashboard";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<SliderView />
			<MainDashboard />
			<Footer />
		</div>
	);
}

export default App;
