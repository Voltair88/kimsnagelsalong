import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { Nav } from '../Styled';
import Logo from '../Components/Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80 && window.innerWidth > 768) setScroll(true);
      else setScroll(false);
    });
  }, []);

  return (
    <Nav className={scroll ? 'scrolled' : 'notScrolled'}>
      <Hamburger
        toggled={isOpen}
        toggle={setIsOpen}
        onToggle={() => {
          if (isOpen) {
            setIsOpen(false);
          } else {
            setIsOpen(true);
          }
        }}
      />
      {isOpen && (
        <div className='hammenu'>
          <NavLink to='/pricelist'>Pricelist</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
      )}
      <Logo />
      <div className='navlinks'>
        <NavLink to='/pricelist'>Pricelist</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </div>
    </Nav>
  );
}
