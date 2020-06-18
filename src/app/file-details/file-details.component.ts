import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { FileService } from '../file.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.css']
})
export class FileDetailsComponent implements OnInit {

  @Input('filedata') file;
  currentUser;
  constructor(private userservice: UserService, private fileservice: FileService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
  }

  shareFile(username) {

    this.userservice.getUserByUsername(username).subscribe(data => {
      console.log(data);
      if(data){
        if(!this.memberExists(data) && !(data['_id'] == this.currentUser._id)){
          let member = data;
          this.file.sharedto.push(data['_id']);
          console.log(this.file);
          this.fileservice.updateFile(this.file._id, {sharedto : this.file.sharedto}).subscribe(data => {
            console.log(data);
          });
        }else{
          Swal.fire({
            icon : 'info',
            title: 'Already Exists!',
            text : 'Username already exists'
          })
        }
      }else{
        Swal.fire({
          icon : 'error',
          title: 'Not Found!',
          text : 'Username not found'
        })
      }
    });
  }

  memberExists(sel_member){
    return this.file.sharedto.includes(sel_member._id);
    // for(let member of this.file.sharedto){
    //   console.log(member);
    //   if(member._id == sel_member._id){
    //     console.log(sel_member);
    //     return true;
    //   }
    // }
    // return false;
  }

}
