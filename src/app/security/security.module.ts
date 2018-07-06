import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {environment} from '../../environments/environment';
import {JwtModule} from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import {SegurancaRoutingModule} from './security.routing';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: environment.tokenWhitelistedDomains,
        blacklistedRoutes: environment.tokenBlacklistedRoutes
      }
    }),
    SegurancaRoutingModule
  ],
  declarations: [LoginComponent]
})
export class SecurityModule { }
