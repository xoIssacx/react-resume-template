import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic1.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Sam H's Resume',
  description: "Welcome to my resume, view more information about me, below.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Sam Harrison.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a British based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Evonas</strong> helping to build a fullstack ecommerce platform..
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me chatting in <strong className="text-stone-100">Discord</strong>,
       chatting with my <strong className="text-stone-100">members</strong>, or doing updates{' '}
        <strong className="text-stone-100">On Evonas</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'London, GB', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'British/Dutch', Icon: FlagIcon},
    {label: 'Interests', text: 'Scuba Diving, Web Designing, Community Management.', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Cambridge', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Evonas', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Dutch',
        level: 3,
      },
      {
        name: 'Spanish',
        level: 2,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 4,
      },
      {
        name: 'GraphQL',
        level: 1,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 5,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 3,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Evonas',
    description: 'Evonas is a fullstack ecommerce platform, allowing developers alike to sell their products.',
    url: 'https://evonas.store/',
    image: porfolioImage1,
  },
  {
    title: 'Los Angeles Roleplay Community',
    description: 'Los Angeles Roleplay Community is a ROBLOX roleplaying community, allowing roleplayers to feel welcome.',
    url: 'https://laroleplay.net/',
    image: porfolioImage2,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2018',
    location: 'Kings College',
    title: 'A Levels in Computer Science',
    content: <p>I've went to Kings College to study Computer Science furhter in-depth to build a career out of it.</p>,
  },
  {
    date: 'March 2004',
    location: 'Highgate School',
    title: 'IT GCSE, English GCSE, Math, GCSE',
    content: <p>I enjoyed learning about IT and English whilst I was in school, I truly felt that this broguht my true skills to light.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2025 - Present',
    location: 'Evonas',
    title: 'Chief Executive Officer',
    content: (
      <p>
        Working at Evonas has allowed me to gather a full insight of what it takes to get a platform up, 
        the insights of both backend and frontend that goes into a platform has truly allowed me to gain knowledge.
      </p>
    ),
  },
  {
    date: 'May 2025 - October 2025',
    location: 'LionHosting',
    title: 'Chief Executive Officer',
    content: (
      <p>
       When I first started LionHosting, I knew nothing about owning a fullstack hosting company, owning this company has taught me
        some great knowledge, and I want to thank Cj V for this as well.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Find out how to contact me!',
  items: [
    {
      type: ContactType.Email,
      text: 'contact@aviatorpoki.uk',
      href: 'contact@aviatorpoki.uk',
    },
    {
      type: ContactType.Discord,
      text: '@grey_i_',
      href: 'https://discord.gg/hBHgp79X',
    },
    {
      type: ContactType.Github,
      text: 'xoIssacx',
      href: 'https://github.com/xoIssacx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/xoIssacx'},
  {label: 'Discord', Icon: DiscordIcon, href: 'https://discord.gg/hBHgp79X'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
];
