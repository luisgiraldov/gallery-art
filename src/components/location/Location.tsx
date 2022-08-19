import { ReactElement } from "react";
import Styles from "./Location.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Button from "../smallComponents/button/Button";

const Location = (): ReactElement => {
	//to be able to use react-leaflet make sure to install the types, if using with TS
	//npm i -D @types/react-leaflet
	//npm install -D @types/leaflet

	//Boston Common
	return (
		<section className={Styles["location"]}>
			<MapContainer
				center={[41.4901, -71.3128]}
				zoom={13}
				className={Styles["leaflet-container"]}
			>
				<div className={Styles["location__button-container"]}>
					<Button text="Back to home" address="/" goBack={true} />
				</div>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[41.4901, -71.3128]}>
					<Popup className={Styles["popup"]}>
						<span className={Styles["popup__text"]}>
							Welcome to our amazing gallery. <br /> Have fun :P.
						</span>
					</Popup>
				</Marker>
			</MapContainer>

			<div className={Styles["location__address"]}>
				<h3 className={Styles["location__address--title"]}>
					Our location
				</h3>
				<h4 className={Styles["location__address--street"]}>99 King Street</h4>
				<p className={Styles["location__address--city"]}>
					<span>Newport</span><span>RI 02840</span><span>United States of America</span>
				</p>
				<p className={Styles["location__address--text"]}>
					Our newly opened gallery is located near the Edward King
					House on 99 King Street, the Modern Art Gallery is free to
					all visitors and open seven days a week from 8am to 9pm.
				</p>
			</div>
		</section>
	);
};

export default Location;
