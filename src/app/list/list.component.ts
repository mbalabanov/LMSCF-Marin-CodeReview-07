import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { travelitems } from '../travelinfos';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  travelitems = travelitems;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
