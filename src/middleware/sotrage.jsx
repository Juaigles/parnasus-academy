"use client";

export const setLocale = (locale) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('locale', locale);
    }
};

export const getLocale = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('locale');
    }
    return null;
};
