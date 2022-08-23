import { ReactElement } from "react";
import Styles from "./GalleryGrid.module.css";
import img1Small from "../../assets/mobile/image-grid-1.jpg";
import img1Small2x from "../../assets/mobile/image-grid-1@2x.jpg";
import img1Medium from "../../assets/tablet/image-grid-1.jpg";
import img1Medium2x from "../../assets/tablet/image-grid-1@2x.jpg";
import img2Small from "../../assets/mobile/image-grid-2.jpg";
import img2Small2x from "../../assets/mobile/image-grid-2@2x.jpg";
import img2Medium from "../../assets/tablet/image-grid-2.jpg";
import img2Medium2x from "../../assets/tablet/image-grid-2@2x.jpg";
import img3Small from "../../assets/mobile/image-grid-3.jpg";
import img3Small2x from "../../assets/mobile/image-grid-3@2x.jpg";
import img3Medium from "../../assets/tablet/image-grid-3.jpg";
import img3Medium2x from "../../assets/tablet/image-grid-3@2x.jpg";

const GalleryGrid = (): ReactElement => {
	return (
		<section className={Styles["grid-container"]}>
			<picture className={Styles["grid-image"]}>
				<source
					srcSet={`${img1Small} 1x, ${img1Small2x} 2x`}
					media="(max-width: 767px)"
				></source>
				<source
					srcSet={`${img1Medium} 1x, ${img1Medium2x} 2x`}
					media="(max-width: 1024px)"
				></source>
				<img
					srcSet={`${img1Small} 1x, ${img1Small2x} 2x`}
					alt="Art gallery hall"
					src={img1Small2x}
				/>
			</picture>
			<div className={Styles["grid__light-section"]}>
				<h2
					className={`${Styles["grid__title"]} ${Styles["grid__title--light-section"]}`}
				>
					<span>Your day</span> at the gallery
				</h2>
				<p className={Styles["grid__text--light-section"]}>
					Wander through our distinct collections and find new
					insights about our artists. Dive into the details of their
					creative process.
				</p>
			</div>
			<picture className={Styles["grid-image"]}>
				<source
					srcSet={`${img2Small} 1x, ${img2Small2x} 2x`}
					media="(max-width: 767px)"
				></source>
				<source
					srcSet={`${img2Medium} 1x, ${img2Medium2x} 2x`}
					media="(max-width: 1024px)"
				></source>
				<img
					srcSet={`${img2Small} 1x, ${img2Small2x} 2x`}
					alt="Art gallery hall"
					src={img2Small2x}
				/>
			</picture>
			<picture className={Styles["grid-image"]}>
				<source
					srcSet={`${img3Small} 1x, ${img3Small2x} 2x`}
					media="(max-width: 767px)"
				></source>
				<source
					srcSet={`${img3Medium} 1x, ${img3Medium2x} 2x`}
					media="(max-width: 1024px)"
				></source>
				<img
					srcSet={`${img3Small} 1x, ${img3Small2x} 2x`}
					alt="Art gallery hall"
					src={img3Small2x}
				/>
			</picture>
			<div className={Styles["grid__dark-section"]}>
				<h3
					className={`${Styles["grid__title"]} ${Styles["grid__title--dark-section"]}`}
				>
					<span>COME &amp; BE</span> INSPIRED
				</h3>
				<p className={Styles["grid__text--dark-section"]}>
					We’re excited to welcome you to our gallery and see how our
					collections influence you.
				</p>
			</div>
		</section>
	);
};

export default GalleryGrid;
