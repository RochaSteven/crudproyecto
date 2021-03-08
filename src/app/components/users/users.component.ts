import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Users } from '../../class/users';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Categoria } from '../../class/categoria';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;
  categoria:any;
  userss= new Users();
  categorias= new Categoria();
  constructor( private dataService:DataService) { }

  ngOnInit(): void {
    this.getUserData()
    this.dataService.getCategorias().subscribe(res=>{
    this.categoria=res});
  }
getUserData(){
  this.dataService.getData().subscribe(res=>{
   this.users=res});
}
insertData(){
  this.dataService.insertData(this.userss).subscribe(res=>{ 
    this.getUserData();
  }) 
}

deleteData(id:string){
  this.dataService.deleteData(id).subscribe(res=>{
    this.getUserData();
  console.log(res) ;
     
  })
  this.getUserData();
 }
}
