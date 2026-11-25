export const portfolio = {
  name: 'Shabahat Khan',
  role: 'Java Backend Developer · Full Stack Java Developer',
  location: 'Pune, India',
  email: 'shabahatkhanmdik@gmail.com',
  phone: '+91-9284420615',
  github: 'https://github.com/Shabahat-khan',
  summary:
    'Java Backend / Full Stack Developer with 4+ years of experience building enterprise-scale applications using Java, Spring Boot, microservices, and REST APIs. Focused on scalable backend architecture, database optimization, and full SDLC ownership.',
  highlights: [
    { value: '25%', label: 'faster queries after database migration' },
    { value: '40%', label: 'faster deployments through CI/CD automation' },
    { value: '30%', label: 'less manual reporting effort' },
    { value: '35%', label: 'improved operational efficiency' },
  ],
  projects: [
    {
      title: 'ALAIR Document Management System',
      category: 'Engineering document management',
      description:
        'A Java/GWT enterprise application for engineering document management at Air Liquide.',
      impact:
        'Built backend services and REST APIs for secure document ingestion, retrieval, versioning, and lifecycle management.',
      technologies: ['Java', 'GWT', 'REST APIs'],
    },
    {
      title: 'Teleasy Admin Tool',
      category: 'E-commerce platform',
      description:
        'A multi-vendor management platform with REST APIs for product and order operations and a responsive JSP/Bootstrap interface.',
      impact: 'Improved operational efficiency by 35%.',
      technologies: ['Java', 'Spring Boot', 'JSP', 'Bootstrap'],
    },
    {
      title: 'Common Vendor API',
      category: 'System integration',
      description:
        'A shared API that connects vendor systems with internal services and streamlines vendor onboarding.',
      impact: 'Enabled 30% faster onboarding and 25% less manual intervention.',
      technologies: ['Java', 'Spring Boot', 'REST APIs'],
    },
    {
      title: 'Sybase to SQL Server migration',
      category: 'Database modernization',
      description:
        'An enterprise database migration delivered with a zero-downtime production transition and verified data integrity.',
      impact: 'Maintained 100% data integrity and improved query performance by 25%.',
      technologies: ['Sybase', 'SQL Server', 'SSMA'],
    },
  ],
  skills: [
    {
      title: 'Backend',
      items: [
        'Java',
        'Spring Boot',
        'Spring',
        'Hibernate',
        'REST APIs',
        'Microservices',
        'JSP',
        'AWS',
      ],
    },
    {
      title: 'Frontend',
      items: ['Angular', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    },
    {
      title: 'Databases',
      items: ['SQL Server', 'MySQL', 'Sybase', 'Oracle', 'SQL optimization'],
    },
    {
      title: 'Tools & platforms',
      items: [
        'Docker',
        'Jenkins',
        'IntelliJ IDEA',
        'VS Code',
        'STS',
        'AWS S3',
        'Git',
        'GitHub',
        'Postman',
        'Swagger',
        'Apache Kafka',
      ],
    },
  ],
  experience: [
    {
      title: 'Senior Associate Consultant',
      company: 'Infosys',
      dates: 'July 2024 – Present',
      location: 'Pune, India',
      highlights: [
        'Work as an Integration Engineer on ALAIR (Air Liquide), a Java/GWT enterprise application for engineering document management, building backend services and REST APIs for secure document ingestion, retrieval, versioning, and lifecycle management.',
        'Led a zero-downtime Sybase-to-SQL Server migration for the Garwin (Venerable) application, maintaining 100% data integrity and improving query performance by 25% across 10,000+ active policy records.',
        'Developed Spring Boot microservices for insurance policy tracking and sales insights reporting, reducing manual reporting effort by 30%.',
        'Optimized SQL queries and stored procedures, cutting execution and reconciliation time by 20%.',
        'Collaborate with engineering and business stakeholders in an Agile Scrum workflow.',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Altius Customer Service',
      dates: 'October 2021 – March 2024',
      location: 'Nagpur, India',
      highlights: [
        'Built and maintained the Teleasy Admin Tool, a multi-vendor e-commerce management platform, including Spring Boot REST APIs for product and order management.',
        'Developed a responsive JSP and Bootstrap interface integrated with backend services, improving operational efficiency by 35%.',
        'Built a Common Vendor API and integrations that enabled 30% faster vendor onboarding and reduced manual intervention by 25%.',
        'Implemented Docker and Jenkins CI/CD pipelines, reducing deployment and release time by 40%.',
        'Integrated AWS S3 for secure data storage and retrieval; documented and tested APIs with Postman and Swagger.',
        'Optimized MySQL queries and schema design, improving query performance by 20%.',
      ],
    },
  ],
  education: [
    {
      qualification: 'Bachelor of Engineering',
      field: 'Computer Engineering',
      institution: 'RTMNU – Rashtrasant Tukadoji Maharaj Nagpur University',
      dates: '2019 – 2022',
      result: 'CGPA: 7.89 / 10.0',
    },
    {
      qualification: 'Diploma',
      field: 'Computer Engineering',
      institution: 'MSBTE – Maharashtra State Board of Technical Education',
      dates: '2013 – 2017',
      result: 'Aggregate: 70.90%',
    },
  ],
} as const;
