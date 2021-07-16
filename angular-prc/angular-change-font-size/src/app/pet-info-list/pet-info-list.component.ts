import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet-info-list',
  templateUrl: './pet-info-list.component.html',
  styleUrls: ['./pet-info-list.component.css']
})

export class PetInfoListComponent implements OnInit {
  pet: Pet = {
    name: 'puppie',
    image: 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg'
  };
  constructor() { }

  ngOnInit() {
  }

}
