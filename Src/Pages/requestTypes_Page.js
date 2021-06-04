//Author: Candido Concepcion
//Date: May 25 2021
// Request Types page  for FPS GO 

function RequestTypes() {

    //top link
    this.reqTypesLink       = 'mat-toolbar > mat-toolbar-row > div.navigation > button:nth-child(3)';
    //New Request type button
    this.newReqTypeBtn      = 'New request type';
    //Search request types
    this.filterReqTypes_txt = 'div.mat-form-field-infix > input[placeholder="Filter Request Types"]';

//New Request Type page
    //Name & Description
    this.newName_txt        = '#create-request-type-form > mat-card.new-request-type-container > div > div > mat-form-field.name-field input[formcontrolname="requestTypeName"]';
    this.newDesc_txt        = '#create-request-type-form > mat-card.new-request-type-container > div > div > mat-form-field.name-field input[formcontrolname="requestTypeDescription"]';
    //Input Files
    this.fileType_drpDwn    = '#create-request-type-form > mat-card > div > div:nth-child(8) > mat-form-field > div > div.mat-form-field-flex > div > mat-select';
    this.fileType_option    = '.mat-option-text';
    //Output Files
    this.filePath_txt       = '#create-request-type-form > mat-card > div > div:nth-child(11) > mat-form-field > div > div.mat-form-field-flex > div > input';

    //Fields & Processing 
    this.autoCompleteShipping = 'mat-checkbox.skipShipping';
    this.autoCompleteSealing  = 'mat-checkbox.skipSealing';
    this.comment_checkbox     = 'mat-checkbox.requiresDefaultComments';
    this.comment_txt          = 'input[formcontrolname="defaultComments"]';
};
module.exports = new RequestTypes();
