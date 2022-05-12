import { Component, OnInit } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-cakes',
  templateUrl: './update-cakes.component.html',
  styleUrls: ['./update-cakes.component.css']
})
export class UpdateCakesComponent implements OnInit {

  id!:number;

  cake:any;

  constructor(private http:HttpClient, private route:ActivatedRoute,private toastrService: ToastrService) {
    this.id = this.route.snapshot.params["id"];
   }

  ngOnInit(): void {
   
    this.getCake();
  }
  cakes!:any;
  updatecakes()
  {
    const url="http://localhost:8080/cake/"+this.id;
      this.http.put(url,this.cake).subscribe((res)=>{
        console.log(res);
        this.toastrService.success('successfully updated');
      },(err)=>{
        console.log(err);
        this.toastrService.error(err.error.meaasge)
      });
    }
      getCake()
      {
        const url="http://localhost:8080/cake/"+this.id;
        this.http.get(url).subscribe((res)=>{
          this.cakes = res;
      });
   }
 }
  
