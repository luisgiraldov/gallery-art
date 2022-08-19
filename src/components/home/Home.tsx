import { ReactElement } from "react";
import Styles from "./Home.module.css";
import Header from "../header/Header";
import GalleryGrid from '../galleryGrid/GalleryGrid';
import Footer from '../footer/Footer';

const Home = (): ReactElement => {
	return (
		<>
			<main className={Styles["main-content"]}>
				<Header />
				<GalleryGrid />
			</main>
			<Footer />
		</>
	);
};

export default Home;
