import { Component } from '@angular/core';
import { Liste } from '../liste/liste';
import { Details } from '../details/details';

@Component({
  selector: 'app-cv',
  imports: [Liste, Details],
  templateUrl: './cv.html',
  styleUrl: './cv.css',
})
export class Cv {}
