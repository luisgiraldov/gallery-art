import { FC, ReactElement } from "react";
import Styles from "./Button.module.css";
import { Link } from "react-router-dom";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

//install react icons

const Button: FC<{ text: string; address: string; goBack: boolean }> = ({
	text,
	address,
	goBack,
}): ReactElement => {
	return (
		<div className={Styles["button-container"]}>
			{!goBack && <Link
				to={address}
				className={`${Styles.button} ${Styles["button-1"]}`}
			>
				{text}
				<i className={`${Styles["icon-container"]} ${Styles["icon-button-1"]}`}>
					{ goBack ? <BsChevronCompactLeft /> : <BsChevronCompactRight /> }
				</i>
			</Link>}
			{goBack && <Link
				to={address}
				className={`${Styles.button} ${Styles["button-2"]}`}
			>
				<i className={`${Styles["icon-container"]} ${Styles["icon-button-2"]}`}>
					{ goBack ? <BsChevronCompactLeft /> : <BsChevronCompactRight /> }
				</i>
				{text}
			</Link>}
		</div>
	);
};

export default Button;
