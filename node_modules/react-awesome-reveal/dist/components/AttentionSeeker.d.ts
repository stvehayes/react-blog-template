import * as React from "react";
import { RevealProps } from "../Reveal";
declare type AttentionSeekerEffect = "bounce" | "flash" | "headShake" | "heartBeat" | "jello" | "pulse" | "rubberBand" | "shake" | "shakeX" | "shakeY" | "swing" | "tada" | "wobble";
interface AttentionSeekerProps extends Omit<RevealProps, "keyframes"> {
    /**
     * The animation effect to use for this attention seeker.
     * @default "bounce"
     */
    effect?: AttentionSeekerEffect;
}
declare const AttentionSeeker: React.FC<AttentionSeekerProps>;
export default AttentionSeeker;
