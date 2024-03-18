import { useState, useRef, useEffect } from "react"
import { LOGO_IMG_1, LOGO_IMG_2, NAV_LINKS } from "../constants"
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const ref = useRef(null);
    const [isShow, setIsShow] = useState(false);
    const handleShow = () => {
        setIsShow(!isShow);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsShow(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="fixed z-50 w-full">
            <div className="w-full flex justify-between items-center border-b px-5 sm:px-10 py-3">
                {/* logo and name */}
                <Link to="/">
                    {/* logo */}
                    <div className="w-10 h-10">
                        <img src={LOGO_IMG_1} alt="thrive" title="thrive" className="w-full h-full rounded-full block dark:hidden" />
                        <img src={LOGO_IMG_2} alt="thrive" title="thrive" className="w-full h-full rounded-full hidden dark:block" />
                    </div>
                </Link>

                {/* navlink */}
                <div className="" ref={ref}>
                    <div className="md:hidden text-white" onClick={handleShow}>
                        {
                            isShow
                                ? <i className='bx bx-x text-3xl font-medium' ></i>
                                : <i className='bx bx-menu text-3xl font-medium'></i>
                        }
                    </div>
                    <div className={`absolute w-3/5 h-screen bg-white top-0 left-0 z-50 px-4 py-5 ${isShow ? '-translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                        <div className="w-full flex justify-between items-center">
                            <div className="w-10 h-10">
                                <img src={LOGO_IMG_1} alt="thrive" title="thrive" className="w-full h-full rounded-full block dark:hidden" />
                                <img src={LOGO_IMG_2} alt="thrive" title="thrive" className="w-full h-full rounded-full hidden dark:block" />
                            </div>
                            {/* <div onClick={handleShow}>
                                <i className='bx bx-x text-3xl font-medium' ></i>
                            </div> */}
                        </div>
                        <div className="mt-10">
                            <ul className="flex flex-col items-start gap-3">
                                {
                                    NAV_LINKS.map((navlink, index) => {
                                        return (
                                            <li key={index} className="font-medium cursor-pointer">
                                                <NavLink to={navlink.path}>{navlink.text}</NavLink>
                                            </li>
                                        )
                                    })
                                }
                                <li className="font-medium cursor-pointer py-2 px-3 bg-yellow-500 rounded-md text-black hover:bg-yellow-400 text-base md:text-xl">
                                    <NavLink to='/performance-score'>Performance Score</NavLink>
                                </li>
                                <li className="font-medium cursor-pointer py-2 px-4 bg-blue-500 rounded-md text-white hover:bg-blue-400">
                                    <NavLink to='/get-started'>Get Started</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex items-center justify-evenly gap-3">
                            {
                                NAV_LINKS.map((navlink, index) => {
                                    return (
                                        <li key={index} className="font-medium cursor-pointer text-white">
                                            <NavLink to={navlink.path}>{navlink.text}</NavLink>
                                        </li>
                                    )
                                })
                            }
                            <li className="font-medium cursor-pointer py-2 px-4 bg-yellow-500 rounded-md text-black hover:bg-yellow-400">
                                <NavLink to='/performance-score'>Performance Score</NavLink>
                            </li>
                            <li className="font-medium cursor-pointer py-2 px-4 bg-blue-500 rounded-md text-white hover:bg-blue-400">
                                <NavLink to='/get-started'>Get Started</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar