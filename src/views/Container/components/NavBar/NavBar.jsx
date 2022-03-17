import { useState } from 'react';
import logo from '../../../../img/Logo.svg';
import { ButtonMenu } from './components/ButtonMenu/buttonMenu';
import styles from './navBarStyles.module.css'
function NavBar() {
    const [toggle,setToggle]  = useState(false);

    /* Function to change the state of the toggle state variable */
    const handleClickMenu = () => {
      setToggle(!toggle);
    };
    const handleClickItem = () => {
      setToggle(false);
    };
  
    return (
        <nav>
            <nav className={styles.nav}>
          <div className={styles.nav__top}>
          <img src={logo} alt="Cristian Montoya logo" />
          <ButtonMenu handleClickMenu={handleClickMenu} iconActive={toggle ? "fi fi-br-cross" : "fi fi-br-align-right"} />
          </div>
      {/* <ItemsMenu show={toggle} handleClickItem={handleClickItem}/> */}
      </nav>
        
        </nav>
    );
}
export { NavBar };