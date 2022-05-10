import styles from "./itemsMenuStyles.module.css";
import { Link } from "react-router-dom";
/*ItemsMenu component, the elements of the menu wich are in the nav */
function ItemsMenu(props) {
  const { show, handleClickItem } = props;

  return (
    <div className={`${styles.menu} ${show ? styles.show : styles.hide}`}>
      <ul className={styles.menu__elements}>
        <li onClick={() => handleClickItem()}>
          {/* Links to the diferent routes define with react router in the container component */}
          Home
        </li>

        <li onClick={() => handleClickItem()}>About me</li>

        <li onClick={() => handleClickItem()}>Skills</li>

        <li onClick={() => handleClickItem()}>Portfolio</li>

        <li onClick={() => handleClickItem()}>Contact</li>
      </ul>
    </div>
  );
}
export { ItemsMenu };
