import styles from './SkillsStyles.module.css';
import html from '../../assets/html-5.svg';
import css from '../../assets/css-3.svg';
import bs from '../../assets/bootstrap.svg';
import js from '../../assets/java-script.svg';
import sql from '../../assets/sql-server.svg';
import php from '../../assets/php.svg';
import react from '../../assets/structure.svg';
import ts from '../../assets/ux.png';
import sass from '../../assets/ui.png';
import tcss from '../../assets/prototype.png';
import redux from '../../assets/wireframe.png';
import user from '../../assets/user.png';
import git from '../../assets/git.svg';
import figma from '../../assets/figma.svg';
import ps from '../../assets/photoshop.svg';
import xd from '../../assets/xd.svg';
import illustrator from '../../assets/illustrator.svg';
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
        <SkillList src={ts} skill="UX Research" />
        <SkillList src={sass} skill="UI Design" />
        <SkillList src={tcss} skill="Prototype" />
        <SkillList src={redux} skill="WireFrame" />
        <SkillList src={user} skill="User-Centered Design" />
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
