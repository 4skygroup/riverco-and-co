import React from "react";
import { Link } from "react-router-dom";
import { pages, services, social } from "./footer/FooterData";

const FooterColumn = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => (
    <div className="flex flex-col gap-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex flex-col gap-4 text-sm md:text-base">{children}</div>
    </div>
);

const FooterLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => {
    const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel'); //[cite: 1]

    const baseClasses = `text-gray-300 hover:text-white transition-colors duration-200 ${className}`;

    if (isExternal) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
                {children}
            </a>
        );
    }

    return (
        <Link to={href} className={baseClasses}>
            {children}
        </Link>
    );
};

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white pt-20 pb-8 px-6 md:px-16 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">

                {/* Grille Principale */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

                    {/* Colonne 1 : Logo */}
                    <div className="lg:col-span-2 flex items-start lg:items-center">
                        <Link to="/" aria-label="Riverco - Accueil">
                            <h2 className="text-3xl lg:text-4xl font-black tracking-wide">
                                RIVERCO & CO
                            </h2>
                        </Link>
                    </div>

                    {/* Colonne 2 : Page */}
                    <FooterColumn title="Page">
                        {pages.map((link) => (
                            <FooterLink key={link.href} href={link.href}>
                                {link.label}
                            </FooterLink>
                        ))}
                    </FooterColumn>

                    {/* Colonne 3 : Services */}
                    <FooterColumn title="Services">
                        {services.map((link) => (
                            <FooterLink key={link.href} href={link.href}>
                                {link.label}
                            </FooterLink>
                        ))}
                    </FooterColumn>

                    {/* Colonne 4 : Contact (Mixte) */}
                    <FooterColumn title="Contact">
                        <FooterLink href="mailto:contact@rivercoandco.com">
                            contact@rivercoandco.com
                        </FooterLink>
                        <FooterLink href="tel:+33600000000">
                            +33 6 00 00 00 00
                        </FooterLink>
                        <span className="text-gray-300">Paris, France</span>

                        {/* Réseaux Sociaux */}
                        <div className="flex flex-col gap-4 mt-1">
                            {social.map((s) => (
                                <FooterLink
                                    key={s.label}
                                    href={s.href}
                                    className="flex items-center gap-2 group"
                                >
                                    {s.icon}
                                    {s.label}
                                </FooterLink>
                            ))}
                            <FooterLink href="https://linkedin.com">
                                LinkedIn
                            </FooterLink>
                        </div>
                    </FooterColumn>
                </div>

                {/* COPYRIGHT */}
                <div className="pt-8 flex justify-center items-center">
                    <p className="text-gray-400 text-sm">
                        © 2026 Riverco & Co
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;