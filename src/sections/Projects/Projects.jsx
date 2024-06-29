import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/hotel.svg';
import freshBurger from '../../assets/netflix.svg';
import hipsster from '../../assets/blog.svg';
import fitLift from '../../assets/uprent.svg';
import shopping from '../../assets/shopping.svg';
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
        <pre>
        <ProjectCard
          src={shopping}
          link="https://github.com/PRSATHYA/Bonik-Ecommerice-Website-in-React"
          h3="BONIK"
          p="Shopping Website"
        />
        <ProjectCard
          src={shopping}
          link="https://github.com/PRSATHYA/Bonik-Ecommerice-Website-in-React"
          h3="BONIK"
          p="Shopping Website"
        />
        <ProjectCard
          src={shopping}
          link="https://github.com/PRSATHYA/Bonik-Ecommerice-Website-in-React"
          h3="BONIK"
          p="Shopping Website"
        />
        <ProjectCard
          src={shopping}
          link="https://github.com/PRSATHYA/Bonik-Ecommerice-Website-in-React"
          h3="BONIK"
          p="Shopping Website"
        />
        <ProjectCard
          src={shopping}
          link="https://github.com/PRSATHYA/Bonik-Ecommerice-Website-in-React"
          h3="BONIK"
          p="Shopping Website"
        />
          </pre>
      </div>
    </section>
  );
}

export default Projects;
