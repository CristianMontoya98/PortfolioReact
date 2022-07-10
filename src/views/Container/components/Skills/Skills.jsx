import React from "react";
import styles from "./skillsStyles.module.css";
import html5 from "../../../../img/html.svg";
import css from "../../../../img/css.svg";
import js from "../../../../img/javascript.svg";
import react from "../../../../img/react.svg";
import git from "../../../../img/git.svg";
import github from "../../../../img/github-fill.svg";
import figma from "../../../../img/figma.svg";
import mongo from "../../../../img/mongo.svg";
import mysql from "../../../../img/mysql.svg";
import sqlServer from "../../../../img/microsoftsqlserver.svg";
import postgresql from "../../../../img/postgresql.svg";
import { SkillsCard } from "./components/SkillsCard/SkillsCard";

const Skills = () => {
    let frontSkills = [
        {
            img: html5,
            name: "Html5",
        },
        {
            img: css,
            name: "Css3",
        },
        {
            img: js,
            name: "Javascript",
        },
        {
            img: react,
            name: "React js",
        },
    ];
    let versionControlSkills = [
        {
            img: git,
            name: "Git",
        },
        {
            img: github,
            name: "Github",
        },
    ];
    let uiSkills = [
        {
            img: figma,
            name:"Figma"
        }
    ]
    let databasesSkills = [
        {
            img: mongo,
            name:"Mongo DB"
        },
        {
            img: mysql,
            name:"MySQL"
        },
        {
            img: sqlServer,
            name:"SQL Server"
        },
        {
            img: postgresql,
            name:"PostgreSQL"
        }
    ]
    return (
        <section className={styles.skills__container} id="skills">
            <h2>Skills</h2>
            <SkillsCard skills={frontSkills} title="Front-end" />
            <SkillsCard skills={versionControlSkills} title="Version control" />
            <SkillsCard skills={uiSkills} title="UX/UI Design" />
            <SkillsCard skills={databasesSkills} title="Databases" />
        </section>
    );
};

export { Skills };
