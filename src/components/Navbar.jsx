import { useState } from "react"
import { LOGO_IMG_1, LOGO_IMG_2, NAV_LINKS } from "../constants"
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const [isShow, setIsShow] = useState(false);
    const handleShow = () => {
        setIsShow(!isShow);
    }

    // { text: "Performance Score", path: "/performance-score" },
    // { text: "Get Started", path: "/get-started" }
    return (
        <nav className="sticky w-full bg-transparent">
            <div className="relative w-full flex justify-between items-center border-y px-5 sm:px-10 py-3">
                {/* logo and name */}
                <Link to="/">
                    {/* logo */}
                    <div className="w-10 h-10">
                        <img src={LOGO_IMG_1} alt="thrive" title="thrive" className="w-full h-full rounded-full block dark:hidden" />
                        <img src={LOGO_IMG_2} alt="thrive" title="thrive" className="w-full h-full rounded-full hidden dark:block" />
                    </div>
                </Link>

                {/* navlink */}
                <div className="">
                    <div className="md:hidden" onClick={handleShow}>
                        <i className='bx bx-menu text-3xl font-medium'></i>
                    </div>
                    <div className={`absolute w-full h-screen bg-red-300 top-0 left-0 z-50 p-10 ${isShow ? 'block' : 'hidden'}`}>
                        <div className="w-full flex justify-between items-center">
                            <div className="w-10 h-10">
                                <img src={LOGO_IMG_1} alt="thrive" title="thrive" className="w-full h-full rounded-full block dark:hidden" />
                                <img src={LOGO_IMG_2} alt="thrive" title="thrive" className="w-full h-full rounded-full hidden dark:block" />
                            </div>
                            <div onClick={handleShow}>
                                <i className='bx bx-x text-3xl font-medium' ></i>
                            </div>
                        </div>
                        <div>
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
                                <li className="font-medium cursor-pointer py-2 px-4 bg-yellow-500 rounded-md text-black hover:bg-yellow-400">
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
                                        <li key={index} className="font-medium cursor-pointer">
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