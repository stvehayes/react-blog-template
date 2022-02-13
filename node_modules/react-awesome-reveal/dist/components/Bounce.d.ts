import * as React from "react";
import { RevealProps } from "../Reveal";
declare type BounceDirection = "down" | "left" | "right" | "up";
interface BounceProps extends Omit<RevealProps, "keyframes"> {
    /**
     * Origin of the animation.
     * @default undefined
     */
    direction?: BounceDirection;
    /**
     * Specifies if the animation should make element(s) disappear.
     * @default false
     */
    reverse?: boolean;
}
declare const Bounce: React.FC<BounceProps>;
export default Bounce;
