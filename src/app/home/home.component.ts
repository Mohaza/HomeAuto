import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { HouseService } from '../house.service';
import { MockData } from '../mock-data';
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
  home: House;
  homeTitle: string =""
  constructor(data: MockData, private route: ActivatedRoute,private houses : HouseService) {
    this.homes = data.getHouses();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.homeID = params.get("id");
      console.log(this.homeID)
    });
    if(this.homes.has(this.homeID)){
      this.home = this.homes.get(this.homeID);
      this.roomsList =this.home['rooms'];
      this.houses.updateData(this.roomsList);
      this.homeTitle = this.homeID;
    }
    

    

  }

}
