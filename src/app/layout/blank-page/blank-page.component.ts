import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
users:Array<User>;
  constructor(private userService:UserService) {}

    ngOnInit() {

      this.consultar();

    }

    consultar(){
this.userService.consultar().subscribe(response=>{
this.users = response as User[];
});
    }


    insert(){
      this.userService.insert(data).subscribe(response=>{
      //this.users = response;
      });
          }
}
