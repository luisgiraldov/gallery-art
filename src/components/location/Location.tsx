import { ReactElement } from "react";
import Styles from "./Location.module.css";

const Location = (): ReactElement => { 
    return (
        <section className={Styles["location"]}>
            <div className="map" id="mapid"></div>
        </section>
    );
};

export default Location;