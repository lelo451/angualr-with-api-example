import {Component, OnInit} from '@angular/core';
import {ModelService} from './model.service';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any;
  user: any;
  delete: any;
  login = new User;
  loginResponse: any;
  delay: any;
  loading = true;

  constructor(private service: ModelService) {
  }

  ngOnInit() {
    this.getData();
    this.del('2');
  }

  getData() {
    this.service.List().subscribe(
      data => {
        this.users = JSON.stringify(data);
      }
    );
    this.service.Get().subscribe(
      data => {
        this.user = JSON.stringify(data);
      }
    );
    this.service.Delayed().subscribe(
      data => {
        this.loading = false;
        this.delay = JSON.stringify(data);
      }
    );
  }

  logIn() {
    this.service.Login(this.login).subscribe(
      data => {
        this.loginResponse = JSON.stringify(data);
      }, error => {
        this.loginResponse = error['error']['error'];
      }
    );
  }

  del(id: string) {
    this.service.Delete(id).subscribe(
      data => {
        this.delete = data.status;
      }
    );
  }
}
