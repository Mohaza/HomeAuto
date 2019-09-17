import { House } from './house';

export class MockData {
    //A method that returns a Map of houses.
    getHouses(): Map<string,House>{
        let map = new Map<string,House>();
        map.set("house1",{
          title: "house1",
          rooms: [{
            name: "Vardagsrum",
            temperature: this.getTemperature(),
            humidity : this.getHumidity()
    
          },
          {
            name: "Sovrum",
            temperature: this.getTemperature(),
            humidity : this.getHumidity()
          }]
        });
        
        map.set("house2",{
          title: "house2",
          rooms: [{
            name: "Vardagsrum",
            temperature: this.getTemperature(),
            humidity : this.getHumidity()
    
          },
          {
            name: "Sovrum",
            temperature: this.getTemperature(),
            humidity : this.getHumidity()
          }]
        });
        map.set("house3",{
          title: "house3",
          rooms: [{
            name: "Vardagsrum",
            temperature: this.getTemperature(),
            humidity : this.getHumidity()
    
          },
          {
            name: "Sovrum",
            temperature: this.getTemperature(),
            humidity : this.getHumidity()
          },
          {
            name: "Kök",
            temperature: this.getTemperature(),
            humidity : this.getHumidity()
          },
          {
            name: "Sovrum2",
            temperature: this.getTemperature(),
            humidity : this.getHumidity()
          }]
        });
        map.set("house4",{
          title: "house4",
          rooms: [{
            name: "Vardagsrum",
            temperature: this.getTemperature(),
            humidity : this.getHumidity()
    
          },
          {
            name: "Sovrum",
            temperature: this.getTemperature(),
            humidity : this.getHumidity()
          },
          {
            name: "Kök",
            temperature: this.getTemperature(),
            humidity : this.getHumidity()
          }]
        });
        map.set("house5",{
          title: "house5",
          rooms: [{
            name: "Vardagsrum och kök",
            temperature: this.getTemperature(),
            humidity : this.getHumidity()
    
          },
          {
            name: "Sovrum",
            temperature: this.getTemperature(),
            humidity : this.getHumidity()
          },
          {
            name: "Sovrum2",
            temperature: this.getTemperature(),
            humidity : this.getHumidity()
          }]
        });
        return map;
      }
      getHumidity(){
          return parseFloat((Math.random() * (0.95-0.10) + 0.10).toFixed(2));
      }
      getTemperature(){
          return (Math.floor(Math.random() * 8) + 19);
      }
}
