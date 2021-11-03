import { Logo, NavbarStyled, Name, NavActions, Coins, MyCart, HistoryLength } from '@/styles/LayoutStyles'
import LogoImg from '@/public/aerolab-logo.svg'
import Image from 'next/image'
import CoinImg from '@/public/icons/coin.svg'
import CartImg from '@/public/icons/buy-blue.svg'
import Link from 'next/link'

const Navbar: React.FC = () => (
    <NavbarStyled>
        <Logo
            src={LogoImg}
            alt="Logo"
        />
        <NavActions>
            <Name>Hi, Jhon Kite!</Name>
            <Coins>
                <Image src={CoinImg} alt="Coin icon" />
                1400
            </Coins>
            <Link href="#">
                <MyCart>
                    <Image
                        src={CartImg}
                        alt="Cart icon"
                        width={34}
                        height={34}
                    />
                    <HistoryLength>
                        0
                    </HistoryLength>
                </MyCart>
            </Link>
        </NavActions>
    </NavbarStyled>
)

export default Navbar;