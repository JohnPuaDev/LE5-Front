import { HttpClient } from "@angular/common/http";

export class AuthServiceService {
  isloggedIn: boolean = false;
  public redirectUrl: string = "";

  constructor(private http: HttpClient) {

  }

  login(username: string, password: string) {
    return this.http.post<string>("https://localhost:7161/api/login/login", { username, password });
  }
}
