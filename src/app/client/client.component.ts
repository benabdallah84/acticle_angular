import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyService } from '../my.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  myform=new FormGroup({
            name:new FormControl(''),
            age: new FormControl(''),
            address: new FormControl(''),
            job: new FormControl('')
  });
  constructor(private service:MyService) { }

  ngOnInit() {
    this.service.sayHello("Client");
  }
  onSubmit(){
    console.log(this.myform.value);
  }

}
