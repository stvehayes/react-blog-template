import styled, { css, createGlobalStyle } from 'styled-components';
import { motion } from "framer-motion";

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 100%;
    }

    body {
        color: ${props => props.theme.body.text};
        margin: 0 auto;
        padding: 0;
        font-family: ${props => props.theme.typography.font};
        font-weight: 300;
        font-size: ${props => props.theme.typography.fontSize};
        line-height: ${props => props.theme.typography.fontLineHeight};
        outline: none;
        overflow-x: hidden;
        overflow-y: auto;
        display: block;
        letter-spacing: ${props => props.theme.typography.fontLetterSpacing};
        background: ${props => props.theme.body.background};
    }

    a {
        text-decoration: none;
        font-family: inherit;
        -webkit-transition: ${props => props.theme.transition};
        -o-transition: ${props => props.theme.transition};
        transition: ${props => props.theme.transition};
        font-weight: inherit;
        letter-spacing: ${props => props.theme.typography.fontLetterSpacing};
        cursor: pointer !important;
        color: white !important;

        &:hover,
        :focus {
            text-decoration: none !important;
        }
    }

    strong {
        font-weight: bold !important;
    }

    .clearfix {
        *zoom: 1;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        line-height: 0;
        content: "";
    }

    .clearfix:after {
        clear: both;
    }

    ::-moz-selection {
        background-color: rgba(255, 255, 255, 0.25);
    }

    ::-webkit-selection {
        background-color: rgba(255, 255, 255, 0.25);
    }

    ::selection {
        background-color: rgba(255, 255, 255, 0.25);
    }

    :focus {
        outline: none;
    }

    code {
        background: rgba(0, 0, 0, 0.25);
        padding: 0.25rem;
        border-radius: 4px;
    }

    strong {
        font-family: $font;
        font-weight: 700;
    }

    p {
        margin: 0 0 1rem 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${props => props.theme.typography.font};
        margin-top: 0;
        margin-bottom: 1rem;
        line-height: 1.25 !important;
        color: ${props => props.theme.body.headers};
        font-weight: ${props => props.theme.typography.headerWeight};
    }

    h1 {
        font-size: 48px;

        @media (max-width: ${props => props.theme.queries.mobile}) {
            font-size: 30px;
        }
    }

    h2 {
        @media (max-width: ${props => props.theme.queries.mobile}) {
            font-size: 24px;
        }
    }

    h3 {
        @media (max-width: ${props => props.theme.queries.mobile}) {
            font-size: 20px;
        }
    }
` 

export const Button = styled.button`
    font-family: ${props => props.theme.typography.font};
    font-size: ${props => props.theme.typography.fontSize};
    border: none;
    color: ${props => props.theme.body.headers};
    -webkit-transition: ${props => props.theme.transition};
    -o-transition: ${props => props.theme.transition};
    transition: ${props => props.theme.transition};
    font-weight: 500;
    letter-spacing: 1px;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer !important;
    outline: none;
    background: rgba(255, 255, 255, 0.1);
    padding: 1rem 1.25rem;
    border-radius: 0.5rem;

    i {
        -webkit-transition: ${props => props.theme.transition};
        -o-transition: ${props => props.theme.transition};
        transition: ${props => props.theme.transition};
        opacity: 0.25
    }

    ${props => props.color &&
        css`
            background: ${props => props.color};
        `
    }

    ${props => props.right === true &&
        css`
            i {
                margin-left: 0.5rem;
            }

            &:hover {
                i {
                    margin-left: 1rem;
                    opacity: 1;
                }
            }
        `
    }

    ${props => props.left === true &&
        css`
            i {
                margin-right: 0.5rem;
            }

            &:hover {
                i {
                    margin-right: 1rem;
                    opacity: 1;
                }
            }
        `
    }

    &:focus, :active {
        outline: none;
    }

    @media (max-width: ${props => props.theme.queries.mobile}) {
        width: 100%;
    }
`;

export const BodyContainer = styled.div`
    max-width: ${props => props.theme.queries.desktop};
    margin: 0 auto;
    padding: 0 2rem;
`;

export const HeroContainer = styled(motion.div)`
    height: 100vh;
    align-items: center;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    @media (max-width: ${props => props.theme.queries.mobile}) {
        height: auto;
        padding: 100px 0 200px 0;
    }
`;

export const ResumeItem = styled.div`
    margin: 0;
`;


// Case Studies

export const CaseStudyContainer = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    margin-bottom: 4rem;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.gray};

    p {
        color: white;
        opacity: 0.75;
    }

    @media (max-width: ${props => props.theme.queries.mobile}) {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column-reverse;
        background-image: none !important;
        margin-bottom: 4rem;
        border-radius: 0px;
        background-color: transparent;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding-bottom: 4rem;
    }
`;

export const CaseStudyImage = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 500px;

    img {
        width: 100%;
        align-self: flex-end;
    }

    @media (max-width: ${props => props.theme.queries.mobile}) {
        background-color: ${props => props.theme.colors.gray};
        width: 100%;
        border-radius: 4px;
        margin-bottom: 2rem;
    }
`;

export const CaseLink = styled.a`
    ${CaseStudyImage} {
        transition: ${p => p.theme.transition};

        img {
            transition: ${p => p.theme.transition};
        }
    }

    &:hover {
        @media (max-width: ${props => props.theme.queries.mobile}) {
            ${CaseStudyImage} {
                img {
                    transform: none;
                }
            }
        }

        ${CaseStudyImage} {
            img {
                transform: scale(1.02);
            }

            @media (max-width: ${props => props.theme.queries.mobile}) {
                img {
                    transform: none;
                }
            }
        }
    }
`;

export const CaseStudyThumb = styled.div`
    width: 40%;
    max-width: 250px;
    height: 100%;
    position: relative;
    overflow: hidden;
    transition: ${props => props.theme.transition};

    &:hover {
        img {
            transform: scale(1.1);
        }
    }

    img {
        width: 100%;
        max-width: 200px;
        transition: ${props => props.theme.transition};

        @media (max-width: ${props => props.theme.queries.mobile}) {
            width: 100%;
        }
    }

    @media (max-width: ${props => props.theme.queries.mobile}) {
        width: 100%;
        height: auto;

        &:hover {
            img {
                transform: scale(1);
            }
        }
    }
`;

export const CaseStudyContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 50%;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding: 3rem;
    min-height: 250px;

    @media (max-width: ${props => props.theme.queries.mobile}) {
        width: 100%;
        padding: 0;
        min-height: auto;

        div {
            margin-bottom: 4rem;
        }
    }
`;

export const Container = styled.div`
    margin: 0 auto;
    display: block;

    ${props => props.flexRow &&
        css`
            display: flex;
            flex-direction: row;
        `
    }

    ${props => props.absoluteCenter &&
        css`
            align-items: center;
            justify-content: center;
            min-height: 80vh;
        `
    }

    ${props => props.grid &&
        css`
            display: flex;
            flex-flow: row wrap;
        `
    }

    ${props => props.leftAlign &&
        css`
            margin: 0;
        `
    }

    ${props => props.flex &&
        css`
            display: flex;

            @media (max-width: ${props => props.theme.queries.mobile}) {
                flex-direction: column;
            }
        `
    }

    ${props => props.center &&
        css`
            justify-content: center;
        `
    }

    ${props => props.padding &&
        css`
            padding: calc(1rem * ${props.padding}) 0;
        `
    }

    ${props => props.margin &&
        css`
            margin-top: ${props.margin}rem;
            margin-bottom: ${props.margin}rem;
        `
    }

    ${props => props.small &&
        css`
            max-width: 725px;
        `
    }

    ${props => props.top &&
        css`
            margin-top: ${props.top}rem;
        `
    }

    ${props => props.bottom &&
        css`
            margin-bottom: ${props.bottom}rem;
        `
    }

    ${props => props.right &&
        css`
            margin-right: ${props.bottom}rem;
        `
    }

    ${props => props.width &&
        css`
            width: ${props.width}%;

            @media (max-width: ${props => props.theme.queries.mobile}) {
                width: 100%;
            }
        `
    }
`;

export const Link = styled.a`
    color: ${props => props.theme.colors.white};
    cursor: pointer !important;
    border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

export const Input = styled.input`
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    color: white;
    padding: 1rem;
    -webkit-transition: ${props => props.theme.transition};
    -o-transition: ${props => props.theme.transition};
    transition: ${props => props.theme.transition};
    -webkit-appearance: none;
    margin-bottom: 2rem;
    font-size: ${props => props.theme.typography.fontSize};
    box-sizing: border-box;
    border: 2px solid rgba(255, 255, 255, 0.2);
    
    label {
        color: ${props => props.theme.colors.white};
        -webkit-transition: ${props => props.theme.transition};
        -o-transition: ${props => props.theme.transition};
        transition: ${props => props.theme.transition};
    }
    
    &:focus {
        color: ${props => props.theme.colors.white};
        border-color: ${props => props.theme.colors.white};
    }

    ${props => props.error &&
        css`
            border-color: ${props => props.theme.colors.error};
        `
    }
`;

export const InputContainer = styled.div`
    position: relative;
    margin-bottom: 1rem;
`;

export const InputLabel = styled.label`
    font-family: ${props => props.theme.typography.font};
    margin-bottom: 0;
    display: block;
    font-weight: 700;
    color: ${props => props.theme.colors.white};
    -webkit-transition: ${props => props.theme.transition};
    -o-transition: ${props => props.theme.transition};
    transition: ${props => props.theme.transition};
    margin-bottom: 0.5rem;
`;

export const TextArea = styled.textarea`
    font-family: ${props => props.theme.typography.font};
    font-weight: 400 !important;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    color: white;
    padding: 1rem;
    -webkit-transition: ${props => props.theme.transition};
    -o-transition: ${props => props.theme.transition};
    transition: ${props => props.theme.transition};
    -webkit-appearance: none;
    margin-bottom: 2rem;
    font-size: ${props => props.theme.typography.fontSize};
    box-sizing: border-box;
    border: 2px solid rgba(255, 255, 255, 0.2);
    resize: vertical;
    min-height: 125px;
    
    &:focus {
        color: ${props => props.theme.colors.white};
        border-color: white;

        
    }
`;

export const Image = styled.img`
    width: 100%;
    max-width: ${props => props.theme.queries.desktop};
    border-radius: 4px;
    overflow: hidden;
    background-color: ${props => props.theme.colors.gray};
    margin: 4rem auto;
`;

export const Label = styled.span`
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    display: block;
    color: white;
    margin-bottom: 1rem;
`;
