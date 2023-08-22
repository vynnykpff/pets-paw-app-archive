import HiIcon from "@/assets/icons/greeting.svg";
import breedsImage from "@/assets/images/breeds.png";
import galleryImage from "@/assets/images/gallery.png";
import votingImage from "@/assets/images/vote.png";
import LayoutHeader from "@/components/ui/Layout/components/LayoutHeader/LayoutHeader";

import { ROUTES } from "@/constants/routes";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

import styles from "./InitialSelectActions.module.scss";

interface CardItem {
	name: string;
	route: string;
	imageUrl: StaticImageData;
	description: string;
	bgColor: string;
}

const InitialSelectActions: FC = () => {
	const router = useRouter();

	const data: CardItem[] = [
		{ name: "VOTING", route: ROUTES.voting, imageUrl: votingImage, description: "voting image", bgColor: "#B4B7FF" },
		{ name: "BREEDS", route: ROUTES.breeds, imageUrl: breedsImage, description: "breeds image", bgColor: "#97EAB9" },
		{ name: "GALLERY", route: ROUTES.gallery, imageUrl: galleryImage, description: "gallery image", bgColor: "#FFD280" },
	];

	const getRouterPath = (cardPath: string): boolean => {
		return router.pathname === cardPath;
	};

	return (
		<div className={styles.wrapper}>
			<LayoutHeader />
			<section className={styles.layoutContent}>
				<div className={styles.greetingWrapper}>
					<h1 className={styles.greetingTitle}>Hi!</h1>
					<HiIcon />
				</div>
				<h2 className={styles.subGreeting}>Welcome to MacPaw Bootcamp 2023</h2>
				<div>
					<h3 className={styles.cardsTitle}>Lets start using The Cat API</h3>
					<div className={styles.cardsContainer}>
						{data.map((card, index) => (
							<div key={index}>
								<div className={styles.cardImageContainer} style={{ backgroundColor: card.bgColor }}>
									<Image priority={true} src={card.imageUrl} alt={card.description} />
								</div>
								<button
									style={{
										background: getRouterPath(card.route) ? "var(--primary-color)" : "var(--secondary-color)",
										color: getRouterPath(card.route) ? "#FFF" : "var(--primary-color)",
									}}
									className={styles.cardButton}
									onClick={() => {
										router.push(card.route);
									}}
								>
									{card.name}
								</button>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default InitialSelectActions;
