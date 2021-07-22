import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './tutorial/heroes/heroes.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { DemoTemplateFormComponent } from './demo-template-form/demo-template-form.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { MusicPlaylistComponent } from './music-player/component/music-playlist/music-playlist.component';
import { SongPlayerComponent } from './music-player/component/song-player/song-player.component';

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
    CountdownTimerComponent,
    DemoTemplateFormComponent,
    TodoAppComponent,
    SignupFormComponent,
    SigninFormComponent,
    TimelinesComponent,
    MusicPlaylistComponent,
    SongPlayerComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
