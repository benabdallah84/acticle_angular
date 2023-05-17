import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors=['Red','Green','Purple','Yellow','White','Black'];
  name='Slimane BENABDALLAH';
  currentDate = new Date();
  age=37;
  source ='https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png?w=590&h=800&756A88D1-C0EA-4C21-92BE0BB43C14B265';
  isAuth = false;
  LogState="LogIn";
  toggle(){
    this.isAuth=!this.isAuth;
    this.LogState =this.isAuth ? "LogOut": "LogIn";
  }
  myfunction(){
    console.log('button clicked!');

  }
  onChange(){
    console.log('color changed!');
  }
}
