import React from 'react';
import {
    InputContainer,
    Input,
    InputLabel,
    TextArea
} from '../StyledComponents/StyledComponents';

const InputComponent = (props) => {
    return(
        <InputContainer>
            <InputLabel>{props.label}</InputLabel>
            {
                props.textArea
                    ?
                <TextArea name={props.label.toLowerCase()} />
                    :
                <Input
                    placeholder={props.placeholder || ''}
                    error={props.error} type={props.type || "text"}
                    name={props.label.toLowerCase()}
                />
            }
        </InputContainer>

    )
}

export default InputComponent;
