import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

  constructor(private http:HttpClient,private toastrservice: ToastrService) { }

  ngOnInit(): void {
    this.getAllCakes();
    
  }
  cakes:any;
  getAllCakes() {
    const url="http://localhost:8080/cake/list"
    this.http.get(url).subscribe((res)=>{
      this.cakes= res;
    },err=>{
    }
    )

    }
    deletecake(id:any){;
      let cfm = confirm("Do you want to Delete this cake ?");
      if(cfm){
      const url="http://localhost:8080/cake/" + id;
      this.http.delete(url).subscribe((res)=>{
        console.log(res);
        this.toastrservice.success("cake deleted successfully");
        this.getAllCakes();
      },(err)=>{
        this.toastrservice.error("Sorry can cannot deleted");
      })
    }
  
    }
  }
  
