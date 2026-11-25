# Shabahat Khan Portfolio

An Angular portfolio for Shabahat Khan, Java backend and full-stack developer. This README maps the page to its components and explains where to edit content, styling, and motion.

## Run and verify

```bash
npm install
npm start
```

Open `http://localhost:4200/`. The dev server reloads when source files change.

```bash
npm run build
npm test -- --watch=false
```

The production build is written to `dist/`. Tests use Vitest.

## Deploy to GitHub Pages

The [Pages workflow](./.github/workflows/deploy.yml) runs on pushes to `master`, builds with the `/Resmue/` project-site base path, and publishes `dist/resume/browser`. In GitHub, set **Settings → Pages → Source** to **GitHub Actions**. The deployed site is `https://shabahat-khan.github.io/Resmue/`.

## Page structure

The page is assembled in [app.html](./src/app/app.html), in this order. Component imports are maintained in [app.ts](./src/app/app.ts).

| Component | Template | Logic and data binding | Component styles | Purpose |
| --- | --- | --- | --- | --- |
| Site header | [site-header.html](./src/app/components/site-header/site-header.html) | [site-header.ts](./src/app/components/site-header/site-header.ts) | [site-header.css](./src/app/components/site-header/site-header.css) | Sticky navigation, portfolio brand, and light/dark theme toggle. |
| Hero | [hero.html](./src/app/components/hero/hero.html) | [hero.ts](./src/app/components/hero/hero.ts) | [hero.css](./src/app/components/hero/hero.css) | Name, role, summary, contact links, and professional highlights. |
| About | [about.html](./src/app/components/about/about.html) | [about.ts](./src/app/components/about/about.ts) | [about.css](./src/app/components/about/about.css) | Developer introduction, technology highlights, and areas of focus. |
| Skills | [skills.html](./src/app/components/skills/skills.html) | [skills.ts](./src/app/components/skills/skills.ts) | [skills.css](./src/app/components/skills/skills.css) | Proficiency bars, animated coding illustration, and icon-based technical toolkit. |
| Experience | [experience.html](./src/app/components/experience/experience.html) | [experience.ts](./src/app/components/experience/experience.ts) | [experience.css](./src/app/components/experience/experience.css) | Employer cards and achievement-focused role details. |
| Projects | [projects.html](./src/app/components/projects/projects.html) | [projects.ts](./src/app/components/projects/projects.ts) | [projects.css](./src/app/components/projects/projects.css) | Selected professional projects, impact, and project technologies. |
| Achievements | [impact.html](./src/app/components/impact/impact.html) | [impact.ts](./src/app/components/impact/impact.ts) | [impact.css](./src/app/components/impact/impact.css) | Resume-backed results presented as impact metrics. |
| Education | [education.html](./src/app/components/education/education.html) | [education.ts](./src/app/components/education/education.ts) | [education.css](./src/app/components/education/education.css) | Education cards with qualifications, dates, and results. |
| Contact | [contact.html](./src/app/components/contact/contact.html) | [contact.ts](./src/app/components/contact/contact.ts) | [contact.css](./src/app/components/contact/contact.css) | Contact links, portrait, footer, and scroll-triggered back-to-top rocket. |

For each component, the HTML template defines markup, the TypeScript file supplies behavior/data binding, and the CSS file controls that component's layout and appearance.

## Where to edit content

Most resume content is centralized in [portfolio.data.ts](./src/app/portfolio.data.ts):

- Update name, role, contact details, summary, and location in the top-level profile fields.
- Edit skill categories and their labels in `skills`.
- Edit work history and accomplishment bullets in `experience`.
- Edit project cards in `projects`.
- Edit education and achievement metrics in `education` and `highlights`.

The toolkit's locally drawn SVG symbols are mapped in [skills.ts](./src/app/components/skills/skills.ts). When adding or renaming a skill in `portfolio.data.ts`, update `skillIcons` there as well; its TypeScript type requires every skill to have an icon mapping.

The Experience cards intentionally do not repeat a separate technology-chip list. Keep role details in their accomplishment bullets and maintain the overall skills inventory in `skills`.

## Theme, layout, and animations

- [styles.css](./src/styles.css) contains the light-theme defaults, dark-theme color variables, Montserrat import, shared animations, and reduced-motion support.
- [site-header.css](./src/app/components/site-header/site-header.css) makes the Angular component host sticky so navigation remains at the top while scrolling.
- The theme toggle in `site-header.ts` starts in light mode and applies `theme-dark` to the document root when enabled.
- Component CSS files contain their responsive breakpoints and section-specific layout rules.

| Animation | Purpose |
| --- | --- |
| `chip-float` | Gently floats technology badges and decorative chips. |
| `monogram-pulse` | Adds a soft pulse/glow to profile and contact monograms. |
| `hand-wave` | Waves the greeting hand beside the name. |
| `proficiency-reveal` | Reveals proficiency bars from left to right. |
| `robot-write` | Moves the robotic arm in the coding illustration. |
| `cursor-blink` | Blinks the code-editor caret. |
| `writing-spark` | Pulses the spark at the robotic arm's writing point. |
| `rocket-burn` | Flickers the back-to-top rocket flame on hover or keyboard focus. |

The global `prefers-reduced-motion` rule in `styles.css` reduces animations and transitions for users who request less motion.

The back-to-top link is in `contact.html`; its visibility is managed by `contact.ts` and turns on after scrolling more than 320 pixels. The button links back to `#home`.

## Shared files and assets

- [portfolio.data.ts](./src/app/portfolio.data.ts): shared profile and resume content.
- [app.spec.ts](./src/app/app.spec.ts): component integration tests for page sections, links, skills, themes, and scroll behavior.
- [index.html](./src/index.html): document title, description, viewport settings, and favicon reference.
- [shabahat-contact.png](./public/shabahat-contact.png): contact-section portrait.
- [favicon.ico](./public/favicon.ico): browser tab icon.
- [package.json](./package.json): development, build, and test scripts.
