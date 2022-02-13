import styled, { css } from 'styled-components';

export const NavContainer = styled.div`
    position: fixed;
	left: 0;
    right: 0;
    top: 0;
    background: ${props => props.theme.colors.black};
    z-index: 10;
    border-bottom: 1px solid #212121;

    @media (max-width: ${props => props.theme.queries.desktop}) {
        position: relative;
	}
`;

export const Nav = styled.div`
    height: 100px;
    width: 100%;
    max-width: ${props => props.theme.queries.desktop};
	margin: 0 auto;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	   -ms-flex-pack: justify;
    justify-content: space-between;
	-webkit-box-align: center;
	   -ms-flex-align: center;
          align-items: center;
`

export const DesktopLogo = styled.span`
    display: inline;
`;

export const MobileLogo = styled.span`
    display: none;
`;

export const NavLogo = styled.a`
    cursor: pointer;
    -webkit-transition: ${props => props.theme.transition};
         -o-transition: ${props => props.theme.transition};
            transition: ${props => props.theme.transition};
    z-index: 2;
    color: white;
    font-weight: 500;

    &:hover {
        -webkit-transform: scale(1.05); 
            -ms-transform: scale(1.05);
                transform: scale(1.05);
    }

    &:active {
        -webkit-transform: scale(0.98); 
            -ms-transform: scale(0.98);
                transform: scale(0.98);
    }



    @media (max-width: ${props => props.theme.queries.mobile}) {
        ${MobileLogo} {
            display: inline;
        }

        ${DesktopLogo} {
            display: none;
        }
    }
}`;

export const SubNavMenu = styled.div`
    display: flex;
`

export const SubNavMenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: flex;
`

export const SubNavMenuListItem = styled.li`
    display: block;
    position: relative;
    margin-left: 2rem;

    a {
        display: block;
        position: relative;
        color: ${props => props.theme.body.text} !important;
        text-decoration: none;
        letter-spacing: 2px;
        font-weight: 500;
        font-size: 14px;
        text-transform: uppercase;

        &:hover,
        :focus,
        :active {
            color: ${props => props.theme.body.headers} !important;
    }

    ${props => props.active &&
        css`
            color: ${props => props.theme.body.headers} !important;
        `
    }
`