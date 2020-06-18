import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-sharedfile-dashboard',
  templateUrl: './sharedfile-dashboard.component.html',
  styleUrls: ['./sharedfile-dashboard.component.css']
})
export class SharedfileDashboardComponent implements OnInit {

  sharedfiles;
  currentUser;

  constructor(private fileservice: FileService) {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
  }

  ngOnInit(): void {
    this.getSharedFiles();
  }

  getSharedFiles(){
    this.fileservice.getSharedFiles(this.currentUser._id).subscribe(data => {
      console.log(data);
      this.sharedfiles = data;
    })
  }

  getext(filename){
    let l = filename.split('.');
    return l[l.length-1];
  }

}
