import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';


const routes : Routes = [

  //Full para que no angular no se confunda con el string vacio y no redirija donde no se debe
  {
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full'
  },
  {
    path:'region',
    component: PorRegionComponent,

  },
  {
    path:'capital',
    component: PorCapitalComponent,

  },
  {
    path: 'pais/:id',
    component: VerPaisComponent,

  },
  // ** cualquier otro path que no sean los definidos
  {
    path: '**',
    redirectTo: ''

  }
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)


  ],

  exports:[
    RouterModule

  ],


})

export class AppRoutingModule{}
