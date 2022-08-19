import { ReactElement } from "react";
import Styles from "./GalleryGrid.module.css";
import img1 from "../../assets/mobile/image-grid-1.jpg";
import img1_2x from "../../assets/mobile/image-grid-1@2x.jpg";
import img2 from "../../assets/mobile/image-grid-2.jpg";
import img2_2x from "../../assets/mobile/image-grid-2@2x.jpg";
import img3 from "../../assets/mobile/image-grid-3.jpg";
import img3_2x from "../../assets/mobile/image-grid-3@2x.jpg";

const GalleryGrid = (): ReactElement => {
	return (
		<section className={Styles["grid-container"]}>
			<img
				srcSet={`${img1} 343w, ${img1_2x} 686w`}
				className={Styles["grid-image"]}
				alt="Art gallery hall"
				src={img1_2x}
			/>
			<h2 className={`${Styles["grid__title"]} ${Styles["grid__title--light-section"]}`}>
				<span>Your day</span> at the gallery
			</h2>
			<p className={Styles["grid__text--light-section"]}>
				Wander through our distinct collections and find new insights
				about our artists. Dive into the details of their creative
				process.
			</p>
			<img
				srcSet={`${img2} 343w, ${img2_2x} 686w`}
				className={Styles["grid-image"]}
				alt="Art gallery hall"
				src={img2_2x}
			/>
			<img
				srcSet={`${img3} 343w, ${img3_2x} 686w`}
				className={Styles["grid-image"]}
				alt="Art gallery hall"
				src={img3_2x}
			/>
			<div className={Styles["grid__dark-section"]}>
				<h3 className={`${Styles["grid__title"]} ${Styles["grid__title--dark-section"]}`}><span>COME &amp; BE</span> INSPIRED</h3>
				<p className={Styles["grid__text--dark-section"]}>
					We’re excited to welcome you to our gallery and see how our
					collections influence you.
				</p>
			</div>
		</section>
	);
};

export default GalleryGrid;
