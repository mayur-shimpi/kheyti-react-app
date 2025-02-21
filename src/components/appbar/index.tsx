import { useState } from 'react';
import { motion } from 'framer-motion';
import { PrimaryButton } from '../buttons';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const menuItems = [
    { id: 0, name: 'About Us', path: '#' },
    { id: 1, name: 'Our Solution', path: '#' },
    { id: 2, name: 'Partners and Supporters', path: '#' },
    { id: 3, name: 'Join Us', path: '#' },
    { id: 4, name: 'Resources', path: '#' }
];

const Appbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='w-full cronosMedium absolute top-0 left-0 z-10 bg-transparent text-center py-4 px-5 lg:px-10'>
            <div className='bg-[#00000082] lg:max-w-7xl backdrop-blur-md container mx-auto rounded-full px-3'>
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <div>
                        <img
                            src='./assets/common/logo-light.svg'
                            alt='Logo'
                            width={200}
                            height={80}
                            className='h-[50px] w-[100px] lg:h-[60px] lg:w-[120px] lg:ml-2'
                        />
                    </div>

                    {/* Desktop Menu */}
                    <nav className='hidden md:flex flex-grow justify-center'>
                        <ul className='flex items-center space-x-6'>
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <a href={item.path} className='text-white font-cronosLight text-lg px-3 py-3 whitespace-nowrap hover:text-primary400'>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Contact Button */}
                    <div className='hidden md:block'>
                        <PrimaryButton name='Contact Us' />
                    </div>

                    {/* Mobile Menu Button - Only Visible in Mobile View */}
                    <div className='md:hidden'>
                        <button onClick={() => setMenuOpen(!menuOpen)} className='text-white'>
                            {menuOpen ? <XMarkIcon className='w-7 h-7' /> : <Bars3Icon className='w-7 h-7' />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu with Framer Motion */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className='md:hidden absolute top-full left-0 w-full px-6'
                >
                    <div className='w-full pl-3 rounded-lg bg-[#00000082] backdrop-blur-md text-left pt-4 pb-10'>
                        <ul className='space-y-2'>
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <a href={item.path} className='text-white text-lg block px-4 py-2 hover:text-primary400'>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className='mt-4 pl-3'>
                            <PrimaryButton name='Contact Us' />
                        </div>
                    </div>

                </motion.div>
            )}
        </header>
    );
};

export default Appbar;
