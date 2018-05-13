app.controller('ManageController', ['$http', function ($http) {
    console.log('ManageController is connected');
    var self = this;
    self.ownersList = {list: []};
    self.newOwner = {};

    self.submitOwner = function () {
        console.log('Submitting owners!');
        $http({
            method: 'POST',
            url: '/pethotel/owners',
            data: self.newOwner
        })
            .then(function (response) {
                self.getPetsNumber();
                console.log(response);
            })
            .catch(function (error) {
                console.log('error on /manage POST', error);
            })
    }

    self.getOwner = function () {
        $http({
            method: 'GET',
            url: '/pethotel/owners',
        })
            .then(function (response) {
                self.ownersList.list = response.data
                console.log(response.data);
            })
            .catch(function (error) {
                console.log('error on GET', error);
            })
    }

    self.getPetsNumber = function (){
        console.log('Getting pets number');
        $http({
            method: 'GET',
            url:'/pethotel/count',
        })
        .then(function (response){
            self.ownersList.list = response.data
            console.log(response)
        })
        .catch(function(error) {
            console.log('error on GET', error)
        })
    }

    self.getPetsNumber();

    self.deleteOwner = function (owner) {
        console.log(owner);
        $http({
            method: 'DELETE',
            url: `/pethotel/owners/${owner.id}`
        })
            .then(function (response) {
                console.log(response);
                self.getPetsNumber();
    
            })
            .catch(function (error) {
                console.log('error on / owner DELETE', error);
            })
    }

}]);