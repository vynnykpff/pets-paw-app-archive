import Logo from "@/components/ui/Logo/Logo";
import { ROUTES } from "@/constants/routes";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./InitialSelectActions.module.scss";
import HiIcon from "@/assets/icons/hi.svg";

import votingImage from "@/assets/images/vote.png";
import breedsImage from "@/assets/images/breeds.png";
import galleryImage from "@/assets/images/gallery.png";

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

	return (
		<div className={styles.wrapper}>
			<header>
				<Logo />
			</header>
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
									<Image src={card.imageUrl} alt={card.description} />
								</div>

								<button
									style={{
										background: router.pathname === card.route ? "#FF868E" : "",
										color: router.pathname === card.route ? "#FFF" : "",
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
