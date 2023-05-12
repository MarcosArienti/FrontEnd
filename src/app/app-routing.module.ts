import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeweducacionComponent } from './education/neweducacion.component';
import { EditExperienciaComponent } from './exp/edit-experiencia.component';
import { NewExperienciaComponent } from './exp/new-experiencia.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EditSkillComponent } from './skills/edit-skill.component';
import { NewSkillComponent } from './skills/new-skill.component';

const routes: Routes = [
  {path:'', component: HomeComponent,},
  {path:'login', component: LoginComponent,},
  {path: 'nuevaexp', component: NewExperienciaComponent,},
  {path: 'editexp/:id', component: EditExperienciaComponent,},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editedu/:id', component: NeweducacionComponent},
  {path: 'newskill', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
