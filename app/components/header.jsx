import React from 'react';

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 animate-fadeIn'>
            <img src="/img/logo.webp" alt="Logo de la marque" className='size-20' />
            <nav>
                <ul className='flex'>
                    <li className='m-4 text-lg text-blanccasse hover:text-foreground transition ease-linear'><a href="/">Nos Cookies</a></li>
                    <li className='m-4 text-lg text-blanccasse hover:text-foreground transition ease-linear'><a href="/about">A Propos</a></li>
                    <li className='m-4 text-lg text-blanccasse hover:text-foreground transition ease-linear'><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <button className='border hover:bg-blanccasse text-blanccasse hover:text-background transition ease-linear py-2 px-4 rounded-3xl'>
                <h2>Commander</h2>
            </button>
        </header>
    );
};

export default Header;