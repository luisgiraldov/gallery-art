import { ReactElement } from "react";
import Styles from "./Header.module.css";
import hero from "../../assets/mobile/image-hero.jpg";
import hero2x from "../../assets/mobile/image-hero@2x.jpg";
import Button from "../smallComponents/button/Button";

const Header = (): ReactElement => {
	return (
		<header className={Styles.header}>
			<img
				srcSet={`${hero} 375w, ${hero2x} 750w`}
				sizes="100vw"
				className={Styles["hero-image"]}
				alt="people looking at painting"
				src={hero2x}
			/>
			<div className={Styles["header__content"]}>
				<h1 className={Styles["header__content--title"]}>
					<span>Modern</span> Art Gallery
				</h1>
				<p className={Styles["header__content--text"]}>
					The arts in the collection of the Modern Art Gallery all
					started from a spark of inspiration. Will these pieces
					inspire you? Visit us and find out.
				</p>
				<Button text="Our Location" address="#" goBack={false} />
			</div>
		</header>
	);
};

export default Header;
