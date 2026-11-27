import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import profilePic from '@site/static/img/logo.png';
import {
  ArrowIcon,
  BriefcaseIcon,
  CloudIcon,
  CodeIcon,
  DownloadIcon,
  GitHubIcon,
  LayersIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
  PipelineIcon,
  RocketIcon,
  ServerIcon,
  SparkIcon,
  YouTubeIcon,
} from '@site/src/components/Icons';

import styles from './index.module.css';

const ROLES = [
  'Cloud Specialist on GCP',
  'Full Stack Lead',
  'NestJS microservices architect',
  'Mentor and code reviewer',
  'GenAI-assisted engineer',
];

const STATS = [
  {value: 8.5, decimals: 1, suffix: '+', label: 'Years of experience'},
  {value: 7, suffix: '', label: 'Companies'},
  {value: 4, suffix: '', label: 'Enterprise apps led at Niveus'},
  {value: 4, suffix: '', label: 'Personal projects'},
];

const SKILLS = [
  {
    icon: CloudIcon,
    title: 'GCP Cloud & Observability',
    text: 'App Engine, Cloud SQL, Cloud Storage, Cloud Logging and Monitoring, Grafana, Prometheus.',
  },
  {
    icon: ServerIcon,
    title: 'Backend & REST APIs',
    text: 'Node.js, NestJS, Express, Redis, JWT and SSO auth, Socket.io for real-time features.',
  },
  {
    icon: LayersIcon,
    title: 'Architecture & System Design',
    text: 'Microservices, event-driven design, distributed systems, high availability, SOLID.',
  },
  {
    icon: PipelineIcon,
    title: 'Databases, Docker & CI/CD',
    text: 'PostgreSQL, MySQL, MongoDB, Docker, Jenkins, GitLab and Bitbucket pipelines.',
  },
  {
    icon: CodeIcon,
    title: 'Full Stack & Python',
    text: 'Next.js, React, Vue.js, TypeScript, Python, FastAPI and ONDC integrations.',
  },
  {
    icon: SparkIcon,
    title: 'AI & Modern Engineering',
    text: 'Generative AI, LLMs, RAG, embeddings, vector search and AI-assisted development.',
  },
];

const EXPERIENCE = [
  {company: 'Niveus', role: 'Cloud Specialist - Full Stack Lead - GCP', period: 'Oct 2023 – Present', place: 'Mangaluru', slug: 'Niveus', current: true},
  {company: 'Colakin', role: 'Senior Software Developer', period: '01/2023 – 06/2023', place: 'Remote', slug: 'Colakin'},
  {company: 'Ashian Technologies', role: 'Full Stack Developer', period: '11/2021 – 01/2023', place: 'Tirunelveli', slug: 'Ashiantechnologies'},
  {company: 'Cobra Software', role: 'Web Developer', period: '02/2021 – 10/2021', place: 'Coimbatore', slug: 'CobraSoftware'},
  {company: 'Astute Code', role: 'Software Engineer', period: '01/2020 – 05/2020', place: 'Nagercoil', slug: 'Astutecode'},
  {company: 'W2B WebTech', role: 'Web Developer', period: '11/2018 – 12/2019', place: 'Tirunelveli', slug: 'W2BWebTech'},
  {company: 'Hapag Lloyd', role: 'Customer Support', period: '11/2015 – 05/2018', place: 'Chennai', slug: 'HapagLloyd'},
];

const PROJECTS = [
  {
    icon: SparkIcon,
    title: 'Packet AI',
    text: 'A private, fully offline AI assistant in Flutter: on-device LLM, speech recognition, TTS and SQLite.',
    tags: ['Flutter', 'On-device LLM', 'Offline'],
    to: '/docs/Achievements/PacketAI',
  },
  {
    icon: LayersIcon,
    title: 'Git Form Builder',
    text: 'A drag-and-drop form builder for designing and configuring web forms without code.',
    tags: ['JavaScript', 'Forms', 'UI'],
    to: '/docs/Achievements/GitFormBuilder',
  },
  {
    icon: ServerIcon,
    title: 'Git MongoDB CRUD',
    text: 'A CRUD reference app on MongoDB, built as teaching material for new developers.',
    tags: ['Node.js', 'MongoDB', 'Teaching'],
    to: '/docs/Achievements/GitMongo',
  },
  {
    icon: YouTubeIcon,
    title: 'YouTube channel',
    text: 'Tech videos that walk new learners through Git, libraries and databases.',
    tags: ['Video', 'Community'],
    to: '/docs/Achievements/YouTube',
  },
];

const ORBIT = ['GCP', 'NestJS', 'Node.js', 'React', 'Docker', 'Redis'];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);
  return reduced;
}

// Adds `styles.visible` once the element scrolls into view.
function useInView(options = {threshold: 0.15}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return undefined;
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
}

function Reveal({as: Tag = 'div', className, delay = 0, children, ...rest}) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={clsx(styles.reveal, inView && styles.visible, className)}
      style={{transitionDelay: `${delay}ms`}}
      {...rest}>
      {children}
    </Tag>
  );
}

function Typewriter({words}) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(true);

  useEffect(() => {
    if (reduced) {
      setText(words[0]);
      return undefined;
    }
    const word = words[index];
    let delay = deleting ? 35 : 75;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === '') delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        const next = deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
        setText(next);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, reduced, words]);

  return (
    <span className={styles.typewriter} aria-live="polite">
      {text}
      <span className={styles.caret} aria-hidden="true" />
    </span>
  );
}

function CountUp({value, decimals = 0, suffix}) {
  const [ref, inView] = useInView({threshold: 0.6});
  const reduced = usePrefersReducedMotion();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return undefined;
    if (reduced) {
      setN(value);
      return undefined;
    }
    let raf;
    const start = performance.now();
    const dur = 1400;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, value]);
  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

// Animated cloud-network illustration behind the hero.
function NetworkBackdrop() {
  const nodes = [
    [60, 80], [180, 40], [300, 110], [430, 50], [560, 120],
    [110, 220], [250, 260], [390, 210], [520, 280],
    [70, 350], [200, 380], [340, 340], [480, 380], [590, 330],
  ];
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 5], [2, 6], [2, 7], [3, 7],
    [4, 8], [5, 6], [6, 7], [7, 8], [5, 9], [6, 10], [6, 11], [7, 11],
    [8, 12], [8, 13], [9, 10], [10, 11], [11, 12], [12, 13],
  ];
  return (
    <svg className={styles.network} viewBox="0 0 640 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="edgeGrad" x1="0" x2="1">
          <stop offset="0" stopColor="var(--hero-a)" />
          <stop offset="1" stopColor="var(--hero-b)" />
        </linearGradient>
      </defs>
      {edges.map(([a, b], i) => (
        <line
          key={`e${i}`}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          className={styles.edge}
          style={{animationDelay: `${(i % 7) * 0.6}s`}}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={`n${i}`}
          cx={x}
          cy={y}
          r={i % 4 === 0 ? 5 : 3.5}
          className={styles.node}
          style={{animationDelay: `${(i % 5) * 0.7}s`}}
        />
      ))}
    </svg>
  );
}

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  const cvUrl = useBaseUrl('/Vimal_Raj_S_CV.pdf');
  return (
    <header className={styles.hero}>
      <div className={styles.blobA} aria-hidden="true" />
      <div className={styles.blobB} aria-hidden="true" />
      <NetworkBackdrop />

      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroText}>
          <span className={clsx(styles.badge, styles.fadeUp)}>
            <span className={styles.pulseDot} /> Open to collaboration and new opportunities
          </span>
          <h1 className={clsx(styles.heroTitle, styles.fadeUp)} style={{animationDelay: '80ms'}}>
            Hi, I'm <span className={styles.gradientText}>{siteConfig.title}</span>
          </h1>
          <p className={clsx(styles.heroRole, styles.fadeUp)} style={{animationDelay: '160ms'}}>
            <Typewriter words={ROLES} />
          </p>
          <p className={clsx(styles.heroLead, styles.fadeUp)} style={{animationDelay: '240ms'}}>
            I design and lead secure, scalable cloud platforms on Google Cloud: Node.js and NestJS
            microservices, REST APIs and CI/CD for enterprise banking and consumer apps.
          </p>
          <p className={clsx(styles.heroMeta, styles.fadeUp)} style={{animationDelay: '300ms'}}>
            <PinIcon size={18} /> Mangaluru, Karnataka, India
          </p>

          <div className={clsx(styles.ctaRow, styles.fadeUp)} style={{animationDelay: '360ms'}}>
            <Link className={clsx('button button--primary button--lg', styles.ctaPrimary)} to="/docs/intro">
              View resume <ArrowIcon size={18} />
            </Link>
            <a className={clsx('button button--secondary button--lg', styles.ctaSecondary)} href={cvUrl} target="_blank" rel="noopener noreferrer">
              <DownloadIcon size={18} /> Download CV
            </a>
          </div>

          <div className={clsx(styles.socials, styles.fadeUp)} style={{animationDelay: '440ms'}}>
            <a href="https://github.com/vimal33329" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><GitHubIcon size={20} /></a>
            <a href="https://www.linkedin.com/in/vimalraj-ps-b5989b180" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedInIcon size={20} /></a>
            <a href="mailto:Psvimal33329@gmail.com" aria-label="Email"><MailIcon size={20} /></a>
            <Link to="/docs/Achievements/YouTube" aria-label="YouTube videos"><YouTubeIcon size={20} /></Link>
          </div>
        </div>

        <div className={clsx(styles.avatarWrap, styles.fadeIn)}>
          <div className={styles.avatarRing} aria-hidden="true" />
          <img src={profilePic} alt="Vimal Raj S" className={styles.avatar} width="260" height="260" />
          <div className={styles.orbit} aria-hidden="true">
            {ORBIT.map((label, i) => (
              <span key={label} className={styles.orbitChip} style={{'--i': i, '--n': ORBIT.length}}>
                <span>{label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <svg className={styles.wave} viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40c120 26 240 26 360 0s240-26 360 0 240 26 360 0 240-26 360 0v40H0z" />
      </svg>
    </header>
  );
}

function Stats() {
  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.statsGrid}>
          {STATS.map((s, i) => (
            <Reveal key={s.label} className={styles.stat} delay={i * 90}>
              <div className={styles.statValue}>
                <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} />
              </div>
              <div className={styles.statLabel}>{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({eyebrow, title, children}) {
  return (
    <Reveal className={styles.sectionHeading}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </Reveal>
  );
}

function Skills() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading eyebrow="What I do" title="Skills & expertise">
          From cloud infrastructure to the UI, with a focus on systems that stay fast and secure under load.
        </SectionHeading>
        <div className={styles.cardGrid}>
          {SKILLS.map(({icon: Icon, title, text}, i) => (
            <Reveal key={title} className={styles.card} delay={(i % 3) * 100}>
              <div className={styles.cardIcon}><Icon size={26} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <SectionHeading eyebrow="Career" title="Experience timeline">
          8.5+ years across cloud, backend and full-stack roles.
        </SectionHeading>
        <ol className={styles.timeline}>
          {EXPERIENCE.map((job, i) => (
            <Reveal as="li" key={job.slug} className={clsx(styles.tlItem, i % 2 ? styles.tlRight : styles.tlLeft)} delay={60}>
              <span className={clsx(styles.tlDot, job.current && styles.tlDotLive)} aria-hidden="true">
                <BriefcaseIcon size={16} />
              </span>
              <Link to={`/docs/WorkExperience/${job.slug}`} className={styles.tlCard}>
                <span className={styles.tlPeriod}>{job.period}</span>
                <h3>{job.company}</h3>
                <p className={styles.tlRole}>{job.role}</p>
                <p className={styles.tlPlace}><PinIcon size={14} /> {job.place}</p>
              </Link>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading eyebrow="Side work" title="Projects & community">
          Things I build and share outside client work.
        </SectionHeading>
        <div className={styles.projectGrid}>
          {PROJECTS.map(({icon: Icon, title, text, tags, to}, i) => (
            <Reveal key={title} delay={(i % 2) * 100}>
              <Link to={to} className={styles.project}>
                <div className={styles.projectTop}>
                  <div className={styles.cardIcon}><Icon size={24} /></div>
                  <ArrowIcon size={20} className={styles.projectArrow} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className={styles.tags}>
                  {tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBand() {
  return (
    <section className={styles.contact}>
      <div className="container">
        <Reveal className={styles.contactInner}>
          <RocketIcon size={40} className={styles.contactIcon} />
          <h2>Let's build something together</h2>
          <p>I'm open to collaboration, consulting and new opportunities.</p>
          <div className={styles.ctaRow}>
            <a className={clsx('button button--lg', styles.contactBtn)} href="mailto:Psvimal33329@gmail.com">
              <MailIcon size={18} /> Get in touch
            </a>
            <a className={clsx('button button--lg', styles.contactGhost)} href="https://www.linkedin.com/in/vimalraj-ps-b5989b180" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon size={18} /> LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Cloud Specialist & Full Stack Lead"
      description="Vimal Raj S: Cloud Specialist and Full Stack Lead with 8.5+ years building secure, scalable GCP platforms.">
      <Hero />
      <main>
        <Stats />
        <Skills />
        <Timeline />
        <Projects />
        <ContactBand />
      </main>
    </Layout>
  );
}
