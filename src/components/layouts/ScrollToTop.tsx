// src/components/layout/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // À chaque changement de 'pathname' (donc d'URL), on force le scroll en haut à gauche
        window.scrollTo(0, 0);
    }, [pathname]);

    // Ce composant ne s'affiche pas visuellement, on retourne null
    return null;
}