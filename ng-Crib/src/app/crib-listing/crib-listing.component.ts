import { CribsService } from './../_services/cribs.service';
import { Component, OnInit } from '@angular/core';
import { Crib } from '../_models/crib';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {
  cribs: Crib[];

  constructor(private cribService: CribsService) { }

  ngOnInit() {
    this.getAll();

  }

  getAll() {
    this.cribService.getAllCribs().subscribe((cribs: Crib[]) => {
    this.cribs = cribs;
    }, error => {
      console.log(error);
    });

  }
}
