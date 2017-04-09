import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.css']
})
export class FileuploaderComponent implements OnInit {
@Output('upload') currfile=  new EventEmitter();
@Input() tag;
@Input() accept;
private inputname="";
  constructor() { }

  ngOnInit() {
    console.log(this.accept);
  }
  onupload(event){
    console.log(event.target.files[0]);
     var reader = new FileReader();
  
  reader.onloadend = (e)=>{
    this.currfile.emit(reader.result);
     
    }

    reader.readAsDataURL(event.target.files[0]);

  }

}
