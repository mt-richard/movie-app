
import React from 'react';
import userImg from '../images/user.png';

const Header = () =>{
    return(
        <div className="text-gray-200">
            <div className="header flex justify-between w-full bg-gray-800 py-2 px-4">
                <div className='item-center'>
                    <span className='text-xl font-black'>MOVIES <span className="text-red-400">DEB</span> </span>
                </div>
                <div>
                    <img src={userImg} alt="" srcset="" className="w-10 h-10"/>
                </div>
            </div>
        </div>
    )
}

export default Header;