import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  templateUrl: './onboarding.html',
  styleUrl: '../auth/auth-page.scss'
})
export class Onboarding {

  constructor(
    private readonly router: Router
  ) {}

  async start(): Promise<void> {
    await this.router.navigate(['/organizations/new']);
  }
}