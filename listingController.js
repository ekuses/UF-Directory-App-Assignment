angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function ()
    {
        //$scope.listings.push({ code: document.getElementsByName('code'), name: document.getElementsByName('code'), coordinates: { latitude: document.getElementsByName('code'), longitude: document.getElementsByName('code') }, address: document.getElementsByName('address') });
        $scope.listings.push({ code: this.icode, name: this.iname, coordinates: { latitude: this.ilatitude, longitude: this.ilongitude }, address: this.iaddress});
    };

    $scope.deleteListing = function (index)
    {
        document.getElementById('table').deleteRow(index + 1);
        $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function (index)
    {
        $scope.detailedInfo = '';
        var row = $scope.listings[index];
        var properties = Object.getOwnPropertyNames(row);
        var values = Object.values(row);

        try
        {
            $scope.detailedInfo = 'Code: ' + row.code + '\nName: ' + row.name + '\nCoordinates:\n\tLatitude: ' + row.coordinates.latitude + '\n\tLongitude: ' + row.coordinates.longitude + '\nAddress: ' + row.address;
        }
        catch(err)
        {
            $scope.detailedInfo = 'Code: ' + row.code + '\nName: ' + row.name;
            if (row.address != undefined)
            {
                $scope.detailedInfo += '\nAddress' + row.address;
            }
        }

        //$scope.detailedInfo = 'Code: ' + row.code + '\nName: ' + row.name + '\nCoordinates:\n\tLatitude: '+ row.coordinates.latitude + '\n\tLongitude: '+ row.coordinates.longitude + '\nAddress: '+ row.address;
        /*for (var i=0;i<properties.length-1;i++)
        {
            try {
                $scope.detailedinfo += '\t' + 'latitude: ' + row[i].latitude + '\n\t' + 'longitude' + row[i].longitude + '\n';
                console.log(row[i].longitude);
            }
            catch(err)
            {
                $scope.detailedInfo = $scope.detailedInfo + properties[i] + ': ' + values[i] + '\n';
                continue;
            }
        }*/
    };
  }
]);