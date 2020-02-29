import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogitems } from '../blogdata';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
  blogitem;
  blogitems = blogitems;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.blogitem = blogitems[+params.get('postId')];
     });
  }

}
