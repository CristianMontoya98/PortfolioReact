import styles from "./itemsMenuStyles.module.css";

/*ItemsMenu component, the elements of the menu wich are in the nav */
function ItemsMenu(props) {
  const { show, handleClickItem } = props;

  return (
    <div className={`${styles.menu} ${show ? styles.show : styles.hide}`}>
      <ul className={styles.menu__elements}>
        {/* Links to the diferent routes define with react router in the container component */}
        <a href="#home"><li onClick={() => handleClickItem()}>Home</li></a>

        <a href="#about">
          <li onClick={() => handleClickItem()}>About me</li>
        </a>

        <li onClick={() => handleClickItem()}>Skills</li>

        <li onClick={() => handleClickItem()}>Portfolio</li>

        <li onClick={() => handleClickItem()}>Contact</li>
      </ul>
    </div>
  );
}
export { ItemsMenu };
