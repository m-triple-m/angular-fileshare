import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-file-dashboard',
  templateUrl: './file-dashboard.component.html',
  styleUrls: ['./file-dashboard.component.css']
})
export class FileDashboardComponent implements OnInit {

  myfiles;
  currentUser;
  selectedFile;
  showDetails = false;

  constructor(private userservice: UserService, private fileservice: FileService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    this.getMyFiles();
  }

  deleteFile(id){
    this.fileservice.deleteFile(id).subscribe(data => {
      console.log(data);
    })
  }

  getMyFiles(){
    this.fileservice.getFilesByAdmin(this.currentUser._id).subscribe(data => {
      console.log(data);
      this.myfiles = data;
    })
  }

  getext(filename){
    let l = filename.split('.');
    return l[l.length-1];
  }

  onFileChanged(event){
    let formdata = new FormData();
    let file_names = [];
    for(let file of event.target.files){
      formdata.append('file', file, file.name);
      file_names.push({file : file.name, size :  file.size, admin : this.currentUser._id, created : new Date()});
      this.fileservice.uploadFile(formdata).subscribe(response => {
        console.log(file.name);
      })
    }

    

    for(let filedata of file_names){
      this.fileservice.addFile(filedata).subscribe(data => {
        console.log(data);
        this.getMyFiles();
      }); 
    }
  }

  getSize(s){
    let size = s/1024;
    if(size>1024){
      return `${(size/1024).toFixed(2)} MB`;
    }
    return `${(size).toFixed(2)} KB`;
  }

  toggleshowDetails(file){
    this.showDetails = true;
    this.selectedFile = file;
  }



}
