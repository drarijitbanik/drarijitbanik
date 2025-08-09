import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isCollapsed = false;
  activeNav: string = 'home';

  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {
    
  }
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    // No router event logic here
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isCollapsed = window.scrollY > 80;
  }

  setActiveNav(nav: string, event: Event) {
    this.activeNav = nav;
    //event.preventDefault();
  }

   scrollToSection(event?: Event) {
   // event?.preventDefault();
    //this.viewportScroller.scrollToAnchor('carousel-section');
  }

  scrollToAbout(event?: Event) {
   //event?.preventDefault();
    //this.viewportScroller.scrollToAnchor('about-section');
  }

  scrollToRegion(event?: Event) {
    //event?.preventDefault();
   //this.viewportScroller.scrollToAnchor('region-section');
  }
}