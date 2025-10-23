import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name = 'Varun Kumar M V';
  title = 'Flutter & Angular Developer';
  email = 'varunkumarsaroj08@gmail.com';
  github = 'https://github.com/varun0015';
  linkedin = 'https://www.linkedin.com/in/varun-kumar-350854172';

  constructor(public cookieService: CookieService) { }

  ngOnInit(): void { }

  skills: { [key: string]: string[] } = {
    mobile: ['Flutter', 'Dart', 'BLoC', 'Provider',],
    web: ['Angular', 'TypeScript', 'SCSS', 'HTML5'],
    backend: ['Firebase', 'Supabase', 'Express', 'REST APIs'],
    tools: ['Git', 'Figma', 'CI/CD', 'Postman', 'MongoDB']
  };

  projects = [
    {
      name: 'Blog App',
      tech: 'Flutter • Supabase • Hive • BLoC',
      desc: 'Cross-platform blog app with offline caching, auth, image uploads, and clean architecture (Oct 2025).'
    },
    {
      name: 'Afiya Healthcare',
      tech: 'Flutter • BLoC • Firebase • REST APIs ',
      desc: 'Patient engagement app with biometric login, analytics, and multi-hospital support. Published on Play & App Store.'
    },
    {
      name: 'E-Commerce App',
      tech: 'Flutter • Provider',
      desc: 'Shopping app with category filters, localization, and smooth UI.'
    }
  ];

  experience = [
    {
      role: 'Software Engineer',
      company: 'Robosoft Technologies',
      tenure: 'Aug 2022 — Present',
      // desc: " Frontend & Mobile Application Developer with 3+ years of experience delivering enterprise-grade Angular web apps and Flutter cross-platform mobile applications. Skilled in building responsive SPAs, secure transaction modules, and multilingual apps with seamless API integrations. Proven track record of publishing production-ready apps on Play Store & App Store (50k+downloads) in finance, healthcare, and e-commerce domains. Adept at working in agile teams, translating requirements into scalable solutions, and optimizing performance for high-traffic applications.",
      bullets: [
        "Developed and deployed Flutter and Angular apps for finance, healthcare, and e-commerce clients.",
        "Partnered with product teams to gather requirements, provide client demos, and deliver feature-rich releases on schedule.",
        "Built reusable Angular components and multilingual Flutter UIs with smooth animations and accessibility support.",
        "Integrated Firebase, Google Maps SDK, DigiLocker SDK, and biometric authentication to enhance app security and usability.",
        "Streamlined release management with CI/CD pipelines, improving deployment efficiency by 30%.",
        "Published and maintained cross-platform apps on Play Store & App Store, achieving 50k+ downloads.",
        "Mentored junior developers on Angular best practices, Git workflows, and performance optimization.",
      ]
    }
  ];

  education = {
    degree: 'B.E. Electrical & Electronics Engineering',
    institute: 'MIT Institute of Technology, Udupi',
    year: '2019 — 2022',
    cgpa: '8.4'
  };
}