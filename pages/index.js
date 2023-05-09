import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Keerthi</title>
      </Head>
      <main className={styles.mainContainer}>
        <section className={styles.intro}>
          <nav className={styles.introNavBar}>
            <Link href="#about" className={styles.aboutLink}>
              About
            </Link>
            <Link href="#experience" className={styles.experienceLink}>
              Experience
            </Link>
            <Link href="#education" className={styles.educationLink}>
              Education
            </Link>
            <Link href="#projects" className={styles.projectsLink}>
              Projects
            </Link>
            <Link href="#achievements" className={styles.achievementsLink}>
              Achievements
            </Link>
            <Link href="#contact" className={styles.contactLink}>
              Contact
            </Link>
          </nav>
          <div className={styles.introContent}>
            <div className={styles.introContentText}>
              Hi there! I'm Keerthi Sreenivas A passionate Data Science Graduate
              Student who loves using data to build stories and enhance
              products. I’m also a food Vlogger and Street Photographer ! I live
              in Rochester, NY
            </div>
            <Image
              src="/profile.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
