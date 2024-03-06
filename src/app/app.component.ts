import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeListComponent, MatSlideToggleModule, MatToolbarModule, MatIconModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'managementEmployees';
}
