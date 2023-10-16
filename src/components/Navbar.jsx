import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const loggedInUser = false

    const handleLogout = () => {

    }

    const navLinks = <div className='space-x-3 font-bold text-[#023e7d]'>
        <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'border-b-2 border-[#f97316] text-[#f97316] ' : '')}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/equipmentsRental" className={({ isActive }) => (isActive ? 'border-b-2 border-[#f97316] text-[#f97316] ' : '')}>Event Equipments Rental</NavLink>
        </li>
        <li>
            <NavLink to="/brandActivation" className={({ isActive }) => (isActive ? 'border-b-2 border-[#f97316] text-[#f97316] ' : '')}>Brand Activation</NavLink>
        </li>
    </div>

    return (
        <div className="navbar shadow-md" style={{
            backgroundImage: `url(${"https://i.ibb.co/DggkLYB/bg.png"})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '110px',
        }}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <ul className="menu menu-horizontal px-1 font-bold text-[#023e7d] hidden lg:flex">
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'border-b-2 border-[#f97316] text-[#f97316] ' : '')}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/equipmentsRental" className={({ isActive }) => (isActive ? 'border-b-2 border-[#f97316] text-[#f97316] ' : '')}>Event Equipments Rental</NavLink>
                    </li>
                    <li>
                        <NavLink to="/brandActivation" className={({ isActive }) => (isActive ? 'border-b-2 border-[#f97316] text-[#f97316] ' : '')}>Brand Activation</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-center">
                <div className="flex items-center">

                    <Link to="/"> <img className='w-12 lg:w-20' src="https://i.ibb.co/pQwf6v6/logo1.png" alt="logo" /> </Link>
                    <h1 className="text-xl lg:text-6xl text-white font-rancho">Espresso Emporium</h1>
                </div>

            </div>
            <div className="navbar-end space-x-1 lg:space-x-2 mr-3 lg:mr-0">
                {
                    // loggedInUser ?
                    <>
                        <p className='text-sm lg:text-base'>{loggedInUser?.displayName}</p>
                        <img
                            className='rounded-full'
                            src={loggedInUser?.photoURL}
                            alt='profile'
                            height='34'
                            width='34'
                        />
                        <Link onClick={handleLogout} className='bg-[#f97316] px-1 lg:px-2 py-1 rounded-xl text-white text-sm lg:font-medium' to="/login">Log Out</Link>
                        <>
                            <Link className='bg-[#f97316] px-2 py-1 rounded-xl text-white font-medium' to="/login">Login</Link>
                            <Link className='bg-[#f97316] px-2 py-1 rounded-xl text-white font-medium' to="/register">Register</Link>
                        </>
                    </>
                    // :
                }
            </div>
        </div>
    );
};

export default Navbar;