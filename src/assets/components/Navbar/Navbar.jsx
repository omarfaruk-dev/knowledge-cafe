import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 border-b border-gray-200">
                <div className="flex-1">
                    <a className="text-xl text-blue-500 font-bold">Knowledge Cafe</a>
                </div>
                <div className="flex-none">

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className=" btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;