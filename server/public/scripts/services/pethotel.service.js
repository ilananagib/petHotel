app.service('PetHotelService', ['$http', function($http){
    var self = this;
    self.petsList = { list: [] };
    self.ownersList = { list: [] };
    self.newPet = { check_in: 'no' };
    self.newOwner = { list: [] };

    self.submitPet = function () {
        console.log('Submitting owners!');
        $http({
            method: 'POST',
            url: '/pethotel/pets',
            data: self.newPet
        })
            .then(function (response) {
                self.getPet();
                console.log(response);
            })
            .catch(function (error) {
                console.log('error on /manage POST', error);
            })
    }

    self.getPet = function () { //get PET history in the DOM
        $http({
            method: 'GET',
            url: '/pethotel/pets',
        })
            .then(function (response) {
                self.petsList.list = response.data
                console.log(response.data);
            })
            .catch(function (error) {
                console.log('error on GET', error);
            })
    }

    self.getPetsNumber = function () {
        console.log('Getting pets number');
        $http({
            method: 'GET',
            url: '/pethotel/count',
        })
            .then(function (response) {
                self.ownersList.list = response.data
                console.log(response)
            })
            .catch(function (error) {
                console.log('error on GET', error)
            })
    }

    self.deleteAction = function (pet) {
        console.log(pet);
        $http({
            method: 'DELETE',
            url: `/pethotel/pets/${pet.id}`
        })
            .then(function (response) {
                console.log(response);
                self.getPet();

            })
            .catch(function (error) {
                console.log('error on / owner DELETE', error);
            })
    }
    self.checkInAction = function (pet) {
        let date = 'yes'
        $http({
            method: 'PUT',
            url: `/pethotel/pets/${pet.id}`,
            data: {check_in: date}
        })
            .then(function (response) {
                console.log(response)
                self.getPet();
            })
            .catch(function (error) {
                console.log('error on /manage POST', error);
            })
    }
    self.checkOutAction = function (pet) {
        $http({
            method: 'PUT',
            url: `/pethotel/pets/${pet.id}`,
            data: {check_in: 'no'}
        })
            .then(function (response) {
                console.log(response)
                self.getPet();
            })
            .catch(function (error) {
                console.log('error on /manage POST', error);
            })
    }

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