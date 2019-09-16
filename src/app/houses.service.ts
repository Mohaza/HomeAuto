import { Injectable } from '@angular/core';
import { House } from './house';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor() { }

  getHouses(): Map<string,House>{
    let map = new Map<string,House>();
    map.set("house1",{
      title: "house1",
      rooms: [{
        title: "Vardagsrum",
        temp: (Math.floor(Math.random() * 8) + 19),
        humidity : (Math.floor(Math.random() * 21) + 20)

      },
      {
        title: "Sovrum",
        temp: (Math.floor(Math.random() * 8) + 19),
        humidity : (Math.floor(Math.random() * 21) + 20)
      }]
    });
    
    map.set("house2",{
      title: "house2",
      rooms: [{
        title: "Vardagsrum",
        temp: (Math.floor(Math.random() * 8) + 19),
        humidity : (Math.floor(Math.random() * 21) + 20)

      },
      {
        title: "Sovrum",
        temp: (Math.floor(Math.random() * 8) + 19),
        humidity : (Math.floor(Math.random() * 21) + 20)
      }]
    });
    map.set("house3",{
      title: "house3",
      rooms: [{
        title: "Vardagsrum",
        temp: (Math.floor(Math.random() * 8) + 19),
        humidity : (Math.floor(Math.random() * 21) + 20)

      },
      {
        title: "Sovrum",
        temp: (Math.floor(Math.random() * 8) + 19),
        humidity : (Math.floor(Math.random() * 21) + 20)
      },
      {
        title: "Kök",
        temp: (Math.floor(Math.random() * 8) + 19),
        humidity : (Math.floor(Math.random() * 21) + 20)
      },
      {
        title: "Sovrum2",
        temp: (Math.floor(Math.random() * 8) + 19),
        humidity : (Math.floor(Math.random() * 21) + 20)
      }]
    });
    map.set("house4",{
      title: "house4",
      rooms: [{
        title: "Vardagsrum",
        temp: (Math.floor(Math.random() * 8) + 19),
        humidity : (Math.floor(Math.random() * 21) + 20)

      },
      {
        title: "Sovrum",
        temp: (Math.floor(Math.random() * 8) + 19),
        humidity : (Math.floor(Math.random() * 21) + 20)
      },
      {
        title: "Kök",
        temp: (Math.floor(Math.random() * 8) + 19),
        humidity : (Math.floor(Math.random() * 21) + 20)
      }]
    });
    map.set("house5",{
      title: "house5",
      rooms: [{
        title: "Vardagsrum och kök",
        temp: (Math.floor(Math.random() * 8) + 19),
        humidity : (Math.floor(Math.random() * 21) + 20)

      },
      {
        title: "Sovrum",
        temp: (Math.floor(Math.random() * 8) + 19),
        humidity : (Math.floor(Math.random() * 21) + 20)
      },
      {
        title: "Sovrum2",
        temp: (Math.floor(Math.random() * 8) + 19),
        humidity : (Math.floor(Math.random() * 21) + 20)
      }]
    });
    return map;
  }

}
