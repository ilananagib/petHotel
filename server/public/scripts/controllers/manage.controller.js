app.controller('ManageController', ['$http', function ($http) {
    console.log('ManageController is connected');
    var self = this;
    self.ownersList = PetHotelService.ownersList;
    self.newOwner = PetHotelService.newOwner;

    self.submitOwner = PetHotelService.submitOwner;

    self.getOwner = PetHotelService.getOwner;

    self.getPetsNumber = PetHotelService.getPetsNumber;

    self.getPetsNumber();

    self.deleteOwner = PetHotelService.deleteOwner;
}]);