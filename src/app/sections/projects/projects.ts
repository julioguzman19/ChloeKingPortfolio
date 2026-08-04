import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Project, ProjectCard } from '../../components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  readonly projects: Project[] = [
    {
      id: 1,
      title: 'Manifold Design & Humidity Characterization',
      summary:
        'Led a team through concept development for a gas-delivery manifold and evaluated pressure drop across existing humidity-control technologies.',
      tools: [
        'Team Leadership',
        'System Design',
        'Pressure-Drop Testing',
        'Experimental Testing',
      ],
      images: [
        {
          src: 'images/gentext_brainstorm.png',
          alt: 'Engineering team organizing concepts for a gas-delivery manifold',
          label: 'Manifold Development',
        },
        {
          src: 'images/gentex_nafion.png',
          alt: 'Nafion and Perma Pure humidity-control technology being evaluated',
          label: 'Humidity Characterization',
        },
      ],
    },
    {
      id: 2,
      title: 'Pressure, Humidity & Sensor Development',
      summary:
        'Developed experimental gas-supply and humidity-generation systems and supported a process for applying nanofibers consistently onto sensors.',
      tools: [
        'Alicat Flow Control',
        'Swagelok',
        'Prototype Development',
        'Process Testing',
      ],
      images: [
        {
          src: 'images/gentex_alicats.png',
          alt: 'Gas-flow test system using Alicat flow meters, tubing, and fittings',
          label: 'Regulated Gas Supply',
        },
        {
          src: 'images/gentex_expresso.png',
          alt: 'Modified espresso maker used to investigate pressure and humidity generation',
          label: 'Humidity Generation',
        },
        {
          src: 'images/gentex_sprayer.png',
          alt: 'Experimental equipment used to apply nanofibers evenly onto sensors',
          label: 'Nanofiber Deposition',
        },
      ],
    },
    {
      id: 3,
      title: 'X-Ray Subsystem & Production Engineering',
      summary:
        'Led subsystem development, demonstrated safe high-voltage operation, validated production processes, trained technicians, and supported design improvements using engineering analysis.',
      tools: [
        'System Integration',
        'Verification & Validation',
        'FEA & CFD',
        'Technician Training',
      ],
      images: [
        {
          src: 'images/varex_qew.png',
          alt: 'Safe testing and operation of a high-voltage x-ray subsystem',
          label: 'High-Voltage Subsystem',
        },
      ],
    },
    {
      id: 4,
      title: 'Quinoa Processing System',
      summary:
        'Studied an existing agricultural process and helped develop a motorized quinoa washing system using a steel frame, mixing assembly, and lifting mechanism.',
      tools: [
        'Human-Centered Design',
        'Fabrication',
        'Process Development',
        'Field Testing',
      ],
      images: [
        {
          src: 'images/peru_farmer.png',
          alt: 'Existing quinoa-processing methods observed in a rural Peruvian community',
          label: 'Process Research',
        },
        {
          src: 'images/peru_washingMachine.png',
          alt: 'Motorized quinoa washing system developed for small-scale processing',
          label: 'Quinoa Washer',
        },
      ],
    },
  ];
}