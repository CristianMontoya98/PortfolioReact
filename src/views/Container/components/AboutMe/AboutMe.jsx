import styles from "./AboutMeStyles.module.css";
import rocket from "../../../../img/rocket.svg";
function AboutMe() {
  
  return (
    <section className={styles.aboutMe} id="about">
      <div className={styles.aboutText}>
        <h2
          className={`${styles.aboutText__title} ${styles.aboutText__title_dark}`}
        >
          About me
        </h2>
        <h3 className={styles.aboutText__subtitle}>
          Hi I'm Cristian, front-end web developer
        </h3>
        <p className={styles.aboutText__text}>
          I am passionate about technology in general, I have had a great
          approach to web development when I discovered how amazing this world
          is, so I decided to become a front-end web developer, in this way I
          have been able to learn and implement modern web technologies, let's
          do amazing things together.
        </p>
        <a
          href="https://drive.google.com/file/d/1AdPEVq_S0AV_1owpIJN2Fh3ZRUIGojxi/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className={styles.about__button}>
            <span>
              <i className="fi fi-br-download"></i>
            </span>
            Download CV
          </button>
        </a>
      </div>
      <div className={styles.aboutImage}>
        <img src={rocket} alt="Rocket" />
      </div>
    </section>
  );
}
export { AboutMe };
