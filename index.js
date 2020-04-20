// Code your solution in this file
function findMatching(list,name){ 
    return list.filter(function(driverName){
        return driverName.toLowerCase() == name.toLowerCase();
    })
}

// function fuzzyMatch(list,name){
//     return list.filter(function(driverName){
//          if (driverName[0] == name){
//              return driverName
//          }
//     })
// }
function fuzzyMatch (list, partialName) {
    let lengthOfName = partialName.length;
    return list.filter(function (driverName) {
      return driverName.slice(0, lengthOfName) === partialName;
    });
}

function matchName (list, name) {
    return list.filter(function (driver) {
      return driver.name.toLowerCase() === name.toLowerCase();
    });
  }
