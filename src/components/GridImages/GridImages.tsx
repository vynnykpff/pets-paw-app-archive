import ReactionCard from "@/components/ReactionCard/ReactionCard";
import GalleryGrid from "@/components/ui/GalleryGrid/GalleryGrid";
import { FC, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

interface ImgObject {
	id?: string;
	url: string;
}

interface Props {
	arrayImages: ImgObject[];
	isHoverAble?: boolean;

	children?(img: ImgObject): ReactNode;
}

const GridImages: FC<Props> = ({ arrayImages: images, children, isHoverAble = false }) => {
	const arrayImages = [...images].reverse();
	return (
		<>
			{Array(Math.ceil(arrayImages.length / 5))
				.fill(null)
				.map((gallery, galleryIndex) => (
					<GalleryGrid key={uuidv4()} reversed={!!(galleryIndex % 2)}>
						{arrayImages.slice(galleryIndex * 5, (galleryIndex + 1) * 5).map(image => (
							<ReactionCard key={uuidv4()} imageUrl={image.url} isHoverAble={isHoverAble}>
								{(children ?? (() => <></>))(image)}
							</ReactionCard>
						))}
					</GalleryGrid>
				))}
		</>
	);
};

export default GridImages;
