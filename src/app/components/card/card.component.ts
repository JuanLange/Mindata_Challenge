import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card, UsersCard, ProfileCard, ProductCard, ArtCard } from '../../models/card.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data!: Card;

  get variant() {
    return this.data.variant;
  }

  isUsersCard(card: Card): card is UsersCard {
    return card.variant === 'users';
  }

  isProfileCard(card: Card): card is ProfileCard {
    return card.variant === 'profile';
  }

  isProductCard(card: Card): card is ProductCard {
    return card.variant === 'product';
  }

  isArtCard(card: Card): card is ArtCard {
    return card.variant === 'art';
  }
}
