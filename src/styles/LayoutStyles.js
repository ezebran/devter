import styled from 'styled-components'
import Image from 'next/image'

export const Logo = styled(Image)`
  /*background:red;*/
`;

export const NavbarStyled = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
`;

export const Name = styled.h2`
    font-size:24px;
    color:#616161;
    letter-spacing:-0.15px;
    line-height:48px;
`;