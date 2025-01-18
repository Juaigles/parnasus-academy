"use client";

import { useEffect } from 'react';
import { setLocale, getLocale } from '../middleware/sotrage';

export default function LocaleProvider({ locale }) {
    useEffect(() => {
        // Guarda el idioma en localStorage solo en el cliente
        setLocale(locale);
    }, [locale]);

    return null; // Este componente no necesita renderizar nada
}
