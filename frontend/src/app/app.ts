import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Sample {
  id?: number;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div style="max-width: 500px; margin: 40px auto; font-family: Arial;">
      <h2>Sample Management</h2>

      <input
        type="text"
        [(ngModel)]="name"
        placeholder="Enter name"
        style="width: 100%; padding: 8px;"
      />

      <button
        (click)="addSample()"
        style="width: 100%; margin-top: 10px; padding: 8px;"
      >
        Add Sample
      </button>

      <h3 style="margin-top: 20px;">All Samples</h3>

      <ul>
        <li *ngFor="let s of samples">
          {{ s.id }} - {{ s.name }}
        </li>
      </ul>
    </div>
  `
})
export class AppComponent implements OnInit {

  // Use backend service name for Docker communication
  private baseUrl = 'http://backend:8080';

  name = '';
  samples: Sample[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadSamples();
  }

  addSample() {
    if (!this.name.trim()) return;

    this.http.post(`${this.baseUrl}/samples`, { name: this.name })
      .subscribe(() => {
        this.name = '';
        this.loadSamples();
      });
  }

  loadSamples() {
    this.http.get<Sample[]>(`${this.baseUrl}/allsamples`)
      .subscribe(data => this.samples = data);
  }
}
