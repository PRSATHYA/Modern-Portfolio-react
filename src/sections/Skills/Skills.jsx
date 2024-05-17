import styles from './SkillsStyles.module.css';
import html from '../../assets/html-5.png';
import css from '../../assets/css-3.png';
import bs from '../../assets/bootstrap.png';
import js from '../../assets/java-script.png';
import sql from '../../assets/sql-server.png';
import php from '../../assets/php.png';
import react from '../../assets/structure.png';
import ts from '../../assets/typescript.png';
import sass from '../../assets/sass.png';
import tcss from '../../assets/Tailwind CSS.png';
import redux from '../../assets/redux.png';
import git from '../../assets/git.png';
import figma from '../../assets/figma.png';
import ps from '../../assets/photoshop.png';
import xd from '../../assets/xd.png';
import illustrator from '../../assets/illustrator.png';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={html} skill="HTML" />
        <SkillList src={css} skill="CSS" />
        <SkillList src={bs} skill="Bootstrap" />
        <SkillList src={js} skill="JavaScript" />
        <SkillList src={sql} skill="SQL" />
        <SkillList src={php} skill="PHP" />
        
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={react} skill="React" />
        <SkillList src={ts} skill="Typescript" />
        <SkillList src={sass} skill="Sass" />
        <SkillList src={tcss} skill="Tailwind CSS" />
        <SkillList src={redux} skill="Redux" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={git} skill="Git" />
        <SkillList src={figma} skill="Figma" />
        <SkillList src={xd} skill="Adobe XD" />
        <SkillList src={ps} skill="Adobe PhotoShop" />
        <SkillList src={illustrator} skill="Adobe illustrator" />
      </div>
    </section>
  );
}

export default Skills;
