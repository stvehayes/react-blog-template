import React from 'react';
import { Link } from '../StyledComponents/StyledComponents';

const InlineLink = (props) => {
    return(
        <Link href={props.route} target={props.external ? '_blank' : null} rel="noopener noreferrer">
            {props.text}
        </Link>
    )
}

export default InlineLink;
