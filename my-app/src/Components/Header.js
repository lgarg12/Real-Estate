import React from "react";

const Header = () => {
    return (
        <div className="bg-[rgb(0,0,0)] py-3">
            <div className="w-9/12 flex justify-between  text-white items-center mx-auto">
                <img src="./asset 0.png" alt="logo" width={100}/>

                <div className="flex gap-4 items-center">
                    <a href="">Residencies</a>
                    <a href="">Our Value</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>
                    <button className=" rounded-lg px-4 py-2 color">
                        <a href="">Contact</a>
                    </button> 
                </div>
            </div>
        </div>
    );
}

export default Header;