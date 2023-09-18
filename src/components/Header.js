import React from 'react'
// import headerLine from '../assets/images/header-line.png'
import headerLine from '../assets/images/Group 16.png'
import headerLogo from '../assets/images/header-logo.png'
import headerLogoLineMobile from '../assets/images/header-logo-line-mobile.png'
import { ReactComponent as MenuIcon } from '../assets/svg/menu.svg'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { setTab } from '../redux/actions/index';

function Header({ sideBarFlag, setSideBarFlag }) {
    const tab = useSelector(state => state.tabId)
    const dispatch = useDispatch()

    const navigate = useNavigate();
    const cookies = new Cookies();
    const token = cookies.get('token')
    // const [tab, setTab] = useState(0)
    return (
        <div className='Header'>
            <div className='white-area'>
                <div className='buttons'>
                    {
                        token ?
                            <div className='button' onClick={() => {
                                cookies.set('token', null, { path: '/' });
                                navigate('/login')
                            }}>Logout</div>
                            :
                            <>
                                <div className='button' onClick={() => navigate('/login')}>Login</div>
                                <div className='button' onClick={() => navigate('/signup')}>Sign up</div>
                            </>
                    }
                </div>
                <div className='menu-button' onClick={(e) => {
                    e.stopPropagation();
                    setSideBarFlag(!sideBarFlag);
                }}>
                    <MenuIcon />
                </div>
            </div>
            <div className='header-logo-line'>
                <img src={headerLine} alt="Header Line" className='header-line' />
                <img src={headerLogo} alt="Header Logo" className='header-logo' onClick={() => {dispatch(setTab(0)); navigate('/')}} />
                <div className='buttons'>
                    <span className={tab===1?'selected':''} onClick={() => {dispatch(setTab(1)); navigate('/about')}}>About Us</span>
                    <span className={tab===2?'selected':''} onClick={() => {dispatch(setTab(2)); navigate('/calculation')}}>Calculation & Display</span>
                    <span className={tab===3?'selected':''} onClick={() => {dispatch(setTab(3)); navigate('/contact-us')}}>Contact Us</span>
                    <span className={tab===4?'selected':''} onClick={() => {dispatch(setTab(4)); navigate('/')}}>Testimonials</span>
                    <span className={tab===5?'selected':''} onClick={() => {dispatch(setTab(5)); navigate('/')}}>Articles</span>
                </div>
            </div>
            <div className='mobile-header'>
                <img src={headerLogoLineMobile} alt="Header Logo Line Mobile" className='header-logo-line-mobile' />
            </div>
            <Sidebar sideBarFlag={sideBarFlag} setSideBarFlag={setSideBarFlag} />
        </div>
    )
}

export default Header