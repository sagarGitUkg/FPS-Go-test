// Author: Candido Concepcion
// Date: May 25 2021  
// Create a new Request Type
Feature('Validation of create new request type');

var reqTypesPage = require("../Pages/requestTypes_Page");
var testData = require("../Utilities/testData_newRequestType.json");

Scenario('Create Request Type at FPS Go QA ', async (I) => {
// Login to FPS GO
I.amOnPage('https://fpsgo_qa.ultimatesoftware.com/login');
I.wait(5);
I.click(reqTypesPage.reqTypesLink);
I.wait(5);
// (1) New Request Type Simple
I.click(reqTypesPage.newReqTypeBtn);
//fill info for new request type
    I.wait(2);
    I.fillField(reqTypesPage.newName_txt, testData.name);
    //description
    I.fillField(reqTypesPage.newDesc_txt, testData.description);
    //file type
    I.click(reqTypesPage.fileType_drpDwn);
    I.click(testData.requestType, reqTypesPage.fileType_option);
    //file path
    I.fillField(reqTypesPage.filePath_txt, testData.filePath);
    //save
    I.click('Save');
I.wait(5);    
//verify requet shows    
I.fillField(reqTypesPage.filterReqTypes_txt, testData.name);

I.see(testData.name, ".mat-table");

//(2) New Request Type more options

I.click(reqTypesPage.newReqTypeBtn);
//fill info for new request type
    I.wait(2);
    I.fillField(reqTypesPage.newName_txt, testData.name2);
    //description
    I.fillField(reqTypesPage.newDesc_txt, testData.description);
    //fields & Processing
    I.click(reqTypesPage.autoCompleteShipping);
    I.click(reqTypesPage.autoCompleteSealing);
    I.click(reqTypesPage.comment_checkbox);
    I.fillField(reqTypesPage.comment_txt, testData.comment);
    //file type
    I.click(reqTypesPage.fileType_drpDwn);
    I.click(testData.requestType, reqTypesPage.fileType_option);
    //file path
    I.fillField(reqTypesPage.filePath_txt, testData.filePath);
    //save
    I.click('Save');
I.wait(5);    
//verify requet shows    
I.fillField(reqTypesPage.filterReqTypes_txt, testData.name2);

I.see(testData.name2, ".mat-table"); 
});
