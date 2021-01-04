import * as React from "react";
import { RevealProps } from "../Reveal";
declare type FlipDirection = "horizontal" | "vertical";
interface FlipProps extends Omit<RevealProps, "keyframes"> {
    /**
     * Axis direction of the animation.
     * @default undefined
     */
    direction?: FlipDirection;
    /**
     * Specifies if the animation should make element(s) disappear. It only has effect if a direction is specified.
     * @default false
     */
    reverse?: boolean;
}
declare const Flip: React.FC<FlipProps>;
export default Flip;
