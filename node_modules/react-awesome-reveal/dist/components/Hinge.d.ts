import * as React from "react";
import { RevealProps } from "../Reveal";
declare type HingeProps = Omit<RevealProps, "keyframes">;
declare const Hinge: React.FC<HingeProps>;
export default Hinge;
