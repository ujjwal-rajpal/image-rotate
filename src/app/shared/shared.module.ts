import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import  { MyMaterialModule } from './material.module';
import { DefaultImagePipe } from './default-image.pipe';


@NgModule({
  declarations: [DefaultImagePipe],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,
    MyMaterialModule 
  ],
  exports:[
    FlexLayoutModule,
    MyMaterialModule,
    DefaultImagePipe
  ]
})
export class SharedModule { }
