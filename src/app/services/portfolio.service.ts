import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  leetcode: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  id: number;
  name: string;
  company: string;
  tenure: string;
  tech: string;
  description: string;
  highlights: string[];
  type: string;
  impact: string;
}

export interface Experience {
  role: string;
  company: string;
  tenure: string;
  highlights: string[];
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  company: string;
  role: string;
  image: string;
}

export interface BlogArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  link: string;
}

export interface Education {
  degree: string;
  institute: string;
  year: string;
  cgpa: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private readonly personalInfo: PersonalInfo = {
    name: 'Varun Kumar M V',
    title: 'Senior Software Engineer',
    subtitle: 'Enterprise Angular Developer | Secure Web Applications | 3+ Years',
    location: 'Bengaluru, Karnataka, India',
    email: 'varunkumarsaroj08@gmail.com',
    phone: '+91 9620208254',
    github: 'https://github.com/varun-816?tab=repositories',
    linkedin: 'https://www.linkedin.com/in/varun-kumar-350854172',
    leetcode: 'https://leetcode.com/u/varun_816'
  };

  private readonly skills: { [key: string]: Skill[] } = {
    'Frontend & Frameworks': [
      { name: 'Angular 13+', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'RxJS', level: 88 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3/SCSS', level: 88 },
      { name: 'Angular Material', level: 85 }
    ],
    'Application Architecture': [
      { name: 'SPA Development', level: 92 },
      { name: 'Reactive Forms', level: 90 },
      { name: 'Component Architecture', level: 90 },
      { name: 'Lazy Loading', level: 85 },
      { name: 'State Management', level: 85 }
    ],
    'Security & Authentication': [
      { name: 'Keycloak (IAM)', level: 88 },
      { name: 'SAML Authentication', level: 85 },
      { name: 'RBAC', level: 85 },
      { name: 'REST API Integration', level: 90 },
      { name: 'Secure Authentication Flows', level: 88 }
    ],
    'Development Tools & Platforms': [
      { name: 'Git / Bitbucket', level: 90 },
      { name: 'CI/CD Pipelines', level: 85 },
      { name: 'Jira', level: 80 },
      { name: 'Oracle WebLogic', level: 75 },
      { name: 'Bootstrap & Responsive Design', level: 88 }
    ]
  };

  private readonly projects: Project[] = [
    {
      id: 1,
      name: 'MDMS – Master Data Management System',
      company: 'ReBIT (Reserve Bank Information Technology)',
      tenure: 'Nov 2025 – Present',
      tech: 'Angular | TypeScript | Form.io | Keycloak | REST APIs',
      description: 'Enterprise platform for centralized master data management used across RBI systems',
      highlights: [
        'Developed modular Angular components for a centralized master data platform',
        'Implemented dynamic maker-checker workflows for data creation, validation, and approval',
        'Built configuration-driven UI forms using Form.io for flexible data capture',
        'Integrated secure authentication using Keycloak IAM and role-based access control',
        'Implemented transaction history views and audit log dashboards for compliance'
      ],
      type: 'Enterprise Banking Platform',
      impact: 'RBI Internal Platform'
    },
    {
      id: 2,
      name: 'MICR – Banking Data Processing System',
      company: 'ReBIT (Reserve Bank Information Technology)',
      tenure: 'Nov 2025 – Present',
      tech: 'Angular | TypeScript | SAML | Enterprise APIs | Oracle WebLogic',
      description: 'Banking application for transaction validation and secure data processing',
      highlights: [
        'Developed Angular workflows for banking data processing and validation systems',
        'Integrated secure SAML-based authentication with enterprise identity systems',
        'Built responsive dashboards and UI modules for transaction validation',
        'Worked with backend teams to integrate APIs and ensure secure data processing',
        'Supported enterprise deployments on Oracle WebLogic environments'
      ],
      type: 'Banking Application',
      impact: 'RBI Enterprise System'
    },
    {
      id: 3,
      name: 'UTI Mutual Fund Platform',
      company: 'Robosoft Technologies',
      tenure: 'Aug 2022 – Nov 2025',
      tech: 'Angular 15+ | TypeScript | RxJS | Material Design | REST APIs',
      description: 'Enterprise-grade investment platform for mutual fund SIP and Lumpsum transactions',
      highlights: [
        'Built reusable Angular components following modular architecture principles',
        'Architected mobile-first transaction module for SIP & Lumpsum investments',
        'Improved application performance using Lazy Loading and optimized change detection',
        'Implemented secure REST API integration for transaction processing',
        'Delivered stable releases through CI/CD pipelines and production deployments'
      ],
      type: 'Fintech Enterprise Web App',
      impact: 'Production Grade | Banking Sector'
    },
    {
      id: 4,
      name: 'HSBC Mutual Fund Platform',
      company: 'Robosoft Technologies',
      tenure: 'Aug 2022 – Nov 2025',
      tech: 'Angular 15+ | Ionic | TypeScript | Reactive Forms | Git Workflow',
      description: 'Rebranding and enhancement of mutual fund management platform',
      highlights: [
        'Built reusable Angular components, services, and reactive forms',
        'Integrated REST APIs and secure authentication flows',
        'Resolved critical production bugs and enforced Git best practices',
        'Improved application performance using lazy loading and efficient state handling',
        'Stabilized high-traffic digital platforms for enterprise users'
      ],
      type: 'Enterprise Web & Mobile App',
      impact: 'Production Platform | BFSI Sector'
    }
  ];

  private readonly experience: Experience[] = [
    {
      role: 'Senior Software Engineer',
      company: 'ReBIT (Reserve Bank Information Technology Pvt. Ltd.)',
      tenure: 'Nov 2025 – Present',
      highlights: [
        'Working on enterprise platforms for the Reserve Bank of India',
        'Building secure Angular applications and integrating with backend services',
        'Developing modular components for centralized master data management',
        'Implementing dynamic maker-checker workflows for data validation and approval',
        'Integrating Keycloak IAM for secure authentication and RBAC implementation',
        'Supporting enterprise deployments on Oracle WebLogic environments'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Robosoft Technologies Pvt. Ltd.',
      tenure: 'Aug 2022 – Nov 2025',
      highlights: [
        'Developed scalable Angular Single Page Applications for fintech clients',
        'Built reusable Angular components, services, and reactive forms',
        'Integrated REST APIs and secure authentication flows into enterprise applications',
        'Improved application performance using lazy loading and optimized change detection',
        'Delivered stable releases through CI/CD pipelines and production deployments',
        'Worked with backend teams to design API contracts and ensure secure data processing',
        'Supported enterprise deployments and resolved production issues'
      ]
    }
  ];

  private readonly testimonials: Testimonial[] = [
    {
      id: 1,
      text: 'Strong technical knowledge in Angular and enterprise architecture. Collaborated effectively on MDMS platform development at ReBIT.',
      author: 'Team Member',
      company: 'ReBIT',
      role: 'Banking Platform',
      image: 'assets/testimonials/testimonial-1.jpg'
    },
    {
      id: 2,
      text: 'Solid understanding of authentication systems and security practices. Contributed meaningfully to multiple projects at ReBIT.',
      author: 'Colleague',
      company: 'ReBIT',
      role: 'Engineering Team',
      image: 'assets/testimonials/testimonial-2.jpg'
    },
    {
      id: 3,
      text: 'Delivered quality work on Angular projects during tenure at Robosoft. Good grasp of enterprise coding standards and practices.',
      author: 'Co-worker',
      company: 'Robosoft Technologies',
      role: 'Development Team',
      image: 'assets/testimonials/testimonial-3.jpg'
    }
  ];

  private readonly blogArticles: BlogArticle[] = [
    {
      id: 1,
      title: 'Enterprise Angular Architecture: Building Scalable SPA Applications',
      excerpt: 'Deep dive into modern Angular architecture patterns, component design, and best practices for enterprise-scale applications.',
      category: 'Angular',
      date: 'Apr 20, 2026',
      readTime: '10 min read',
      link: '#'
    },
    {
      id: 2,
      title: 'Securing Angular Applications: Keycloak IAM & SAML Integration',
      excerpt: 'Complete guide to implementing secure authentication systems in Angular using Keycloak and SAML for enterprise applications.',
      category: 'Security',
      date: 'Apr 15, 2026',
      readTime: '12 min read',
      link: '#'
    },
    {
      id: 3,
      title: 'REST API Integration & Contract Design in Angular',
      excerpt: 'Best practices for designing robust API contracts and integrating them seamlessly into Angular applications.',
      category: 'Backend Integration',
      date: 'Apr 10, 2026',
      readTime: '9 min read',
      link: '#'
    },
    {
      id: 4,
      title: 'Performance Optimization: RxJS & Change Detection in Angular',
      excerpt: 'Advanced techniques for optimizing Angular applications using RxJS patterns and efficient change detection strategies.',
      category: 'Performance',
      date: 'Apr 5, 2026',
      readTime: '11 min read',
      link: '#'
    }
  ];

  private readonly education: Education = {
    degree: 'B.E. Electrical & Electronics Engineering',
    institute: 'MIT Institute of Technology, Udupi',
    year: '2019 — 2022',
    cgpa: '8.4'
  };

  constructor() { }

  getPersonalInfo(): PersonalInfo {
    return this.personalInfo;
  }

  getSkills(): { [key: string]: Skill[] } {
    return this.skills;
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getExperience(): Experience[] {
    return this.experience;
  }

  getTestimonials(): Testimonial[] {
    return this.testimonials;
  }

  getBlogArticles(): BlogArticle[] {
    return this.blogArticles;
  }

  getEducation(): Education {
    return this.education;
  }
}
