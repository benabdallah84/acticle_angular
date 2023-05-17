import { Component, OnInit } from '@angular/core';
import { category } from '../category';
import { MyService } from '../my.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private service:MyService) { }
  cat:category=new category(0,"Unknoun");
  ngOnInit() {
    this.service.sayHello("Category");
  }
  onSubmit(){
    console.log(this.cat);

  }
}
