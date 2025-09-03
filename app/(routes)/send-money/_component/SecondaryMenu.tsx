import React from 'react';
import Link from 'next/link';

const SecondaryMenu = () => {
    return (
        <div className="bg-[#cb943d]">
            <div className="container mx-auto px-4 flex justify-center">
                <ul className="flex items-center border-b-0">
                    <li className="nav-item">
                        <Link 
                            href="/send-money" 
                            className="inline-block px-6 py-3 text-white bg-white/20 rounded-t-md font-medium hover:bg-white/30 transition-colors"
                        >
                            Sending Money
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SecondaryMenu;
