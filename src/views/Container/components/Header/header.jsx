import styles from "./headerStyles.module.css";
import down from '../../../../img/Down.svg';
function Header() {
  return (
    <section className={styles.header}>
      <div className={styles.header__filter}>
        <div className={styles.header__welcome}>
          <h1>Welcome to my portfolio</h1>
          <hr></hr>
          <h2>
            Cristian Montoya <span>Front-end</span> web developer
          </h2>
          <a href="#about">
            <button className={styles.goDown}>GO DOWN</button>
          </a>
          <img src={down} alt="Down graphic" />
        </div>
      </div>
    </section>
  );
}
export { Header };