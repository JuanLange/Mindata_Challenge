import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[] = [
    {
      variant: 'users',
      title: 'Minim dolorin',
      description: 'Minim dolor in amet nulla laboris enim dolore consequat.',
      users: [
        {
          name: 'Wade Warren',
          role: 'Dog Trainer',
          avatar: 'assets/avatars/avatar-1.jpg'
        },
        {
          name: 'Robert Fox',
          role: 'President of Sales',
          avatar: 'assets/avatars/avatar-2.jpg'
        },
        {
          name: 'Jane Cooper',
          role: 'Nursing Assistant',
          avatar: 'assets/avatars/avatar-3.jpg'
        },
        {
          name: 'Frank Esteban',
          role: 'Software Tester',
          avatar: 'assets/avatars/avatar-4.jpg'
        },
        {
          name: 'Dianne Russell',
          role: 'Web Designer',
          avatar: 'assets/avatars/avatar-5.jpg'
        }
      ],
      totalStudents: 543
    },
    {
      variant: 'profile',
      name: 'Savannah Nguyen',
      role: 'Web Development',
      avatar: 'assets/avatars/profile.jpg',
      gradientStart: '#FE0757',
      gradientEnd: '#F67302',
      button1: 'BUTTON',
      button2: 'BUTTON'
    },
    {
      variant: 'product',
      title: 'Strawberry Cake',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      image: 'assets/products/cake.jpg',
      currentPrice: 13.90,
      oldPrice: 18.90,
      icons: ['assets/icons/leaf.svg', 'assets/icons/fire.svg']
    },
    {
      variant: 'art',
      title: 'Ui card long title for test',
      description: 'Minim dolor in amet nulla laboris enim dolore consequat.',
      image: 'assets/art/painting.jpg'
    }
  ];
}
