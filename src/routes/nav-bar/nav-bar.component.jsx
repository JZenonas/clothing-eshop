import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './nav-bar.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg'

const NavBar = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to={'/'}>
                    <Logo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/sign-in'>
                        Sign-in
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default NavBar;