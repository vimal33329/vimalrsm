import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import mainPic from '@site/static/img/logo.png';


const FeatureList = [
  {
    title: 'Overview',
    description: (
      <>

Senior Cloud Specialist and Full Stack Lead with 8+ years of expertise in architecting scalable, enterprise-grade applications. Proven track record of leading high-performance engineering teams, implementing robust CI/CD pipelines, and delivering secure, high-volume cloud solutions for major banking clients. Expert in GCP cloud infrastructure, microservices architecture, and enhancing operational security. I leverage Generative AI, LLMs, and AI-assisted engineering tools, including Windsurf, to accelerate solution design, development, debugging, optimization, and documentation.


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
