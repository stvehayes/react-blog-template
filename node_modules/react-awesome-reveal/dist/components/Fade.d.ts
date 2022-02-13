import * as React from "react";
import { RevealProps } from "../Reveal";
declare type FadeDirection = "bottom-left" | "bottom-right" | "down" | "left" | "right" | "top-left" | "top-right" | "up";
interface FadeProps extends Omit<RevealProps, "keyframes"> {
    /**
     * Causes the animation to start farther. Only works with "down", "left", "right" and "up" directions.
     * @default false
     */
    big?: boolean;
    /**
     * Origin of the animation.
     * @default undefined
     */
    direction?: FadeDirection;
    /**
     * Specifies if the animation should make element(s) disappear.
     * @default false
     */
    reverse?: boolean;
}
declare const Fade: React.FC<FadeProps>;
export default Fade;
