let objects = [
    {
      "time": "2019-03-07T19:09:24Z",
      "sensor": "Sensor 1",
      "number_of_people": 1
    },
    {
      "time": "2019-03-07T19:14:30Z",
      "sensor": "Sensor 1",
      "number_of_people": 2
    },
    {
      "time": "2019-03-07T19:19:35Z",
      "sensor": "Sensor 1",
      "number_of_people": 3
    },
        {
      "time": "2019-03-07T19:09:24Z",
      "sensor": "Sensor 2",
      "number_of_people": 1
    },
    {
      "time": "2019-03-07T19:14:30Z",
      "sensor": "Sensor 2",
      "number_of_people": 2
    },
    {
      "time": "2019-03-07T19:19:35Z",
      "sensor": "Sensor 3",
      "number_of_people": 3
    },
  ];
  
  
sensorReadings = (timestamp, data) => {
    //the return value is an object containing the //highest number of people each sensor read at a //given point in time.
    let results = {
      "timestamp": timestamp,
      "sensors": {}
    };
    let sensors = getSensors(data);
  
    sensors.forEach( (sensor) => {
      Object.assign(results.sensors, {[sensor]: ''});
    });
  
    return results;
  };
  
//this function does not assume a number of sensors
//and will return an array of strings of each of the //sensors 
getSensors = (data) => {
    let sensors = [];
    
    //for each object in the data array,
    //check if its "sensor" property exists
    //in the sensors array, if not, push the string
    data.forEach( (obj) => {
      let sensor = obj.sensor;
      if (!sensors.includes(sensor)) {
        sensors.push(sensor) 
      }
    });
  
    return sensors;
};
  
console.log(sensorReadings("2019-03-07T19:09:24Z", objects));
  