import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import data from "../../utiles/accordion";
import { MdOutlineArrowDropDown } from 'react-icons/md';

export default function Example() {
    return (
        <div className='flex justify-center w-9/12 items-center mx-auto pt-10 gap-4'>
        <div>
            <img src='./asset 9.png' className='border-8 border-gray rounded-t-[15rem]' width={600} height={600}/>
        </div>
        <div className='flex flex-col gap-4'>
        <div className='text-orange-500 font-semibold text-3xl'>
            Our Value
        </div>
        <div className='text-blue-900 font-bold text-4xl'>
            Value We Give to You
        </div>
        <div className='text-gray-400 break-words'>
        We always ready to help by providijng the best services for you.
We beleive a good blace to live can make your life better
        </div>
        <Accordion className='border-none' allowMultipleExpanded={false} preExpanded={[0]}>
            {
                data.map((card,index)=>{
                    return (
                        <AccordionItem className='mb-6 shadow-lg shadow-blue-500/20' key={index} id={index}>
                            <AccordionItemHeading className='rounded-lg'>
                                <AccordionItemButton className='flex items-center justify-between cursour-pointer p-6'>
                                    <span className='text-blue-600 w-[2rem] h-[2rem] bg-blue-300 rounded-lg flex justify-center items-center'> 
                                    {card.icon}
                                    </span>
                                    <span className='text-blue-900 font-semibold text-2xl flex justify-center items-center'>
                                    {card.heading}
                                    </span>
                                    <span className='text-blue-600 w-[2rem] h-[2rem] bg-blue-300 rounded-lg  flex justify-center items-center'>
                                    <MdOutlineArrowDropDown/>
                                    </span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='text-gray-400 break-words'>
                                    {card.detail}
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    );
                })
            }
        </Accordion>
        </div>
        </div>
    );
}
