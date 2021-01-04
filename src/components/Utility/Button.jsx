import React from 'react';
import { Button } from '../StyledComponents/StyledComponents';

const PrimaryButton = (props) => {
    return(
        <a href={props.route} target={props.newTab ? '_blank' : null}>
            <Button color={props.color} onClick={props.onClick} type={props.submit ? "submit" : "button"} right={props.right ? true : false} left={props.left ? true : false}>
                {
                    props.left
                        ?
                    <i className="las la-arrow-left"></i>
                        :
                    null
                }
                <span>{props.text}</span>
                {
                    props.right
                        ?
                    <i className={`las la-${props.newTab ? 'level-up-alt' : 'arrow-right'}`}></i>
                        :
                    null
                }
            </Button>
        </a>
    )
}

export default PrimaryButton;
