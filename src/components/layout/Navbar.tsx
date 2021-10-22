import {Logo, NavbarStyled,Name} from './../../styles/LayoutStyles'
import LogoImg from './../../../public/aerolab-logo.svg'

const Navbar: React.FC = () => (
    <NavbarStyled>
        <Logo
            src={LogoImg}
            alt="Logo"
        />
        <Name>Jhon Kite</Name>
    </NavbarStyled>
)

export default Navbar;