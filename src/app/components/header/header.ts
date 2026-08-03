import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';

type SectionId = 'home' | 'projects' | 'skills' | 'about' | 'contact';

interface NavigationItem {
  id: SectionId;
  label: string;
}

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements AfterViewInit, OnDestroy {
  protected readonly activeSection = signal<SectionId>('home');

  protected readonly navigationItems: NavigationItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const sections = document.querySelectorAll<HTMLElement>(
      '#home, #projects, #skills, #about, #contact',
    );

    this.observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          this.activeSection.set(visibleSection.target.id as SectionId);
        }
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      },
    );

    sections.forEach((section) => this.observer?.observe(section));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}