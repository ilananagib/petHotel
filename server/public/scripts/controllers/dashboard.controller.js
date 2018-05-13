app.controller('DashboardController', ['PetHotelService', function (PetHotelService) {
    console.log('DashboardController is connected');
    var self = this;
    self.petsList = PetHotelService.petsList;
    self.ownersList = PetHotelService.ownersList;
    self.newPet = PetHotelService.newPet;


    self.submitPet = PetHotelService.submitPet;

    self.getPet = PetHotelService.getPet;

    self.getPet();

    self.getPetsNumber = PetHotelService.getPetsNumber;

    self.getPetsNumber();

    self.deleteAction = PetHotelService.deleteAction;

    self.checkInAction = PetHotelService.checkInAction;
    

    self.checkOutAction = PetHotelService.checkOutAction;
    
}]);