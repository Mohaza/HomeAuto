import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { HousesService } from '../houses.service';
import { ActivatedRoute } from '@angular/router';
import { House } from '../house';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeID:any;
  roomsList:Room[];
  homes :Map<string, House>;
  constructor(houses: HousesService, private route: ActivatedRoute) {
    this.homes = houses.getHouses();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.homeID = params.get("id");
      console.log(this.homeID)
    });
    if(this.homes.has(this.homeID)){
      this.roomsList =this.homes.get(this.homeID)['rooms'];
    }
    
    

  }

}
