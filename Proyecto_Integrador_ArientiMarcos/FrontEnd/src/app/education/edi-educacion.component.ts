import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Educacion } from '../model/educacion';
import { EducacionService } from '../service/educacion.service';

@Component({
  selector: 'app-edi-educacion',
  templateUrl: './edi-educacion.component.html',
  styleUrls: ['./edi-educacion.component.css']
})
export class EdiEducacionComponent implements OnInit{
  educacion: Educacion = null;
  
  constructor(private educacionS: EducacionService, private activatedRouter: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data =>{
        this.educacion = data;
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar educacion");
        this.router.navigate(['']);
      }
    )
  }


}
