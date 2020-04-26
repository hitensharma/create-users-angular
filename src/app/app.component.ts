import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'create-user';

//For Users
  users=[];
  countDataUsers:number = 0;
  countDataAdmins:number = 0;

  pushUsers(data){
    this.users.push(data);
    this.countDataUsers = this.countDataUsers + 1;
  }
  onRemoveUser(item){
    this.users.splice(item, 1);
    this.countDataUsers = (this.countDataUsers -1);
  }
//For Admins
  admins=[];
  pushAdmins(data){
    this.admins.push(data);
    this.countDataAdmins = this.countDataAdmins + 1;
  }
  onRemoveAdmin(item){
    this.admins.splice(item, 1);
    this.countDataAdmins = this.countDataAdmins - 1;
  }



  onRemoveUsers(item){
    this.users.splice(this.users.length-1);
    this.countDataUsers = this.countDataUsers -1;

  }
  onRemoveAdmins(item){
    this.admins.splice(this.admins.length-1);
    this.countDataAdmins = this.countDataAdmins - 1;
  }
}

