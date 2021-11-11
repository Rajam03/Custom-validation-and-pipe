import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators , FormControl} from '@angular/forms';
import { MatTableDataSource} from '@angular/material/table';
import { apiservice } from './api.service';
@Component({
  selector: 'app-customvalidation',
  templateUrl: './customvalidation.component.html',
  styleUrls: ['./customvalidation.component.css']
})
export class CustomvalidationComponent implements OnInit {
  form:FormGroup;
  datas:any;
  datarefresh:any;
  getData:any;
  displayedColumns:any[] = ['username', 'mail','gender','actions'];
  dataSource: MatTableDataSource<any>;
  constructor( private service:apiservice, private http:HttpClient) { 
  this.form=new FormGroup({
    username:new FormControl('',[Validators.required]),
    mail:new FormControl('',[Validators.required,
    Validators.pattern("[^ @]*@[^ @]*"),
    emailDomainValidator]),
    gender:new FormControl('',Validators.required)
  })
  }
  get f() { return this.form.controls; }
  ngOnInit() {
  this.get();
}
add(value:any):void{
  console.log(value);
  if (this.form.valid) {
    let url = "http://localhost:3000/people";     
      this.http.post(url, value).subscribe((res:any )=> console.log(res));  
	}
  this.get();
  this.form.reset();
}
get(){
  this.service.getdata().subscribe((data)=>{
    this.datas=data;
    console.log(this.datas);
    this.dataSource=new MatTableDataSource(this.datas);
  })
}
delete(id){
  var del=confirm("Do you want to delete?");
  if(del){
    this.service.delete(id).subscribe(); 
  }
  this.get();
}
}
function emailDomainValidator(control: FormControl) { 
  let email = control.value; 
  if (email && email.indexOf("@") != -1) { 
    let [_, domain] = email.split("@"); 
    if (domain !== "gmail.com") { 
      return {
        emailDomain: {
          parsedDomain: domain
        }
      }
    }
  }
  return null; 
}
