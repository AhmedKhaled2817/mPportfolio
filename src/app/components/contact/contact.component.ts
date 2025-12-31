import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'ahmedkhaled2817@gmail.com',
      link: 'mailto:ahmedkhaled2817@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Ahmed Khaled',
      link: 'https://www.linkedin.com/in/ahmed-khaled-39242423a/'
    },
    {
      icon: '🧑💻',
      label: 'GitHub',
      value: '@AhmedKhaled2817',
      link: 'https://github.com/AhmedKhaled2817'
    }
  ];

  openLink(url: string) {
    window.open(url, '_blank');
  }
}

