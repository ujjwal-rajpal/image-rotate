import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { ImageRouteModule } from './image-route.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ImagePreviewComponent],
  imports: [
    CommonModule,
    ImageRouteModule,
    SharedModule,

    
  ]
})
export class ImageRotateModule { }
