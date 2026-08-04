import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface ProjectImage {
  src: string;
  alt: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  summary: string;
  tools: string[];
  images: ProjectImage[];
}

@Component({
  selector: 'app-experience-card',
  imports: [],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  @Input({ required: true }) project!: Project;

  activeImageIndex = 0;

  previousImage(): void {
    const imageCount = this.project.images.length;

    if (imageCount === 0) {
      return;
    }

    this.activeImageIndex = (this.activeImageIndex - 1 + imageCount) % imageCount;
  }

  nextImage(): void {
    const imageCount = this.project.images.length;

    if (imageCount === 0) {
      return;
    }

    this.activeImageIndex = (this.activeImageIndex + 1) % imageCount;
  }

  showImage(imageIndex: number): void {
    if (imageIndex < 0 || imageIndex >= this.project.images.length) {
      return;
    }

    this.activeImageIndex = imageIndex;
  }
}