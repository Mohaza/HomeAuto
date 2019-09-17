import { Injectable } from '@angular/core';
import { Room } from './room';
import {timer} from 'rxjs'
import { MockData } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private data : MockData) { }
  //A method that initiate the timer to dynamically update the each room of the house.
  updateData(rooms : Room[]){
    //triggers the update every 5 seconds
    const update = timer(5000,5000);
    //update the temperature and humidity of each room
    update.subscribe(()=>{
      for(var i = 0; i < rooms.length; i++){
        var room = rooms[i];
        room['temperature'] = this.data.getTemperature();
        room['humidity'] = this.data.getHumidity();
      }
    });

  }

}
