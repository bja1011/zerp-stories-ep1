import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { GameModule } from './game/game.module';
import { PlayGameComponent } from './game/components/play-game/play-game.component';
import { MyMaterialModule } from './my-material/my-material.module';
import { AssetsService } from './providers/assets.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { gameReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './store/effects';

const appRoutes: Routes = [
  {path: '', component: PlayGameComponent},
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GameModule,
    RouterModule.forRoot(appRoutes),
    MyMaterialModule,
    StoreModule.forRoot(
      {
        application: gameReducer,
      }
    ),
    EffectsModule.forRoot([
      GameEffects,
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !environment.production
    }),
  ],
  providers: [
    AssetsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

