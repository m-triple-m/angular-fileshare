import { Injectable } from '@angular/core';
import { configs } from './config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  url = configs.api_url+'/file';
  constructor(private http: HttpClient) { }

  addFile(data){
    return this.http.post(this.url+'/add', data);
  }

  uploadFile(data){
    return this.http.post(this.url+'/upload', data);
  }

  updateFile(id, data){
    return this.http.put(this.url+'/update/'+id, data);
  }

  getFilesByAdmin(id){
    return this.http.get(this.url+'/getbyadmin/'+id);
  }

  getSharedFiles(id){
    return this.http.get(this.url+'/getshared/'+id);
  }

  deleteFile(id){
    return this.http.delete(this.url+'/delete/'+id);
  }
}
