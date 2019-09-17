import { Injectable } from '@angular/core';
import { Room } from './room';
import {timer} from 'rxjs'
import { MockData } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private data : MockData) { }

  updateData(rooms : Room[]){
    const update = timer(5000,5000);

    update.subscribe(()=>{
      for(var i = 0; i < rooms.length; i++){
        var room = rooms[i];
        room['temperature'] = this.data.getTemperature();
        room['humidity'] = this.data.getHumidity();
      }
    });

  }

}
