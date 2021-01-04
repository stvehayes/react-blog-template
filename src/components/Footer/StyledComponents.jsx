import styled, { css } from 'styled-components';

export const FooterContainer = styled.footer`
    width: 100%;
    margin-top: 6rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    border-top: 1px solid #212121;
}`;

export const FooterLayout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${props => props.theme.queries.mobile}) {
        flex-direction: column-reverse;
    }

    ${props => props.center &&
        css`
            justify-content: center;
        `
    }
`;

export const FooterCopyright = styled.div`
    p {
        margin: 0;
    }

    @media (max-width: ${props => props.theme.queries.mobile}) {
        p {
            margin-top: 1rem;
        }
    }
`;
