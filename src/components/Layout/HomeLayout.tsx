import React, { FC,useState,useEffect } from 'react';
import LeftNavBar from '../navbar/LeftNavBar';

const HomeLayout: FC = ({children}) :JSX.Element => {
    
    return (
        <>
        <div className="grid grid-cols-5">
            <div>
                <LeftNavBar/>
            </div>
            <div className='col-span-5 xl:col-span-4 h-screen'>
                {children}
            </div>
        </div>
        </>
    )
}

export default HomeLayout
