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

  private sections: HTMLElement[] = [];
  private animationFrameId: number | null = null;

  private readonly handleScroll = (): void => {
    if (this.animationFrameId !== null) {
      return;
    }

    this.animationFrameId = requestAnimationFrame(() => {
      this.animationFrameId = null;
      this.updateActiveSection();
    });
  };

  ngAfterViewInit(): void {
    this.sections = this.navigationItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    window.addEventListener('scroll', this.handleScroll, { passive: true });
    window.addEventListener('resize', this.handleScroll);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => this.updateActiveSection());
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleScroll);

    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  private updateActiveSection(): void {
    const header = document.getElementById('site-header');
    const headerHeight = header?.offsetHeight ?? 0;

    // Activate a section shortly after it passes beneath the sticky header.
    const activationPoint = window.scrollY + headerHeight + 48;

    // Ensure Contact activates when the user reaches the bottom.
    const isAtBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    if (isAtBottom) {
      this.activeSection.set('contact');
      return;
    }

    let currentSection: SectionId = 'home';

    for (const section of this.sections) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      if (sectionTop <= activationPoint) {
        currentSection = section.id as SectionId;
      } else {
        break;
      }
    }

    this.activeSection.set(currentSection);
  }
}