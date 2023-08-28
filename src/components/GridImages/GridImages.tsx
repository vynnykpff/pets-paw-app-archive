import ReactionCard from "@/components/ReactionCard/ReactionCard";
import GalleryGrid from "@/components/ui/GalleryGrid/GalleryGrid";
import { FC, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

interface ImgObject {
	id?: string;
	url: string;
	breedsId?: string;
	breedName?: string;
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
			<GalleryGrid key={uuidv4()}>
				{arrayImages.map(image => (
					<ReactionCard key={uuidv4()} imageUrl={image.url} isHoverAble={isHoverAble}>
						{(children ?? (() => <></>))(image)}
					</ReactionCard>
				))}
			</GalleryGrid>
		</>
	);
};

export default GridImages;
