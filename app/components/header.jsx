import React from 'react';

const linkClass = 'text-sm md:text-lg font-bold text-blanccasse hover:text-rougecerise transition ease-linear';

const Header = ({ className = '' }) => {
    return (
        <header className={`flex items-center justify-between gap-4 p-4 md:p-6 ${className}`}>
            <nav className="flex-1">
                <ul className='flex justify-start gap-4 md:gap-8'>
                    <li><a href="/nos-cookies" className={linkClass}>NOS COOKIES</a></li>
                    <li><a href="/evenementiel" className={linkClass}>EVENEMENTIEL</a></li>
                    <li><a href="/notre-maison" className={linkClass}>NOTRE MAISON</a></li>
                </ul>
            </nav>
            <a href="/" className="shrink-0">
                <img src="/img/logo.webp" alt="Logo The Delambre Bakery" className='size-14 md:size-20' />
            </a>
            <nav className="flex-1">
                <ul className='flex justify-end gap-4 md:gap-8'>
                    <li><a href="/nos-boutiques" className={linkClass}>NOS BOUTIQUES</a></li>
                    <li><a href="/presse" className={linkClass}>PRESSE</a></li>
                    <li><a href="/contact" className={linkClass}>CONTACT</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;