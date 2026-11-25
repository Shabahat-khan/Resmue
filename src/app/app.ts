import { Component } from '@angular/core';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Education } from './components/education/education';
import { Experience } from './components/experience/experience';
import { Hero } from './components/hero/hero';
import { Impact } from './components/impact/impact';
import { Projects } from './components/projects/projects';
import { SiteHeader } from './components/site-header/site-header';
import { Skills } from './components/skills/skills';

@Component({
  imports: [SiteHeader, Hero, About, Impact, Skills, Experience, Projects, Education, Contact],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
