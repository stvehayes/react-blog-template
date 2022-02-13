import * as React from "react";
import { RevealProps } from "../Reveal";
declare type ZoomDirection = "down" | "left" | "right" | "up";
interface ZoomProps extends Omit<RevealProps, "keyframes"> {
    /**
     * Origin of the animation.
     * @default undefined
     */
    direction?: ZoomDirection;
    /**
     * Specifies if the animation should make element(s) disappear.
     * @default false
     */
    reverse?: boolean;
}
declare const Zoom: React.FC<ZoomProps>;
export default Zoom;
