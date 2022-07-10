import React from "react";
import styles from "./SkillsCardsStyles.module.css";
const SkillsCard = (props) => {
    const { skills, title } = props;

    return (
        <div className={styles.skillsCard}>
            <h3 className={styles.skillsCard__title}>{title}</h3>
            {skills.map((skill, index) => (
                <div key={index} className={styles.skillsCard__skill}>
                    <img src={skill.img} alt={skill.name} />
                    <h3 className={styles.skillsCard__text}>{skill.name}</h3>
                </div>
            ))}
        </div>
    );
};

export { SkillsCard };
