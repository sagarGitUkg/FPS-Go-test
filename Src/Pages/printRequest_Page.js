function printRequest() {
this.reqType_text = '#//input[@id="mat-input-2"]';
this.nextStep_button = '#//button[@class="mat-raised-button mat-accent"]';
       //  mat-raised-button mat-accent  //button[@class='mat-raised-button mat-accent cdk-focused cdk-mouse-focused']//span[@class='mat-button-wrapper']

this.uploadFiles_button = '#//span[normalize-space()="CLICK HERE TO UPLOAD FILES"]';
this.orignal_count_txt = '#//input[@class="expected-count-input ng-pristine ng-valid ng-touched"]';
this.upld_next_button = '#//span[@class="mat-button-wrapper"]';
this.upld_step6_button = '#//[@class = "mat-button-wrapper"]/[8]';
this.submit_req_button = '#//span[normalize-space()="Submit print request"]';
this.submit_popUp_txt = '#//span[@class="ng-star-inserted"]';
this.req_num_txt = '#page-mainheader[3]';



};
module.exports = new printRequest();//span[normalize-space()='CLICK HERE TO UPLOAD FILES']