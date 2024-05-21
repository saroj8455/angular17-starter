import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'clientapi';

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.configService.loadProductsFromFakeApi().subscribe((products) => {
      console.log(products);
    });
  }
}
