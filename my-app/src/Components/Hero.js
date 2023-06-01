import React from "react"; 
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';

const Hero = () =>{
    return(
        <div className="bg-black text-white py-5 ">
        <div className="flex w-9/12 mx-auto justify-between items-center">
            <div className="flex flex-col gap-4 relative">
                <div className="bg-orange-600 w-[2rem] h-[2rem] rounded-full absolute left-[12rem]"/>
                <h1 className="text-5xl z-10 ">Discover <br/> most Suitable <br/> Property</h1>
                <div className="flex flex-col">
                    <span className="text-gray-400">Find a variety of properties that suit you very easilty</span>
                    <span className="text-gray-400">Forget all difficulties in finding a residence for you</span>
                </div>
                <div className=" flex bg-white items-center mr-auto py-2 px-3 rounded-lg space-between">
                    <HiLocationMarker color="blue" size={25}/>
                    <input type="text" className="border-hidden border-white"/>
                    <button className="color rounded-md px-1 py-1">
                        Search
                    </button>
                </div>
                <div className="flex gap-4">
                    <div>
                        <div className="flex items-center">
                        <CountUp start={8800} end={9000} duration={4} className="text-4xl"/>
                        <span className="text-2xl text-yellow-600 font-bold">+</span>
                        </div>
                    <p className="text-gray-500">Primium Product</p>
                    </div>
                    <div>
                        <div className="flex items-center">
                        <CountUp start={1000} end={2000} duration={4} className="text-4xl"/>
                        <span className="text-2xl text-yellow-600 font-bold">+</span>
                        </div>
                    <p className="text-gray-500">Happy Customers</p>
                    </div>
                    <div>
                        <div className="flex items-center">
                        <CountUp start={10} end={38} duration={8} className="text-4xl"/>
                        <span className="text-2xl text-yellow-600 font-bold">+</span>
                        </div>
                    <p className="text-gray-500">Awards Winning</p>
                    </div>
                </div>
            </div>

            <div>
                <img src="asset 1.png" className="w-[30rem] h-[35rem] overflow-hidden rounded-t-[15rem] border-8 border-solid border-white"/>
            </div>
        </div>
        </div>
    );
}

export default Hero;