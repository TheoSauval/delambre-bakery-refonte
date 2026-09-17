"use client";

import React, { useState } from 'react';

const linkClass = 'text-sm md:text-lg font-bold text-blanccasse hover:text-rougecerise transition ease-linear';
const mobileLinkClass = 'text-2xl font-bold text-blanccasse hover:text-rougecerise transition ease-linear';

const LEFT_LINKS = [
    { href: '/nos-cookies', label: 'NOS COOKIES' },
    { href: '/evenementiel', label: 'EVENEMENTIEL' },
    { href: '/notre-maison', label: 'NOTRE MAISON' },
];

const RIGHT_LINKS = [
    { href: '/nos-boutiques', label: 'NOS BOUTIQUES' },
    { href: '/presse', label: 'PRESSE' },
    { href: '/contact', label: 'CONTACT' },
];

const Header = ({ className = '' }) => {
    const [open, setOpen] = useState(false);

    return (
        <header className={`relative flex items-center justify-between gap-4 p-4 md:p-6 ${className}`}>
            <nav className="hidden flex-1 md:block">
                <ul className='flex justify-start gap-4 md:gap-8'>
                    {LEFT_LINKS.map((link) => (
                        <li key={link.href}><a href={link.href} className={linkClass}>{link.label}</a></li>
                    ))}
                </ul>
            </nav>

            <a href="/" className="shrink-0">
                <img src="/img/logo.webp" alt="Logo The Delambre Bakery" className='size-14 md:size-20' />
            </a>

            <nav className="hidden flex-1 md:block">
                <ul className='flex justify-end gap-4 md:gap-8'>
                    {RIGHT_LINKS.map((link) => (
                        <li key={link.href}><a href={link.href} className={linkClass}>{link.label}</a></li>
                    ))}
                </ul>
            </nav>

            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
                className="flex size-10 flex-1 flex-col items-end justify-center gap-1.5 md:hidden"
            >
                <span className={`h-0.5 w-7 bg-blanccasse transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`h-0.5 w-7 bg-blanccasse transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-7 bg-blanccasse transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>

            {open && (
                <nav className="absolute left-0 top-full w-full bg-foreground p-8 md:hidden">
                    <ul className="flex flex-col items-center gap-6">
                        {[...LEFT_LINKS, ...RIGHT_LINKS].map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className={mobileLinkClass} onClick={() => setOpen(false)}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
