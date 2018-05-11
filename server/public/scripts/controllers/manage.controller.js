app.controller('ManageController', ['$http', function($http){
    console.log('ManageController is connected');
    var self = this;
    self.ownersList = [];
    self.newOwner = {};

    self.submitOwner = function () {
        console.log('Submitting owners!');
        $http({
            method: 'POST',
            url: '/pethotel',
            data: self.newOwner
        })
        .then(function (response){
            self.getOwner();
            console.log(response);
        })
        .catch(function(error){
            console.log('error on /manage POST', error);
        })
    }

    self.getOwner = function () {
       $http({
           method: 'GET',
           url: '/pethotel',
       })
       .then(function(response) {
           self.ownersList = response.data
           console.log(response.data);
       })
       .catch(function(error){
           console.log('error on GET', error);
       })
    }

}]);