angular.module('App')
.service('DataServices', DataServices);

function DataServices(){

  this.stringToArray = function(str){
    
    var array = str.split(" ").map(function(item){
      return parseInt(item);
    })

    var newArray = [];

    array.forEach(function(item){
      if(isNaN(item)){
        //do nothing
      } else{
        newArray.push(item);
      }
    })

    return newArray;
  }



}

DataServices.$inject = [];
