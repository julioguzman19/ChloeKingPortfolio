import { Component } from '@angular/core';

import { Header } from './components/header/header';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Hero } from './sections/hero/hero';
import { Experience } from './sections/experience/experience';
import { Skills } from './sections/skills/skills';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Experience, Skills, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}