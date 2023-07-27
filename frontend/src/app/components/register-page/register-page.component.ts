import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit{

  form: any = {
    username: null,
    password: null,
    firstName: null,
    lastName: null
  }

  constructor(private http: HttpClient,
    private route: Router) { }

  ngOnInit(): void {
    const {
      username, password, firstName, lastName
    } = this.form

    console.log(this.form);

    this.http.post("https://localhost:7161/api/Login/register", this.form, {
      responseType: 'text'
    }).subscribe(data => { 
      this.route.navigate(['/login'])
    })
  }

}
