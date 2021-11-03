import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const Logo = styled(Image)`
  padding: 0px;
`;

export const NavbarStyled = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 3%;
    box-shadow: 2px 2px 4px 0 #0000001a;
`;

export const Name = styled.h2`
    font-size:24px;
    color:#616161;
    letter-spacing:-0.15px;
    line-height:48px;
`;

export const NavActions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Coins = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #ededed;
    padding: 0.25em 0.75em;
    border-radius: 100px;
    margin: 0 1em;
    cursor: pointer;
    border:none;
    font-size: 1.5em;
    color: #616161;
    transition: all ease-in-out .3s;
    &:hover{
      background: #e7e7e7;
    }
`;

export const MyCart = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;


export const HistoryLength = styled.span`
  margin-left: 0.25em;
  color: #616161;
  font-size: 1.3em;
`;