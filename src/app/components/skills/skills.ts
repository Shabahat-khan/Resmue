import { Component } from '@angular/core';
import { portfolio } from '../../portfolio.data';

type SkillName = (typeof portfolio.skills)[number]['items'][number];
type SkillIcon =
  | 'coffee'
  | 'leaf'
  | 'layers'
  | 'code'
  | 'network'
  | 'document'
  | 'browser'
  | 'shield'
  | 'database'
  | 'performance'
  | 'cloud'
  | 'container'
  | 'bucket'
  | 'pipeline'
  | 'branch'
  | 'repository'
  | 'send'
  | 'api'
  | 'stream'
  | 'ide';

const skillIcons: Record<SkillName, SkillIcon> = {
  Java: 'coffee',
  'Spring Boot': 'leaf',
  Spring: 'leaf',
  Hibernate: 'layers',
  'REST APIs': 'code',
  Microservices: 'network',
  JSP: 'document',
  Angular: 'shield',
  JavaScript: 'code',
  HTML: 'browser',
  CSS: 'shield',
  Bootstrap: 'browser',
  'SQL Server': 'database',
  MySQL: 'database',
  Sybase: 'network',
  Oracle: 'database',
  'SQL optimization': 'performance',
  AWS: 'cloud',
  Docker: 'container',
  Jenkins: 'pipeline',
  'IntelliJ IDEA': 'ide',
  'VS Code': 'ide',
  STS: 'ide',
  'AWS S3': 'bucket',
  Git: 'branch',
  GitHub: 'repository',
  Postman: 'send',
  Swagger: 'api',
  'Apache Kafka': 'stream',
};

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  readonly skillGroups = portfolio.skills.map((group) => ({
    ...group,
    items: group.items.map((name) => ({ name, icon: skillIcons[name] })),
  }));
  readonly proficiencyAreas = [
    { title: 'Backend & APIs', skills: 'Java · Spring Boot · REST APIs', level: 0.94, delay: '0ms' },
    {
      title: 'Data & integrations',
      skills: 'SQL · Database migration · System integrations',
      level: 0.82,
      delay: '160ms',
    },
    {
      title: 'Full-stack delivery',
      skills: 'Angular · JSP · Docker · Jenkins',
      level: 0.7,
      delay: '320ms',
    },
  ];
}
