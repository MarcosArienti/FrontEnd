import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { SkillsComponent } from './skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ExpComponent } from './exp/exp.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './exp/new-experiencia.component';
import { EditExperienciaComponent } from './exp/edit-experiencia.component';
import { NeweducacionComponent } from './education/neweducacion.component';
import { EdiEducacionComponent } from './education/edi-educacion.component';
import { EditSkillComponent } from './skills/edit-skill.component';
import { NewSkillComponent } from './skills/new-skill.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AcercaDeComponent,
    SkillsComponent,
    ExpComponent,
    EducationComponent,
    FooterComponent,
    ProyectsComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EdiEducacionComponent,
    EditSkillComponent,
    NewSkillComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
