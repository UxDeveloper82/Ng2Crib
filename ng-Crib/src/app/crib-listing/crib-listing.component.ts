import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {
  cribs: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.http.get('http://localhost:5000/api/Cribs')
    .subscribe(response => {
      this.cribs = response;
    }, error => {
      console.log(error);
    });
  }

}

