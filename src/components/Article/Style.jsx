import styled, { css } from "styled-components";
import  "../StyledComponents/Theme";

export const ClientText = styled.p`
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 2px;
    color: white;
`;

export const HeroTitle = styled.h1`
    text-align: center;
    font-size: 48px;

    @media (max-width: ${props => props.theme.queries.mobile}) {
        text-align: left;
        font-size: 30px;
    }
`;

export const Badge = styled.div`
    padding: 0.3rem 0.75rem;
    background: rgba(255, 255, 255, 0.15);
    display: inline-block;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    border-radius: 4px;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;

    p {
        color: white;
        font-weight: 500;
        margin: 0;
    }

    ${props => props.color && css`
        background: ${props => props.color};
    `}
`;

export const ProcessContainer = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    @media (max-width: ${props => props.theme.queries.mobile}) {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
    }
`;

export const ProcessSection = styled.div`
    border-top: 1px solid rgba(145, 145, 145, 0.25);
    padding-top: 2rem;
    position: relative;
    margin-top: 2rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
`;

export const ProcessSeparator = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform: rotate(45deg) translate(-0.5rem, -0.25rem);
        -ms-transform: rotate(45deg) translate(-0.5rem, -0.25rem);
            transform: rotate(45deg) translate(-0.5rem, -0.25rem);

`;

export const ProcessList = styled.ul`
    list-style: none;
    padding: 0;

    p {
        margin: 0 0 0.75rem 0;
    }
`;