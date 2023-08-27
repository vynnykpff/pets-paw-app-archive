import { Variant, VariantObject } from "@/components/ui/Select/Select";
import { isVariantObject } from "@/components/ui/Select/utils/isVariantObject";

export function getVariantProperty(variant: Variant, property: keyof VariantObject) {
	return isVariantObject(variant) ? variant[property] : variant;
}
