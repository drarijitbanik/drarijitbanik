import { Component, OnInit } from '@angular/core';
import { GetApiDataService } from '../../shared-service/get-api-data.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  public locations: any = []; // Define the type of locations as needed

  constructor(
    private getApiDataService: GetApiDataService
  ) { }

  ngOnInit(): void {
    this.getApiDataService.getApiData('json/location.json').subscribe(
      response => {
        this.locations = response.data;
      }
    );
  }

  sanitizeRegionName(name: string): string {
    // IDs cannot start with a digit, so prefix with a letter if needed
    let sanitized = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with dash
      .replace(/^-+|-+$/g, '');    // Trim leading/trailing dashes
    if (/^[0-9]/.test(sanitized)) {
      sanitized = 'region-' + sanitized;
    }
    return sanitized;
  }
}