function printRequest() {
this.reqType_text = '//input[@id="mat-input-1"]';
this.select_reqType = '//span[@class="mat-option-text"]';
this.nextStep_button = '//button[@class="mat-raised-button mat-accent"]';

                       
this.uploadFiles_button = '//*[@id="fileUpload"]';
this.uploadFile_pdf = '/Src/Utilities/files_To_Upload/attachment.pdf';
this.orignal_count_txt = '/html/body/app-root/app-shared/mat-sidenav-container/mat-sidenav-content/section/app-new-request/div/div[2]/mat-card/div[5]/app-request-file-upload/mat-card-content/app-file-upload/div/div[2]/mat-table/mat-row/mat-cell[3]/input';
this.orig_count_nxtStp_btn = '//button[@class="mat-raised-button mat-accent"]';
this.upld_next_button = '#//span[@class="mat-button-wrapper"]';

this.stp5_6nxt_btn = '//button[@class="mat-raised-button mat-accent"]';



this.submit_req_btn = '//span[normalize-space()="Submit print request"]';
this.submit_popUp_btn = '//span[@class="ng-star-inserted"]';
this.req_num_txt = '#page-mainheader[3]';




};
module.exports = new printRequest();