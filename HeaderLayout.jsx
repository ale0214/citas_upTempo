import { Outlet } from 'react-router-dom';
import imgLogo from '../images/logo.png';

const AuthLayout = () => {
    return (

        <>
            <header className='border-b-2 border-black ml-2'>
                <img src={imgLogo} alt='logo' className='w-40' />
            </header>
            <main className=''>
                
                <div className='m-4'>
                    <Outlet />
                </div>
                
            </main>
        </>

    );
}

export default AuthLayout;