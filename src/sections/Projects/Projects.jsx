import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/hotel.svg';
import freshBurger from '../../assets/netflix.svg';
import hipsster from '../../assets/blog.svg';
import fitLift from '../../assets/uprent.svg';
import shopping from '../../assets/shopping.svg';
import wow from '../../assets/wow.png';
import uts from '../../assets/uts.png';
import car from '../../assets/dream.png';
import bank from '../../assets/bank.png';
import easy from '../../assets/easypay.png';
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
        <ProjectCard
          src={uts}
          link="https://www.behance.net/gallery/196914069/UTS-App"
          h3="UTS APP(Redesign)"
          p="Train Ticket Booking App"
        />
        <ProjectCard
          src={car}
          link="https://www.behance.net/gallery/197653217/Dream-Car-Rental-App"
          h3="DREAM CAR RENTAL APP"
          p="Rental Website"
        />
        <ProjectCard
          src={bank}
          link="https://www.behance.net/gallery/197259935/CreDig-Bank-Dashboard"
          h3="CreDig Bank Dashboard"
          p="Banking"
        />
        <ProjectCard
          src={easy}
          link="https://www.behance.net/gallery/197057631/EasyPay-App"
          h3="EasyPay APP"
          p="Payment APP"
        />
        <ProjectCard
          src={wow}
          link="https://www.behance.net/gallery/198236823/Wow-Rental"
          h3="WOW RENTAL"
          p="Rental Website"
          />
      </div>
    </section>
  );
}

export default Projects;
