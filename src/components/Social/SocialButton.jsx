import React from "react";
import { SocialButton } from "./Style";

const Social = (props) => (
    <a href={props.link} aria-label={props.social} title={props.social} target="_blank" rel="noopener noreferrer">
        <SocialButton social={props.social} margin={props.margin}>
            <i className={`lab la-${props.icon}`}></i>
        </SocialButton>
    </a>
);

export default Social;