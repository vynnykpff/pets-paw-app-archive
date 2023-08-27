import { Variant, VariantObject } from "@/components/ui/Select/Select";

export function isVariantObject(arg: Variant): arg is VariantObject {
	return Boolean(typeof arg === "object" && arg.value && arg.text);
}
