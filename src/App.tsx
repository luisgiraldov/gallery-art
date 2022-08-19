import "./App.css";
import Location from "./components/location/Location";
import Home from "./components/home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
	//Animation between routes
	const location = useLocation();
	const [displayLocation, setDisplayLocation] = useState(location);
	const [transitionStage, setTransistionStage] = useState("fadeIn");

	useEffect(() => {
		if (location !== displayLocation) setTransistionStage("fadeOut");
	}, [location, displayLocation]);

	return (
		<div className="App">
			<div
				className={`${transitionStage}`}
				onAnimationEnd={() => {
					if (transitionStage === "fadeOut") {
						setTransistionStage("fadeIn");
						setDisplayLocation(location);
					}
				}}
			>
				<Routes location={displayLocation}>
					<Route path="/" element={<Home />} />
					<Route path="/location" element={<Location />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
