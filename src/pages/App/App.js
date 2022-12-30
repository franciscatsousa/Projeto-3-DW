import { useRef } from 'react';
import { About } from '../../components/About';
import { CardGallery } from '../../components/CardGallery';
import { Hero } from '../../components/Hero';
import { Sidebar } from '../../components/Sidebar';

import { aboutData } from '../../data/about-data';

import { aboutMeImage } from '../../assets';

import styles from './App.module.scss';

const App = () => {
  const topRef = useRef();
  const workRef = useRef();
  const aboutRef = useRef();
  return (
    <>
      <div ref={topRef}></div>
      <Sidebar refs={[topRef, workRef, aboutRef]} />
      <Hero />
      <section ref={workRef} className={styles.workContainer}>
        <div>
          <span>projects</span>
          <span>just scroll</span>
        </div>
        <CardGallery />
      </section>
      <section ref={aboutRef} className={styles.aboutContainer}>
        <About
          title='about me'
          info={aboutData}
          imgSrc={aboutMeImage}
        />
      </section>
    </>
  );
}

export default App;
