import * as React from "react";
import { RevealProps } from "../Reveal";
declare type SlideDirection = "down" | "left" | "right" | "up";
interface SlideProps extends Omit<RevealProps, "keyframes"> {
    /**
     * Origin of the animation.
     * @default undefined
     */
    direction?: SlideDirection;
    /**
     * Specifies if the animation should make element(s) disappear.
     * @default false
     */
    reverse?: boolean;
}
declare const Slide: React.FC<SlideProps>;
export default Slide;
