import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/hotel.png';
import freshBurger from '../../assets/netflix.png';
import hipsster from '../../assets/blog.png';
import fitLift from '../../assets/uprent.png';
import shopping from '../../assets/shopping.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/PRSATHYA/Restaurant-Landing-Page"
          h3="FOODIE"
          p="Restaurant Website"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/PRSATHYA/Netfilx-Clone-using-react"
          h3="STREAMIT"
          p="Movie Website"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/PRSATHYA/Blog-Website-React"
          h3="BLOG"
          p="Blogging Website"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/PRSATHYA/Real-estate-website"
          h3="RENTUP"
          p="Housing website"
        />
        <ProjectCard
          src={shopping}
          link="https://github.com/PRSATHYA/Bonik-Ecommerice-Website-in-React"
          h3="BONIK"
          p="Shopping Website"
        />
      </div>
    </section>
  );
}

export default Projects;
