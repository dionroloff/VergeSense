//this function returns the most number of people
//each sensor reports at a given timestamp
function getSensorReadings(timestamp, data) {
  //the return value is an object containing the 
  //highest number of people each sensor reported at a given point in time.
  let results = {
    "timestamp": timestamp,
    "sensors": {}
  };
  //an array of each sensor (strings)
  let sensors = getSensors(data);
  //for each sensor in the array, we add
  //it as a key to results.sensors
  sensors.forEach( (sensor) => {
    let queryString = sensor;
    Object.assign( results.sensors, {
        [sensor]: getMostNumberOfPeople(queryString, timestamp, data)
      });
  });

  return results;
};

//this function does not assume a number of sensors
//and will return an array of strings of each of the //sensors 
function getSensors(data) {
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

//returns a number of the most number
//of people that an individual sensor reports
//at a given timestamp
function getMostNumberOfPeople(sensor, timestamp, data) {
  let mostPeople = 0;

  let sensorReportAtParticularTime = [];
  data.filter ( (obj) => {
    if (obj.time === timestamp && obj.sensor === sensor) {
      sensorReportAtParticularTime.push(obj);
    } else {
      sensorReportAtParticularTime.push({number_of_people: 0});
    }
  })

  sensorReportAtParticularTime.forEach( (obj) => {
    let newHigh = obj.number_of_people;
    if(newHigh > mostPeople) {
      mostPeople = newHigh;
    }
  });
  return mostPeople;
};