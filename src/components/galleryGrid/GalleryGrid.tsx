import { ReactElement } from "react";
import Styles from "./GalleryGrid.module.css";
import img1Small from "../../assets/mobile/image-grid-1.jpg";
import img1Small2x from "../../assets/mobile/image-grid-1@2x.jpg";
import img2Small from "../../assets/mobile/image-grid-2.jpg";
import img2Small2x from "../../assets/mobile/image-grid-2@2x.jpg";
import img3Small from "../../assets/mobile/image-grid-3.jpg";
import img3Small2x from "../../assets/mobile/image-grid-3@2x.jpg";
import img1Medium from "../../assets/tablet/image-grid-1.jpg";
import img1Medium2x from "../../assets/tablet/image-grid-1@2x.jpg";
import img2Medium from "../../assets/tablet/image-grid-2.jpg";
import img2Medium2x from "../../assets/tablet/image-grid-2@2x.jpg";
import img3Medium from "../../assets/tablet/image-grid-3.jpg";
import img3Medium2x from "../../assets/tablet/image-grid-3@2x.jpg";
import img1Large from "../../assets/desktop/image-grid-1.jpg";
import img1Large2x from "../../assets/desktop/image-grid-1@2x.jpg";
import img2Large from "../../assets/desktop/image-grid-2.jpg";
import img2Large2x from "../../assets/desktop/image-grid-2@2x.jpg";
import img3Large from "../../assets/desktop/image-grid-3.jpg";
import img3Large2x from "../../assets/desktop/image-grid-3@2x.jpg";

const GalleryGrid = (): ReactElement => {
	return (
		<section className={Styles["grid-container"]}>
			<picture className={Styles["image-1"]}>
				<source
					srcSet={`${img1Small} 1x, ${img1Small2x} 2x`}
					media="(max-width: 767px)"
				></source>
				<source
					srcSet={`${img1Medium} 1x, ${img1Medium2x} 2x`}
					media="(max-width: 1023px)"
				></source>
				<source
					srcSet={`${img1Large} 1x, ${img1Large2x} 2x`}
					media="(min-width: 1024px)"
				></source>
				<img
					srcSet={`${img1Large} 1x, ${img1Large2x} 2x`}
					alt="Art gallery hall"
					src={img1Large2x}
					className={Styles["grid-image"]}
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
			<picture className={Styles["image-2"]}>
				<source
					srcSet={`${img2Small} 1x, ${img2Small2x} 2x`}
					media="(max-width: 767px)"
				></source>
				<source
					srcSet={`${img2Medium} 1x, ${img2Medium2x} 2x`}
					media="(max-width: 1023px)"
				></source>
				<source
					srcSet={`${img2Large} 1x, ${img2Large2x} 2x`}
					media="(min-width: 1023px)"
				></source>
				<img
					srcSet={`${img2Large} 1x, ${img2Large2x} 2x`}
					alt="Art gallery hall"
					src={img2Large2x}
					className={Styles["grid-image"]}
				/>
			</picture>
			<picture className={Styles["image-3"]}>
				<source
					srcSet={`${img3Small} 1x, ${img3Small2x} 2x`}
					media="(max-width: 767px)"
				></source>
				<source
					srcSet={`${img3Medium} 1x, ${img3Medium2x} 2x`}
					media="(max-width: 1023px)"
				></source>
				<source
					srcSet={`${img3Large} 1x, ${img3Large2x} 2x`}
					media="(min-width: 1023px)"
				></source>
				<img
					srcSet={`${img3Large} 1x, ${img3Large2x} 2x`}
					alt="Art gallery hall"
					src={img3Large2x}
					className={Styles["grid-image"]}
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
