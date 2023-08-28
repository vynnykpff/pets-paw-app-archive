import SelectArrow from "@/assets/icons/selectArrow.svg";
import { getVariantProperty } from "@/components/ui/Select/utils/getVariantProperty";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Dispatch, FC, SetStateAction, useState } from "react";
import styles from "./Select.module.scss";

export interface VariantObject {
	text: string;
	value: string;
}

export type Variant = string | VariantObject;

interface ISelect {
	currentState: string;
	setCurrentState: Dispatch<SetStateAction<ISelect["currentState"]>> | ((val: ISelect["currentState"]) => void);
	variants: Variant[];
	maxWidth?: string;
	minWidth?: string;
	bgColor?: string;
}

const Select: FC<ISelect> = ({ currentState, setCurrentState, variants, maxWidth, minWidth, bgColor }) => {
	const [variantsVisible, setVariantsVisible] = useState<boolean>(false);
	const containerRef = useOutsideClick<HTMLDivElement>(() => {
		setVariantsVisible(false);
	});
	const filteredVariants = variants.filter(v => getVariantProperty(v, "value") !== currentState);

	const [currentVariant, setCurrentVariant] = useState<Variant>(variants[0]);

	const setValue = (val: Variant) => {
		setCurrentVariant(val);
		setCurrentState(getVariantProperty(val, "value"));
	};

	return (
		<div ref={containerRef} style={{ maxWidth: maxWidth, minWidth: minWidth }} className={styles.selectContainer}>
			<div style={{background: bgColor}} onClick={() => setVariantsVisible(!variantsVisible)} className={styles.selectedVariant}>
				<span>{getVariantProperty(currentVariant, "text")}</span>
				<SelectArrow className={styles.arrowIcon} data-active={variantsVisible} />
			</div>
			{variantsVisible && (
				<div onClick={() => setVariantsVisible(false)} className={styles.selectVariantsContainer}>
					{filteredVariants.map((variant, key) => (
						<span onClick={() => setValue(variant)} key={key}>
							{getVariantProperty(variant, "text")}
						</span>
					))}
				</div>
			)}
		</div>
	);
};

export default Select;
