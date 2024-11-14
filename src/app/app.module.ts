// MODULOS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTokenInterceptor } from './utils/add-token.interceptor';


//COMPONENTES
import { HomeComponent } from './page/home/home.component';
import { PlayGameComponent } from './page/play-game/play-game.component';
import { UserViewComponent } from './page/user-view/user-view.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { WordGameComponent } from './page/play-game/word-game/word-game.component';;
import { ModifyUserComponent } from './page/modify-user/modify-user.component';
import { RankingComponent } from './page/ranking/ranking.component';
import { NavComponent } from './page/nav/nav.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LoginComponent } from './components/login/login.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    PlayGameComponent,
    UserViewComponent,
    LoginComponent,
    WordGameComponent,
    ModifyUserComponent,
    RankingComponent,
    NavComponent,
    SignInComponent,
    SpinnerComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true, 
    }),
  ],
  providers: [provideHttpClient(),  { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
