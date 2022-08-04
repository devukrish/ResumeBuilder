import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResumeserviceService {

  baseUri: String = '/api';
  currentTemp:any='';
  constructor(private http: HttpClient) { }
  data ={
    educational: {
      qualification: '',
      courseDetails: '',
      institution: '',
      startDate: '',
      course: '',
      endDate: '',
    },
    personal: {
  
      name: '',
      role: '',
      aboutMe: '',
      email: '',
      phone: '',
      image: '',
      address: '',
      city: '',
      pin: ''
  
  
    },
    workexp:
    {
      jobProfile: '',
      startDate: '',
      companName: '',
      endDate: '',
      jobDescription: '',
    },
    skills:
    {
      skill: '',
    
    },
    hobbies:
    {
      hobby: '',
  
    }
    
  
  }
  

  senddata(data:any){
    console.log(data);
    return this.http.post('/api/insert', {data})
    .subscribe((data)=>console.log('returndata'));
  }


  getdata(){
    return this.http.get('/api/resdata')
    
  }

  getEditdata(){
    return this.http.get('/api/getDetails')
  }
 getTemp(){
  return this.http.get('/api/getTemp')
 }

  sendTempid(id:any){
    return this.http.post('/api/sendTempid', {id})
    .subscribe((data)=>console.log('return temp data',data));
  }

  sendprofileimage(imageData:any){
    return this.http.post('/api/imageUpload', {imageData})
    .subscribe((data)=>console.log('image added successfully'));
  }

  chooseTemp(data:any){
    if(localStorage.getItem('temp')!==data){
      localStorage.setItem('temp',data);

    }
    
  }

  getCurrentTemp(){
    return this.currentTemp;
  }
}



