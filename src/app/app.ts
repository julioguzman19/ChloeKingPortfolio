import { Component } from '@angular/core';

import { Header } from './components/header/header';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Projects, Skills, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}