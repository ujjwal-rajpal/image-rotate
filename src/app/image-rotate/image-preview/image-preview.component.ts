import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit {
  imageUrl
  rotateValue:string = 'rotate(0deg)';
  rotation = 0
  constructor() {

  }

  ngOnInit(): void {

  }
  /**
     * 
     *  update and see image preview
     */
  updateFile(event) {
    if (event.target.files.length == 0) {
      return
    }
    let file = event.target.files[0];
    // after here 'file' can be accessed and used for further process
    let type = file.name.split('.')
    if ((file.size / (1024 * 1024)) > 1) {
      file = null;
      alert("No file uploaded or File Uploaded is greater than 1024kb.");
      return;
      // check image type
    } else if (type[1] === 'jpeg' || type[1] === 'png' || type[1] === 'jpg' || type[1] === 'gif' || type[1] === 'bmp' || type[1] === 'tif' || type[1] === 'tiff') {
      const reader = new FileReader();
      
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      }
      reader.readAsDataURL(file)

    }else
    alert("No file uploaded or File Uploaded is greater than 1024kb.");
    return;
  }
  rotate(param){
    if(param == 'right'){
    this.rotation = this.rotation+90;      
    }else if(param='left'){
      this.rotation = this.rotation-90;
    }
    this.rotateValue = `rotate(${this.rotation}deg)`
  }
}
