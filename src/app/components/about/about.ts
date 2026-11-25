import { Component } from '@angular/core';
import { portfolio } from '../../portfolio.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly portfolio = portfolio;
  readonly technologies = [
    { mark: 'J', name: 'Java' },
    { mark: 'SB', name: 'Spring Boot' },
    { mark: 'API', name: 'REST APIs' },
    { mark: 'MS', name: 'Microservices' },
    { mark: 'SQL', name: 'SQL Server' },
    { mark: 'MY', name: 'MySQL' },
    { mark: 'DK', name: 'Docker' },
    { mark: 'CI', name: 'Jenkins' },
    { mark: 'S3', name: 'AWS S3' },
    { mark: 'NG', name: 'Angular' },
  ];
  readonly capabilities = [
    'Build Java and Spring Boot services for enterprise workflows',
    'Design REST APIs and integrations that connect business systems',
    'Modernize databases through careful migration and SQL optimization',
    'Improve release reliability with Docker and Jenkins CI/CD',
  ];
}
