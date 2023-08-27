import { Dispatch, FC, SetStateAction, useState } from "react";
import styles from "./Select.module.scss";
import SelectArrow from "@/assets/icons/selectArrow.svg";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface ISelect {
	currentState: string;
	setCurrentState: Dispatch<SetStateAction<ISelect["currentState"]>>;
	variants: string[];
	maxWidth?: string;
	minWidth?: string;
}

const Select: FC<ISelect> = ({ currentState, setCurrentState, variants, maxWidth, minWidth }) => {
	const [variantsVisible, setVariantsVisible] = useState<boolean>(false);
	const containerRef = useOutsideClick<HTMLDivElement>(() => {
		setVariantsVisible(false);
	});

	const filteredVariants = variants.filter(v => v !== currentState);

	return (
		<div ref={containerRef} style={{ maxWidth: maxWidth, minWidth: minWidth }} className={styles.selectContainer}>
			<div onClick={() => setVariantsVisible(!variantsVisible)} className={styles.selectedVariant}>
				<span>{currentState}</span>
				<SelectArrow className={styles.arrowIcon} data-active={variantsVisible} />
			</div>
			{variantsVisible && (
				<div onClick={() => setVariantsVisible(false)} className={styles.selectVariantsContainer}>
					{filteredVariants.map((variant, key) => (
						<span onClick={() => setCurrentState(variant)} key={key}>
							{variant}
						</span>
					))}
				</div>
			)}
		</div>
	);
};

export default Select;
