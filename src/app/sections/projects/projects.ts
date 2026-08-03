import { Component, signal } from '@angular/core';

interface ProjectImage {
  src: string;
  alt: string;
  stage: 'Design' | 'Prototyping' | 'Testing' | 'Manufacturing';
}

interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  tools: string[];
  images: ProjectImage[];
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly projects: Project[] = [
    {
      id: 'engine',
      title: 'Pipsqueak Engine',
      category: 'Mechanical Systems',
      summary:
        'Designed, fabricated, assembled, and tested a functioning mechanical engine.',
      tools: ['SolidWorks', 'Machining', 'Assembly', 'Testing'],
      images: [
        {
          src: 'images/projects/engine-design.webp',
          alt: 'CAD design of the Pipsqueak engine',
          stage: 'Design',
        },
        {
          src: 'images/projects/engine-prototype.webp',
          alt: 'Prototype components for the Pipsqueak engine',
          stage: 'Prototyping',
        },
        {
          src: 'images/projects/engine-testing.webp',
          alt: 'Testing the assembled Pipsqueak engine',
          stage: 'Testing',
        },
        {
          src: 'images/projects/engine-manufacturing.webp',
          alt: 'Manufactured components of the Pipsqueak engine',
          stage: 'Manufacturing',
        },
      ],
    },
    {
      id: 'project-two',
      title: 'Project Two',
      category: 'Product Design',
      summary:
        'Briefly explain the problem, your contribution, and the final engineering result.',
      tools: ['SolidWorks', '3D Printing', 'DFM'],
      images: [
        {
          src: 'images/projects/project-two-design.webp',
          alt: 'Design stage of project two',
          stage: 'Design',
        },
        {
          src: 'images/projects/project-two-prototype.webp',
          alt: 'Prototype stage of project two',
          stage: 'Prototyping',
        },
        {
          src: 'images/projects/project-two-testing.webp',
          alt: 'Testing stage of project two',
          stage: 'Testing',
        },
        {
          src: 'images/projects/project-two-manufacturing.webp',
          alt: 'Manufacturing stage of project two',
          stage: 'Manufacturing',
        },
      ],
    },
    {
      id: 'project-three',
      title: 'Project Three',
      category: 'Testing & Analysis',
      summary:
        'Describe what was evaluated, how the design changed, and what you learned.',
      tools: ['Analysis', 'Instrumentation', 'Validation'],
      images: [
        {
          src: 'images/projects/project-three-design.webp',
          alt: 'Design stage of project three',
          stage: 'Design',
        },
        {
          src: 'images/projects/project-three-prototype.webp',
          alt: 'Prototype stage of project three',
          stage: 'Prototyping',
        },
        {
          src: 'images/projects/project-three-testing.webp',
          alt: 'Testing stage of project three',
          stage: 'Testing',
        },
        {
          src: 'images/projects/project-three-manufacturing.webp',
          alt: 'Manufacturing stage of project three',
          stage: 'Manufacturing',
        },
      ],
    },
  ];

  private readonly activeIndexes = signal<Record<string, number>>({});

  protected activeImageIndex(projectId: string): number {
    return this.activeIndexes()[projectId] ?? 0;
  }

  protected showImage(projectId: string, imageIndex: number): void {
    this.activeIndexes.update((indexes) => ({
      ...indexes,
      [projectId]: imageIndex,
    }));
  }

  protected previousImage(project: Project): void {
    const currentIndex = this.activeImageIndex(project.id);
    const previousIndex =
      currentIndex === 0 ? project.images.length - 1 : currentIndex - 1;

    this.showImage(project.id, previousIndex);
  }

  protected nextImage(project: Project): void {
    const currentIndex = this.activeImageIndex(project.id);
    const nextIndex = (currentIndex + 1) % project.images.length;

    this.showImage(project.id, nextIndex);
  }
}