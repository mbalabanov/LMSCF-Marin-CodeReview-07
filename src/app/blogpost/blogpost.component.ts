import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogitems } from '../blogdata';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
  
  blogitems = blogitems;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
