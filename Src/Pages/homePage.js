//Author: Sagar Parlapalle
//Date: April 6th 2021
// Home/ Landing  for FPS GO 

function RequestList() {

    this.newRequest_button =  '//button[@class="mat-raised-button"]';
    this.filtrSearch_txt = '#mat-input-12';
    this.home_go_hdr = '//i[normalize-space()="GO"]';
    this.logout_button = '//span[normalize-space()="Logout"]';

};
module.exports = new RequestList();
