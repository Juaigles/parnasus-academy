"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from "./navbar.module.css"






function Navbar() {
    const t = useTranslations('Navbar');
  const [lang, setLang] = useState(null)

  useEffect(()=>{
    const storedLang = localStorage.getItem('locale')
    setLang(storedLang || 'es');
  },[])
  
    
  const [navbar, setNavbar] = useState(false);
  const [selectedLink, setSelectedLink] = useState(undefined);

  useEffect(() => {
    const storedSelectedLink = window.localStorage.getItem('selectedLink');
    if (storedSelectedLink !== null) {
      setSelectedLink(storedSelectedLink);
    } else {
      setSelectedLink(null);
    }
  }, []);

  useEffect(() => {
    if (selectedLink !== undefined && selectedLink !== null) {
      window.localStorage.setItem('selectedLink', selectedLink);
    }
  }, [selectedLink]);

  function handleClick(link) {
    setNavbar(!navbar);
    setSelectedLink(link);
  }

  // Si `t` aún no está definido, espera a que esté disponible antes de renderizar el contenido


  const links = [
    { link: '/about', name: t('link1') },
    { link: '/cursos', name: t('link2') },
    { link: '/contact', name:  t('link3')},
    { link: '/blog', name:  t('link4')},
  
  ];

  return (
    <div className={styles.navcontainer}>
      <div className=''>
        <Link href={"/"} onClick={() => setSelectedLink('logo')} className={styles.logo}>
          Parnasus Spanish Academy
        </Link>
      
      </div>

      <nav className={styles.navbar}>
        <div className={styles.links}>
          {links.map((link, index) => (
            <Link
              key={index}
              href={`/${lang}${link.link}`}
              onClick={() => handleClick(link)}
              className={styles.link}
            >
              {link.name}
            </Link>
          ))}
        </div>

      </nav>
    </div>
  );
}

export default Navbar;
