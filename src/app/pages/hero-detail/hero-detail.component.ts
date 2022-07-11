import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location, CommonModule } from "@angular/common";

import { Hero } from '../../services/hero/hero';
import { HeroService } from '../../services/hero/hero.service';

export interface AddressForm {
  zip: FormControl<string | null>
}

export interface PersonForm {
  name: FormControl<string | null>;
  address: FormGroup<AddressForm>;
  interest: FormArray<FormControl<string | null>>;
}

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [ FormsModule, CommonModule, ReactiveFormsModule ],
  providers: [ HeroService ],
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.scss' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;
  personalForm: FormGroup<PersonForm>;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
    this.personalForm = new FormGroup<PersonForm>({
      name: new FormControl('Mike', Validators.required),
      address: new FormGroup({
        zip: new FormControl('', Validators.required)
      }),
      interest: new FormArray([new FormControl('')])
    })
  }

  get interest(): FormArray {
    return this.personalForm.get('interest') as FormArray;
  }

  get address() {
    return this.personalForm.get('address') as FormGroup;
  }

  ngOnInit(): void {
    this.getHero();
  }

  addInterest(): void {
    this.interest.push(new FormControl(''));
  }

  deleteInterest(index: number) {
    this.interest.removeAt(index);
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => {
        this.hero = hero;
        this.personalForm.patchValue({ name: this.hero.name })
      });
  }

  goBack(): void {
    this.location.back();
  }
}
