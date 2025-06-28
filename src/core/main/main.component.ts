import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {

  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects || event.url;
        setTimeout(() => {
          if (url === '/about') {
            this.viewportScroller.scrollToAnchor('about-section');
          } else if (url === '/region') {
            this.viewportScroller.scrollToAnchor('region-section');
          } else if (url === '/home' || url === '/' || url === '') {
            this.viewportScroller.scrollToAnchor('carousel-section');
          }
        }, 100);
        // Add more sections if needed
      }
    });
  }


}
