import { ReactElement } from "react";
import Styles from "./Location.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Location = (): ReactElement => {
	//to be able to use react-leaflet make sure to install the types, if using with TS
	//npm i -D @types/react-leaflet
	//npm install -D @types/leaflet

	//Boston Common
	return (
		<section className={Styles["location"]}>
			<MapContainer
				center={[42.3601, -71.0589]}
				zoom={13}
                className={Styles["leaflet-container"]}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[42.3601, -71.0589]}>
					<Popup className={Styles["popup"]}>
						<span className={Styles["popup__text"]}>The Gallery is around Boston. <br /> Have fun finding it :P.</span>
					</Popup>
				</Marker>
			</MapContainer>
		</section>
	);
};

export default Location;
