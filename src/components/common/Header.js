import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from './tmdb.svg';

function Header(props) {

  return (
    <Navbar  expand="md" className={styles.navbar}>
      <Navbar.Brand href="/" className={styles.logo}>
          <Logo />
      </Navbar.Brand>
    </Navbar>
  );
}
export default Header;
