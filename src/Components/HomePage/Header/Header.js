import './Header.css';
import LogoHeader from './LogoHeader/LogoHeader';
import NavHeader from './NavHeader/NavHeader';
import BtnSupport from './BtnSupport/BtnSupport';
const Header=()=>{
    return(
        <header className='Header'>
            <LogoHeader/>
            <NavHeader/>
            <BtnSupport/>
        </header>
    )
}
export default Header;