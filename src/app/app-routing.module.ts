/**
 * created by: ujjwal
 * modified by: ujjwal
 * purpose: to define routing
 * created on: 20th April, 2020
 * 
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
    { path: '', loadChildren: ()=> import('./image-rotate/image-rotate.module').then(m=>m. ImageRotateModule ) },
  ];
  
  @NgModule({
      imports:[RouterModule.forRoot(routes)],
      exports:[RouterModule]
  })
  
  export class AppRoutingModule{}