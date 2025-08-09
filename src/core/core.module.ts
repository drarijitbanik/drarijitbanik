import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { TemplateComponent } from './template/template.component';
import { RegionComponent } from './feature-components/region/region.component';
import { AboutComponent } from './feature-components/about/about.component';
import { FeedbackComponent } from './feature-components/feedback/feedback.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { SpinalSurgeriesComponent } from './treatmnt-offered/spinal-surgeries/spinal-surgeries.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './strategies/custom-reuse-strategy';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TemplateComponent,
    RegionComponent,
    AboutComponent,
    FeedbackComponent,
    SafeUrlPipe,
    SpinalSurgeriesComponent,
    CarouselComponent 
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    TemplateComponent
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
  ]
})
export class CoreModule { }
