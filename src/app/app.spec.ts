import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the portfolio hero', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Shabahat Khan');
    expect(compiled.querySelector('.wave-hand')?.getAttribute('aria-hidden')).toBe('true');
  });

  it('should show the styled name as the home brand', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const brand = compiled.querySelector('.brand');

    expect(brand?.getAttribute('href')).toBe('#home');
    expect(brand?.querySelector('.brand-name')?.textContent).toContain('Shabahat Khan');
    expect(brand?.querySelectorAll('.brand-code').length).toBe(2);
  });

  it('should render the selected work cards', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const projectCards = compiled.querySelectorAll<HTMLElement>('#projects .project-card');
    const alairProject = [...projectCards].find((card) =>
      card.textContent?.includes('ALAIR Document Management System'),
    );

    expect(projectCards.length).toBe(4);
    expect(alairProject?.textContent).toContain('Java/GWT enterprise application');
    expect(alairProject?.textContent).toContain('secure document ingestion, retrieval, versioning');
    expect(alairProject?.textContent).toContain('GWT');
  });

  it('should render the experience history in employer cards', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const experience = compiled.querySelector('#experience');
    const cards = experience?.querySelectorAll('.experience-card');

    expect(experience?.querySelector('h2')?.textContent).toContain('Experiences');
    expect(cards?.length).toBe(2);
    expect(cards?.[0].textContent).toContain('Infosys');
    expect(cards?.[0].textContent).toContain('ALAIR (Air Liquide)');
    expect(cards?.[1].textContent).toContain('Altius Customer Service');
    expect(experience?.querySelectorAll('.technology-list').length).toBe(0);
    expect(experience?.querySelectorAll('.role-highlights li').length).toBe(11);
  });

  it('should show both education cards with their original results', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const education = compiled.querySelector('#education');
    const cards = education?.querySelectorAll('.education-card');

    expect(education?.querySelector('h2')?.textContent).toContain('Academic foundation');
    expect(cards?.length).toBe(2);
    expect(cards?.[0].textContent).toContain('Bachelor of Engineering');
    expect(cards?.[0].textContent).toContain('CGPA: 7.89 / 10.0');
    expect(cards?.[1].textContent).toContain('MSBTE');
    expect(cards?.[1].textContent).toContain('Aggregate: 70.90%');
  });

  it('should render the hero technology badges', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.stack-chips .stack-chip').length).toBe(3);
  });

  it('should show proficiency bars, an accessible coding illustration, and the skills toolkit', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const skills = compiled.querySelector('#skills');

    expect(compiled.querySelector('nav a[href="#skills"]')?.textContent).toContain('Proficiency');
    expect(skills?.querySelector('h2')?.textContent).toContain('Proficiency');
    expect(skills?.querySelectorAll('.proficiency-item').length).toBe(3);
    expect(skills?.querySelector('svg[role="img"] title')?.textContent).toContain(
      'robotic arm writing code',
    );
    expect(skills?.querySelectorAll('.skill-card').length).toBe(4);
    expect(skills?.querySelectorAll('.skill-mark').length).toBe(29);
    expect(skills?.querySelector('.skill-card')?.textContent).toContain('AWS');
    expect(skills?.querySelectorAll('.skill-name').length).toBe(29);
    const tools = skills?.querySelectorAll('.skill-card')[3];
    expect(tools?.textContent).toContain('IntelliJ IDEA');
    expect(tools?.textContent).toContain('VS Code');
    expect(tools?.textContent).toContain('STS');
  });

  it('should show backend technologies and areas of focus in the about section', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const about = compiled.querySelector('#about');

    expect(about?.querySelector('h2')?.textContent).toContain('Reliable backend systems');
    expect(about?.querySelectorAll('.technology').length).toBe(10);
    expect(about?.textContent).toContain('Spring Boot');
    expect(about?.querySelectorAll('.capability-list li').length).toBe(4);
  });

  it('should show resume-backed achievements', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('#achievements .impact-card').length).toBe(4);
  });

  it('should preserve the existing contact copy and destinations', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const contact = compiled.querySelector('#contact');

    expect(contact?.querySelector('h2')?.textContent).toContain('Have a role or a project in mind?');
    expect(contact?.textContent).toContain(
      'I’d be glad to hear about it. Reach out by email or connect with me on GitHub.',
    );
    expect(contact?.querySelector('a[href^="mailto:"]')?.textContent).toContain(
      'shabahatkhanmdik@gmail.com',
    );
    expect(contact?.querySelector('a[href^="tel:"]')?.textContent).toContain('+91-9284420615');
    expect(contact?.querySelector('a[href*="github.com"]')?.textContent).toContain('GitHub');
    expect(contact?.querySelector('.contact-photo')?.getAttribute('alt')).toBe('Shabahat Khan');
    expect(contact?.querySelector('.contact-photo')?.getAttribute('src')).toBe(
      'shabahat-contact.png',
    );
    const backToTop = contact?.querySelector<HTMLAnchorElement>('.back-to-top');

    expect(backToTop?.getAttribute('href')).toBe('#home');
    expect(backToTop?.getAttribute('aria-label')).toBe('Back to top');
    expect(backToTop?.querySelector('.rocket-body')).toBeTruthy();
    expect(backToTop?.querySelector('.rocket-window')).toBeTruthy();
    expect(backToTop?.querySelector('.rocket-flame')).toBeTruthy();
    expect(backToTop?.getAttribute('aria-hidden')).toBe('true');

    document.documentElement.scrollTop = 500;
    window.dispatchEvent(new Event('scroll'));
    fixture.detectChanges();
    expect(backToTop?.classList.contains('is-visible')).toBe(true);

    document.documentElement.scrollTop = 0;
    window.dispatchEvent(new Event('scroll'));
    fixture.detectChanges();
    expect(backToTop?.classList.contains('is-visible')).toBe(false);
  });

  it('should toggle the page theme', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const toggle = fixture.nativeElement.querySelector('.theme-toggle') as HTMLButtonElement;

    expect(document.documentElement.classList.contains('theme-dark')).toBe(false);
    expect(toggle.getAttribute('aria-label')).toBe('Switch to dark theme');

    toggle.click();
    expect(document.documentElement.classList.contains('theme-dark')).toBe(true);

    toggle.click();
    expect(document.documentElement.classList.contains('theme-dark')).toBe(false);
  });
});
