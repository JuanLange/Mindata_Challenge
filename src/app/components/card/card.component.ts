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

  private checkCardType<T extends Card>(card: Card, variant: T['variant']): card is T {
    return card.variant === variant;
  }

  isUsersCard(card: Card): card is UsersCard {
    return this.checkCardType<UsersCard>(card, 'users');
  }

  isProfileCard(card: Card): card is ProfileCard {
    return this.checkCardType<ProfileCard>(card, 'profile');
  }

  isProductCard(card: Card): card is ProductCard {
    return this.checkCardType<ProductCard>(card, 'product');
  }

  isArtCard(card: Card): card is ArtCard {
    return this.checkCardType<ArtCard>(card, 'art');
  }
}
