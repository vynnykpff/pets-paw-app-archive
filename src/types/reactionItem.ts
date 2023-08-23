import { FC } from "react";

export interface IReactionItem {
	ReactionIcon: FC;
	isCentred: boolean;
	bgDefaultColor: string;
	bgHoverColor: string;
	bgActiveColor?: string;
	iconDefaultColor: string;
	iconHoverColor: string;
	iconActiveColor?: string;
}
