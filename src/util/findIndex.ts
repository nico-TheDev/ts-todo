import { clamp, distance } from "@popmotion/popcorn";

export interface Position {
    top: number;
    height: number;
}

const buffer = 5;

export const findIndex = (
    one: number,
    yOffset: number,
    positions: Position[]
) => {
    let target = 1;

    const { top, height } = positions[one];
    const bottom = top + height;

    if (yOffset > 0) {
        const nextItem = positions[one + 1];
        if (nextItem === undefined) return one;

        const swapOffset =
            distance(bottom, nextItem.top + nextItem.height / 2) + buffer;
        if (yOffset > swapOffset) target = one + 1;
    } else if (yOffset < 0) {
        const prevItem = positions[one - 1];
        if (prevItem === undefined) return one;

        const prevBottom = prevItem.top + prevItem.height;
        const swapOffset =
            distance(top, prevBottom - prevItem.height / 2) + buffer;
        if (yOffset < -swapOffset) target = one - 1;
    }

    return clamp(0, positions.length, target);
};
