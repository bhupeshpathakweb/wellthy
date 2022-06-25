import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LinkFormComponent } from './components/link-form/link-form.component';

@NgModule({
  declarations: [HomeComponent, LinkFormComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [HomeComponent],
})
export class HomeModule {}

