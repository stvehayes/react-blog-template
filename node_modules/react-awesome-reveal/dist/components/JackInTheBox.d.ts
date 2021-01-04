import * as React from "react";
import { RevealProps } from "../Reveal";
declare type JackInTheBoxProps = Omit<RevealProps, "keyframes">;
declare const JackInTheBox: React.FC<JackInTheBoxProps>;
export default JackInTheBox;
