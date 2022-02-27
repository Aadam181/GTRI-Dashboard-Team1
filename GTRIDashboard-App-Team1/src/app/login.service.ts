import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    // Uses http.get() to load data 
    getUsers() {
        return this.http.get('http://localhost:8000/login');
    }


    //Uses http.post() to post data 
    addUsers(email: string, password: string) {
        this.http.post('http://localhost:8000/login', { email, password })
            .subscribe((responseData) => {
                console.log(responseData);
            });
    }




}