import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImagePreviewComponent } from './image-preview/image-preview.component';


const routes: Routes = [
    { path: 'ujj', component: ImagePreviewComponent },
    { path: '',
    redirectTo: '/ujj',
    pathMatch: 'full'
  },  
    
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ImageRouteModule{}