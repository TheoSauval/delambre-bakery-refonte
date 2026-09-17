"use client";

import React, { useEffect, useState } from 'react';

const linkClass = 'text-sm md:text-lg font-bold text-blanccasse hover:text-rougecerise transition ease-linear';

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

const ALL_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];

const Header = ({ className = '' }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

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
                onClick={() => setOpen(true)}
                aria-label="Ouvrir le menu"
                className="flex size-10 flex-1 flex-col items-end justify-center gap-1.5 md:hidden"
            >
                <span className="h-0.5 w-7 bg-blanccasse" />
                <span className="h-0.5 w-7 bg-blanccasse" />
                <span className="h-0.5 w-7 bg-blanccasse" />
            </button>

            {open && (
                <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-foreground px-6 pt-4 pb-10 md:hidden">
                    <div className="flex items-center justify-between">
                        <a href="/" onClick={() => setOpen(false)} className="shrink-0">
                            <img src="/img/logo.webp" alt="Logo The Delambre Bakery" className="size-14" />
                        </a>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            aria-label="Fermer le menu"
                            className="flex size-10 items-center justify-center text-3xl leading-none text-blanccasse"
                        >
                            &times;
                        </button>
                    </div>

                    <nav className="mt-16 flex-1">
                        <ul className="flex flex-col gap-7">
                            {ALL_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="text-3xl font-bold uppercase text-blanccasse transition ease-linear hover:text-rougecerise"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <a
                        href="https://www.instagram.com/delambrebakery/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-10 text-sm font-bold uppercase tracking-wide text-blanccasse/70 transition ease-linear hover:text-rougecerise"
                    >
                        Instagram
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
