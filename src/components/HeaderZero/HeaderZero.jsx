import { Link } from 'react-router-dom'
import Arrow from '../../images/Arrow.svg';
import Logo from '../../images/Logo.png';


const HeaderZero = () => {
    return (
        <header>
            <div><Link to='/'> <img src={Arrow} alt="Arrow" /> </Link></div>
            <Link to='/' style={{ textDecoration: 'none' , color: 'black'}}>
                <div className='header__name' id='LogoName'>
                    <img src={Logo} alt="Logo" />
                </div>
            </Link>
        </header>
    );
};

export default HeaderZero;