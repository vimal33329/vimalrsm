import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import mainPic from '@site/static/img/logo.png';


const FeatureList = [
  {
    title: 'Overview',
    description: (
      <>

Results-driven and highly skilled Node.js and Express web developer with 6+ years of experience. Expertise in designing and developing robust, scalable, and secure web applications. Proficient in front-end and back-end technologies, including HTML5, CSS3, JavaScript, and various databases. Strong problem-solving abilities and a collaborative team player with excellent communication skills.


      </>
    ),
  }
];

function Feature({ title, description}) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
				<img src={mainPic} alt="Main Picture" />
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
