import { ReactElement } from "react";
import Styles from "./Footer.module.css";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom";

const Footer = (): ReactElement => {
	return (
		<footer className={Styles.footer}>
			<h4 className={Styles["footer__title"]}>
				<span>Modern</span> Art Gallery
			</h4>
			<p className={Styles["footer__text"]}>
				The Modern Art Gallery is free to all visitors and open seven
				days a week from 8am to 9pm. Find us at 99 King Street, Newport,
				USA.
			</p>
            <div className={Styles["footer__social"]}>
                <Link to="#" className={Styles.icon}><FaFacebookSquare /></Link><Link to="#" className={Styles.icon}><FaInstagram /></Link><Link to="#" className={Styles.icon}><FaTwitter /></Link>
            </div>
		</footer>
	);
};

export default Footer;
