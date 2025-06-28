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
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     const url = event.urlAfterRedirects || event.url;
    //     if (url.startsWith('/home')) {
    //       this.activeNav = 'home';
    //       this.scrollToSection();
    //     } else if (url.startsWith('/about')) {
    //       this.activeNav = 'about';
    //       this.scrollToAbout();
    //     } else if (url.startsWith('/spinal-surgeries')) {
    //       this.activeNav = 'spinal';
    //     } else if (url.startsWith('/brain-trauma-surgeries')) {
    //       this.activeNav = 'brain-trauma';
    //     } else if (url.startsWith('/non-traumatic-brain-surgeries')) {
    //       this.activeNav = 'non-traumatic';
    //     } else if (url.startsWith('/brain-tumor-surgeries')) {
    //       this.activeNav = 'tumor';
    //     } else if (url.startsWith('/pediatric-neurosurgery')) {
    //       this.activeNav = 'pediatric';
    //     } else if (url.startsWith('/gallery/photos')) {
    //       this.activeNav = 'photos';
    //     } else if (url.startsWith('/gallery/videos')) {
    //       this.activeNav = 'videos';
    //     } else if (url.startsWith('/region')) {
    //       this.activeNav = 'region';
    //       this.scrollToRegion();
    //     } else if (url.startsWith('/contact')) {
    //       this.activeNav = 'contact';
    //     }
    //   }
    // });
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
   // event.preventDefault();
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