import LayoutPageContent
	from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/LayoutPageContent";
import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import {withAuthorizedRoute} from "@/HOCs/withAuthorizedRoute";
import Head from "next/head";
import {FC} from "react";
import GridImages from "@/components/GridImages/GridImages";
import Loader from "@/components/ui/Loader/Loader";
import {useAppSelector} from "@/hooks/useAppSelector";
import {useRouter} from "next/router";
import {Routes} from "@/common/constants/routes";
import Button from "@/components/ui/Button/Button";
import styles from "@/components/Breeds/Breeds.module.scss";
import SearchRequest from "@/components/ui/SearchField/components/SearchRequest";

const Search: FC = () => {
	const {breedsData, isPending} = useAppSelector(state => state.breedsSliceReducer);
	const {searchValue} = useAppSelector(state => state.searchSliceReducer);
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Search - PetsPaw</title>
			</Head>
			<LayoutPage>
				<LayoutPageContent>
					<>
						<SearchRequest/>
						<div className={styles.galleryContainer}>
							{!isPending ? (
								<>
									<GridImages isHoverAble={true} arrayImages={searchValue.length > 0 ? searchValue : breedsData}>
										{image => (
											<div className={styles.buttonContainer}>
												<Button className={styles.breedsIcon}
												        onClick={() => router.push(`${Routes.BREEDS}/${image.breedsId}`)}>{image.breedName}</Button>
											</div>
										)}
									</GridImages>
								</>
							) : (
								<Loader/>
							)}
						</div>
					</>
				</LayoutPageContent>
			</LayoutPage>
		</>
	);
};

export default withAuthorizedRoute(Search);
