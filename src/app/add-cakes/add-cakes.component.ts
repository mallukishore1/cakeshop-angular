import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CakesComponent } from '../cakes/cakes.component';

@Component({
  selector: 'app-add-cakes',
  templateUrl: './add-cakes.component.html',
  styleUrls: ['./add-cakes.component.css']
})
export class AddCakesComponent implements OnInit {
  name!: String;
  price!: string;

  constructor(private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  addcakes(){;
  const userObj={"name":this.name,"price":this.price};
  const url="http://localhost:8080/cake/save";
  this.http.post(url,userObj).subscribe((res)=>{
    console.log(res);
    this.toastr.success("cake added successfully");
  },(err)=>{
    console.log(err);
    this.toastr.error("please Re-enter the Details");
  })
}

}

