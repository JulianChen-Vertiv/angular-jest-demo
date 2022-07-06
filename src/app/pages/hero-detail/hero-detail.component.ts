import { FormsModule } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location, CommonModule } from "@angular/common";

import { Hero } from '../../services/hero/hero';
import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  providers: [ HeroService ],
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
