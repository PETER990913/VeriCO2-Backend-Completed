import React from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useDispatch } from 'react-redux';
import { setTab } from '../redux/actions/index';

function Sidebar({ sideBarFlag, setSideBarFlag }) {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const cookies = new Cookies();
    const token = cookies.get('token')
    return (
        <div className={sideBarFlag ? 'Sidebar show' : 'Sidebar'} onClick={(e) => { e.stopPropagation() }}>
            <div className='item' onClick={() => {
                setSideBarFlag(false)
                dispatch(setTab(0))
                navigate('/')
            }}>Home</div>
            <div className='item' onClick={() => {
                setSideBarFlag(false)
                dispatch(setTab(1))
                navigate('/about')
            }}>About Us</div>
            <div className='item' onClick={() => {
                setSideBarFlag(false);
                dispatch(setTab(2))
                navigate('/calculation')                
            }}>Calculation & Display</div>
            <div className='item' onClick={() => {
                setSideBarFlag(false);
                dispatch(setTab(3))
                navigate('/contact-us')
            }}>Contact Us</div>
            {
                token ?
                    <div className='item' onClick={() => {
                        cookies.set('token', null, { path: '/' });
                        navigate('/login')
                    }}>Logout</div>
                    :
                    <>
                        <div className='item' onClick={() => {
                            setSideBarFlag(false);
                            navigate('/signup')
                        }}>Sign Up</div>
                        <div className='item' onClick={() => {
                            setSideBarFlag(false);
                            navigate('/login')
                        }}>Log In</div>
                    </>
            }

        </div>
    )
}

export default Sidebar