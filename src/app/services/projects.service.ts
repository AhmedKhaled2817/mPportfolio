import { Injectable } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  category: 'vanilla' | 'angular';
  technologies: string[];
  featured?: boolean;
  liveUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 'delivery',
      title: 'Delivery - HTML/SCSS/JS',
      description: 'A fully responsive delivery service website built with HTML, SCSS, and JavaScript. It features a sleek modern design with Dark Mode, scroll-based animations, and modular, clean code structure — ideal for showcasing logistics or delivery businesses.',
      githubUrl: 'https://github.com/AhmedKhaled2817/Delivery',
      category: 'vanilla',
      technologies: ['HTML5', 'SCSS', 'JavaScript'],
      featured: true
    },
    {
      id: 'perfume',
      title: 'Perfume - Responsive Landing Page',
      description: 'A modern and elegant perfume landing page built using HTML5, Tailwind CSS v3, and JavaScript (ES6). Features smooth scroll animations with ScrollReveal.js, icons from RemixIcon and FontAwesome, and a fully responsive design optimized for all screen sizes.',
      githubUrl: 'https://github.com/AhmedKhaled2817/Perfume',
      category: 'vanilla',
      technologies: ['HTML5', 'Tailwind CSS', 'JavaScript', 'ScrollReveal.js'],
      featured: true
    },
    {
      id: 'simple-restaurant',
      title: 'SimpleRestaurant - HTML/Tailwind/JS',
      description: 'A sleek and responsive restaurant landing page built using HTML, Tailwind CSS v3, and JavaScript. Features animated scroll effects with ScrollReveal.js, sliders using Swiper.js, and modern icon libraries like Remix Icons and FontAwesome.',
      githubUrl: 'https://github.com/AhmedKhaled2817/SimpleResturant',
      category: 'vanilla',
      technologies: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Swiper.js'],
      featured: true
    },
    {
      id: 'portfolio-old',
      title: 'Portfolio - HTML/CSS/JS',
      description: 'A professional portfolio website to showcase projects, skills, and contact information — built with HTML, CSS, Bootstrap 5, and JavaScript with smooth scrolling, animations, and responsive layout.',
      githubUrl: 'https://github.com/AhmedKhaled2817/Portfolio',
      category: 'vanilla',
      technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript']
    },
    {
      id: 'shopping',
      title: 'Shopping UI - HTML/CSS/JS',
      description: 'A clean and responsive product showcase layout with category filtering functionality. Built with HTML5, CSS3, Bootstrap 5, and jQuery to demonstrate UI design and interaction logic.',
      githubUrl: 'https://github.com/AhmedKhaled2817/shopping',
      category: 'vanilla',
      technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'jQuery']
    },
    {
      id: 'travel',
      title: 'TravelWebsite - HTML/CSS/JS',
      description: 'A beautiful and interactive travel agency website featuring destination showcases, testimonial sliders, scroll animations, and dark mode — fully responsive and built with HTML5, CSS3, and JavaScript.',
      githubUrl: 'https://github.com/AhmedKhaled2817/TravelWebsite',
      category: 'vanilla',
      technologies: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
      id: 'realstate',
      title: 'RealState - HTML/CSS/JS',
      description: 'A fully responsive real estate website featuring a modern layout, dark mode toggle, scroll animations, and clean property sections — ideal for showcasing real estate agencies or landing pages.',
      githubUrl: 'https://github.com/AhmedKhaled2817/RealState',
      category: 'vanilla',
      technologies: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
      id: 'ecar',
      title: 'ECar - HTML/CSS/JS',
      description: 'A fully responsive electric car landing page built with HTML5, CSS3, and JavaScript. It features scroll animations, interactive carousels, and a clean, modern layout ideal for automotive showcases.',
      githubUrl: 'https://github.com/AhmedKhaled2817/ECar',
      category: 'vanilla',
      technologies: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
      id: 'ebook',
      title: 'EBook - HTML/CSS/JS',
      description: 'A sleek eBook website design built with HTML, CSS, and JavaScript. Features clean layout, responsive design, and interactive elements for a seamless reading experience.',
      githubUrl: 'https://github.com/AhmedKhaled2817/EBook',
      category: 'vanilla',
      technologies: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
      id: 'quiz-app',
      title: 'QuizApp - HTML/CSS/JS',
      description: 'An interactive quiz application that dynamically presents questions, tracks the score, and gives instant feedback to the user. Built with HTML, CSS, and vanilla JavaScript.',
      githubUrl: 'https://github.com/AhmedKhaled2817/QuizApp',
      category: 'vanilla',
      technologies: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
      id: 'food-restaurant',
      title: 'Food Restaurant Website - HTML/CSS/JS',
      description: 'A fully responsive restaurant landing page featuring a sleek homepage, interactive menu, and a reservation form — built using HTML5, CSS3, and JavaScript.',
      githubUrl: 'https://github.com/AhmedKhaled2817/FoodResturant',
      category: 'vanilla',
      technologies: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
      id: '50-projects',
      title: '50 Mini Projects - HTML, CSS, JS',
      description: 'A collection of 50+ interactive front-end mini projects that demonstrate core JavaScript functionality, DOM manipulation, and UI/UX design skills.',
      githubUrl: 'https://github.com/AhmedKhaled2817/50-Project-HTML-CSS-JS',
      category: 'vanilla',
      technologies: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
      id: 'bank-management',
      title: 'Bank Management System - C++',
      description: 'A console-based application simulating essential banking operations like account creation, deposit, withdrawal, and data storage, using OOP concepts in C++.',
      githubUrl: 'https://github.com/AhmedKhaled2817/Bank-Management-System',
      category: 'vanilla',
      technologies: ['C++', 'OOP']
    },
    {
      id: 'library-management',
      title: 'Library Management System - C++',
      description: 'A simple digital library system that manages book listings, borrowing, and returns through a structured OOP design and file handling in C++.',
      githubUrl: 'https://github.com/AhmedKhaled2817/Electronic-Library-Management-System-ELMS',
      category: 'vanilla',
      technologies: ['C++', 'OOP']
    },
    // Angular Projects
    {
      id: 'profile-card-01',
      title: 'Profile Card - Angular',
      description: 'A modern profile card component built with Angular, featuring clean design and smooth animations. Demonstrates component-based architecture and Angular best practices.',
      githubUrl: 'https://github.com/AhmedKhaled2817/profileCard-01',
      category: 'angular',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      featured: true
    },
    {
      id: 'counter-02',
      title: 'Counter App - Angular',
      description: 'An interactive counter application built with Angular. Features increment, decrement, and reset functionality with smooth UI transitions and state management.',
      githubUrl: 'https://github.com/AhmedKhaled2817/counter-02',
      category: 'angular',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      featured: true
    },
    {
      id: 'todo-app-03',
      title: 'Todo App - Angular',
      description: 'A full-featured todo application built with Angular. Includes add, edit, delete, and mark as complete functionality with local storage persistence.',
      githubUrl: 'https://github.com/AhmedKhaled2817/todoApp-03',
      category: 'angular',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      featured: true
    },
    {
      id: 'stopwatch-app-04',
      title: 'Stopwatch App - Angular',
      description: 'A professional stopwatch application with start, pause, reset, and lap time features. Built with Angular and featuring precise timing functionality.',
      githubUrl: 'https://github.com/AhmedKhaled2817/stopWatchApp-04',
      category: 'angular',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      featured: true
    },
    {
      id: 'guess-number-game-05',
      title: 'Guess Number Game - Angular',
      description: 'An interactive number guessing game built with Angular. Features game logic, score tracking, and engaging user experience with hints and feedback.',
      githubUrl: 'https://github.com/AhmedKhaled2817/guessNumberGame-05',
      category: 'angular',
      technologies: ['Angular', 'TypeScript', 'SCSS']
    },
    {
      id: 'tic-tac-toe-06',
      title: 'Tic Tac Toe Game - Angular',
      description: 'A classic tic-tac-toe game implementation using Angular. Features two-player mode, win detection, and game state management with a modern UI.',
      githubUrl: 'https://github.com/AhmedKhaled2817/tic-tac-toe-06',
      category: 'angular',
      technologies: ['Angular', 'TypeScript', 'SCSS']
    },
    {
      id: 'dynamic-filter-list',
      title: 'Dynamic Filter List - Angular',
      description: 'A dynamic list component with advanced filtering capabilities. Built with Angular, featuring real-time search, category filtering, and responsive design.',
      githubUrl: 'https://github.com/AhmedKhaled2817/dynamicFilterList',
      category: 'angular',
      technologies: ['Angular', 'TypeScript', 'SCSS']
    },
    {
      id: 'feedback-form',
      title: 'Feedback Form - Angular',
      description: 'A comprehensive feedback form built with Angular. Features form validation, multiple input types, and user-friendly error handling with reactive forms.',
      githubUrl: 'https://github.com/AhmedKhaled2817/FeedbackForm',
      category: 'angular',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Reactive Forms']
    },
    {
      id: 'e-commerce',
      title: 'E-Commerce - Angular',
      description: 'A full-featured e-commerce application built with Angular. Includes product listing, shopping cart, checkout process, and modern UI/UX design.',
      githubUrl: 'https://github.com/AhmedKhaled2817/E-Commerce',
      liveUrl: 'https://e-commerce-plum-psi.vercel.app/public/home',
      category: 'angular',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      featured: true
    },
    {
      id: 'display-data-ngrx',
      title: 'Display Data Using NgRx - Angular',
      description: 'An Angular application demonstrating NgRx state management. Features data fetching, state management, and reactive programming patterns with NgRx store.',
      githubUrl: 'https://github.com/AhmedKhaled2817/DisplayDataUsingNgrx',
      liveUrl: 'https://display-data-using-ngrx.vercel.app/products',
      category: 'angular',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'NgRx'],
      featured: true
    }
  ];

  getProjects(category?: 'vanilla' | 'angular'): Project[] {
    if (category) {
      return this.projects.filter(p => p.category === category);
    }
    return this.projects;
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(p => p.featured);
  }
}

