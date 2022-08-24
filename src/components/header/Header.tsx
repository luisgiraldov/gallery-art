import { ReactElement } from "react";
import Styles from "./Header.module.css";
import heroSmall from "../../assets/mobile/image-hero.jpg";
import heroSmall2x from "../../assets/mobile/image-hero@2x.jpg";
import heroMedium from "../../assets/tablet/image-hero.jpg";
import heroMedium2x from "../../assets/tablet/image-hero@2x.jpg";
import heroLarge from "../../assets/desktop/image-hero.jpg";
import heroLarge2x from "../../assets/desktop/image-hero.jpg";
import Button from "../smallComponents/button/Button";

const Header = (): ReactElement => {
	return (
		<header className={Styles.header}>
			<div className={Styles["background-black"]}>&nbsp;</div>
			<picture className={Styles["hero-image--container"]}>
				<source
					srcSet={`${heroSmall} 1x, ${heroSmall2x} 2x`}
					media="(max-width: 767px)"
				></source>
				<source
					srcSet={`${heroMedium} 1x, ${heroMedium2x} 2x`}
					media="(max-width: 1023px)"
				></source>
				<source
					srcSet={`${heroLarge} 1x, ${heroLarge2x} 2x`}
					media="(min-width: 1024px)"
				></source>
				<img
					srcSet={`${heroLarge} 1x, ${heroLarge2x} 2x`}
					alt="people looking at painting"
					src={heroLarge2x}
					className={Styles["hero-image"]}
				/>
			</picture>
			<div className={Styles["header__content"]}>
				<h1 className={Styles["header__content--title"]}>
					<span>Modern</span> Art Gallery
				</h1>
				<p className={Styles["header__content--text"]}>
					The arts in the collection of the Modern Art Gallery all
					started from a spark of inspiration. Will these pieces
					inspire you? Visit us and find out.
				</p>
				<Button
					text="Our Location"
					address="/location"
					goBack={false}
				/>
			</div>
		</header>
	);
};

export default Header;
