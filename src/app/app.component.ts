import { Component, HostListener, OnInit } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name = 'Varun Kumar M V';
  title = 'Flutter & Angular Developer';
  email = 'varunkumarsaroj08@gmail.com';
  // github = 'https://github.com/varun0015';
  github = 'https://github.com/varun-816?tab=repositories';
  linkedin = 'https://www.linkedin.com/in/varun-kumar-350854172';

  public Object = Object;

  activeSection: string = 'home'; 

  // List of all section IDs in the order they appear
  sectionIds: string[] = [
    'home', 
    'projects', 
    'skills', 
    'experience', 
    'getInTouch'
  ];



  constructor() { }

  ngOnInit(): void { }

    // 1. HostListener to detect scroll events
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    let currentActive = 'home';
    
    // Iterate through all sections to find which one is currently in the viewport
    for (const sectionId of this.sectionIds) {
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Get the position relative to the viewport
        const rect = element.getBoundingClientRect();
        
        // Check if the top of the element is near the top of the viewport
        // (Using 200px offset for smoother transition before the section hits the very top)
        if (rect.top >= -200 && rect.top <= window.innerHeight / 2) {
          currentActive = sectionId;
          break; // Stop once the topmost visible section is found
        }
      }
    }
    this.activeSection = currentActive;
  }

  // skills: { [key: string]: string[] } = {
  //   mobile: ['Flutter', 'Dart', 'BLoC', 'Provider',],
  //   web: ['Angular', 'TypeScript', 'SCSS', 'HTML5'],
  //   backend: ['Firebase', 'Supabase', 'Express', 'REST APIs'],
  //   tools: ['Git', 'Figma', 'CI/CD', 'Postman', 'MongoDB']
  // };

  // projects = [
  //   {
  //     name: 'Blog App',
  //     tech: 'Flutter • Supabase • Hive • BLoC',
  //     desc: 'Cross-platform blog app with offline caching, auth, image uploads, and clean architecture (Oct 2025).'
  //   },
  //   {
  //     name: 'Afiya Healthcare',
  //     tech: 'Flutter • BLoC • Firebase • REST APIs ',
  //     desc: 'Patient engagement app with biometric login, analytics, and multi-hospital support. Published on Play & App Store.'
  //   },
  //   {
  //     name: 'E-Commerce App',
  //     tech: 'Flutter • Provider',
  //     desc: 'Shopping app with category filters, localization, and smooth UI.'
  //   }
  // ];

  skills: { [key: string]: { name: string, level?: number }[] } = {
    'Core Languages & Frameworks': [
      { name: 'Angular', level: 9 },
      { name: 'Flutter', level: 9 },
      { name: 'TypeScript', level: 8 },
      { name: 'Dart', level: 9 },
      { name: 'HTML5/CSS3/SCSS', level: 8 }
    ],
    'State Management & Architecture': [
      { name: 'RxJS', level: 8 },
      { name: 'BLoC (Flutter)', level: 9 },
      { name: 'Provider (Flutter)', level: 8 },
      { name: 'Clean Architecture', level: 8 }
    ],
    'Backend & Data': [
      { name: 'RESTful APIs', level: 9 },
      { name: 'Firebase', level: 7 },
      { name: 'Supabase', level: 7 },
      { name: 'Node.js/Express', level: 6 },
      { name: 'MongoDB', level: 6 }
    ],
    'Tools & DevOps': [
      { name: 'Git / Gitflow', level: 9 },
      { name: 'CI/CD Pipelines', level: 7 },
      { name: 'Unit/Widget Testing (Testing Frameworks)', level: 7 }, // Crucial missing skill
      { name: 'Postman/Swagger', level: 8 },
      { name: 'Figma (UI Integration)', level: 7 }
    ]
  };


  projects = [
    {
      name: 'Afiya Healthcare',
      tech: 'Flutter • BLoC • Firebase • REST APIs (Production)',
      desc: [
        'Delivered a fully-featured patient engagement app published on **Play & App Store** for multi-hospital use.',
        'Implemented secure **biometric login** and advanced analytics dashboards for superior patient data security and insights.'
      ],
      type: 'Flutter Mobile App'
    },
    {
      name: 'Cross-Platform Blog App',
      tech: 'Flutter • Supabase • Hive • BLoC (Clean Architecture)',
      desc: [
        'Built a feature-rich cross-platform app demonstrating clean architecture principles (BLoC) and secure authentication.',
        'Achieved seamless offline user experience using **Hive** for robust local caching and data persistence.'
      ],
      type: 'Flutter Mobile App'
    },
    {
      name: 'E-Commerce Shopping App',
      tech: 'Flutter • Provider • Localization',
      desc: [
        'Developed a high-fidelity shopping application focused on smooth, **delightful UI/UX** and intuitive navigation.',
        'Implemented dynamic category filters and advanced **localization support** to prepare the app for international markets.'
      ],
      type: 'Flutter Mobile App'
    },
    {
      name: 'UTI Mutual Fund App',
      tech: 'Angular 15+ • RxJS • DigiLocker SDK • SCSS',
      desc: [
        'Architected and delivered the mobile-first transaction module (SIP/Lumpsum), securing real-time validation and compliance.',
        'Integrated **DigiLocker SDK** for secure eKYC and document storage, streamlining the customer onboarding process.',
        'Optimized performance using **Lazy Loading** and **OnPush Change Detection**, resulting in a highly responsive enterprise application.',
        'Embedded **Google Analytics** to monitor user journeys and drive data-backed customer engagement optimization.'
      ],
      type: 'Angular Web App'
    },
    {
      name: 'HSBC Mutual Fund Rebranding & Support',
      tech: 'Angular 15+ • Ionic • Reactive Forms • Gitflow',
      desc: [
        'Facilitated the rapid lift-and-shift **rebranding** of LTIM digital assets (Web/App) to the new HSBC brand, ensuring business continuity.',
        'Built core reusable services and directives, significantly reducing code redundancy across multiple platform assets.',
        'Resolved critical **production bugs** and enforced strict **Git best practices**, stabilizing high-traffic digital platforms.'
      ],
      type: 'Angular/Ionic Support'
    },
    {
      name: 'Laundry Mate',
      tech: 'Angular • Cross-Browser Testing • REST',
      desc: [
        'Collaborated directly with clients to define **project roadmaps** and timelines, ensuring on-time feature delivery.',
        'Developed and tested robust, **cross-browser compatible** features using cloud-based tools for maximized user reach.'
      ],
      type: 'Angular Web App'
    },
  ];

  // experience = [
  //   {
  //     role: 'Software Engineer',
  //     company: 'Robosoft Technologies',
  //     tenure: 'Aug 2022 — Nov 2025',
  //     // desc: " Frontend & Mobile Application Developer with 3+ years of experience delivering enterprise-grade Angular web apps and Flutter cross-platform mobile applications. Skilled in building responsive SPAs, secure transaction modules, and multilingual apps with seamless API integrations. Proven track record of publishing production-ready apps on Play Store & App Store (50k+downloads) in finance, healthcare, and e-commerce domains. Adept at working in agile teams, translating requirements into scalable solutions, and optimizing performance for high-traffic applications.",
  //     bullets: [
  //       "Developed and deployed Flutter and Angular apps for finance, healthcare, and e-commerce clients.",
  //       "Partnered with product teams to gather requirements, provide client demos, and deliver feature-rich releases on schedule.",
  //       "Built reusable Angular components and multilingual Flutter UIs with smooth animations and accessibility support.",
  //       "Integrated Firebase, Google Maps SDK, DigiLocker SDK, and biometric authentication to enhance app security and usability.",
  //       "Streamlined release management with CI/CD pipelines, improving deployment efficiency by 30%.",
  //       "Published and maintained cross-platform apps on Play Store & App Store, achieving 50k+ downloads.",
  //       "Mentored junior developers on Angular best practices, Git workflows, and performance optimization.",
  //     ]
  //   }
  // ];

  experience = [
    {
      role: 'Software Engineer (Frontend & Mobile Specialist)',
      company: 'Robosoft Technologies',
      tenure: 'August 2022 — Present (3+ Years)',
      bullets: [
        // Focus on Deployment and Scale
        'Spearheaded the development and deployment of **enterprise-grade Angular and Flutter applications** for high-stakes Finance, Healthcare, and E-commerce clients.',
        // Focus on Results (Quantifiable)
        'Achieved **50,000+ total downloads** by publishing and maintaining high-quality cross-platform applications on both the Play Store and App Store.',
        // Focus on Efficiency/Process
        'Engineered a **30% improvement in deployment efficiency** by streamlining release management through robust **CI/CD pipelines** and automated workflows.',
        // Focus on Technical Depth and Security
        'Enhanced application security and user experience by implementing advanced integrations: **DigiLocker SDK** for eKYC, **biometric authentication**, and secure **Firebase/REST APIs**.',
        // Focus on Architecture and Reusability
        'Drove code scalability by architecting **reusable Angular component libraries** and responsive, multilingual Flutter UIs that maintained high accessibility standards.',
        // Focus on Leadership/Mentorship
        'Served as a technical resource, **mentoring junior developers** on Angular best practices, advanced Git workflows, and proactive performance optimization techniques.'
      ]
    }
    // Add more experience objects here if you have them!
  ];

  education = {
    degree: 'B.E. Electrical & Electronics Engineering',
    institute: 'MIT Institute of Technology, Udupi',
    year: '2019 — 2022',
    cgpa: '8.4'
  };
}