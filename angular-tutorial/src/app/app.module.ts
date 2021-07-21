import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './tutorial/heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './tutorial/hero-detail/hero-detail.component';
import { ProductsComponent } from './product/product-list/products.component';
import { ProductsEditComponent } from './product/products-edit/products-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ArticleComponent } from './hackernews/article/article.component';
import { LikeComponent } from './hackernews/like/like.component';
import { ParentComponent } from './demo-output/parent/parent.component';
import { ChildComponent } from './demo-output/child/child.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    ProductsComponent,
    ProductsEditComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ArticleComponent,
    LikeComponent,
    ParentComponent,
    ChildComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimerComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
