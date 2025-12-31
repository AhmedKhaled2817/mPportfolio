import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  aboutPoints = [
    {
      icon: '🎯',
      title: 'Aspiring Full Stack Developer',
      description: 'Angular | .NET'
    },
    {
      icon: '💡',
      title: 'Passionate About',
      description: 'Software Engineering, Problem Solving, and Building Scalable Applications'
    },
    {
      icon: '🚀',
      title: 'Focused On',
      description: 'Strong foundations in both Frontend and Backend development'
    }
  ];

  focusAreas = [
    {
      icon: '📘',
      title: 'Software Engineering Fundamentals',
      description: 'Solid understanding of development principles and best practices'
    },
    {
      icon: '💻',
      title: 'Operating Systems & Networks',
      description: 'Knowledgeable in OS architecture and network protocols'
    },
    {
      icon: '🧠',
      title: 'C++ Programming',
      description: 'GOOD in OOP, Data Structures, and Algorithms'
    }
  ];

  frontendJourney = [
    '✅ Mastered HTML5, CSS3, and JavaScript',
    '🔨 Built multiple mini projects to strengthen core concepts',
    '⚙️ Progressed into TypeScript and Angular for scalable web development'
  ];

  backendJourney = [
    '🎯 Learning .NET and C# for enterprise-grade backend solutions',
    '🗃️ Exploring Database Design, APIs, and CRUD operations'
  ];
}

