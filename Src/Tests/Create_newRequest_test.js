// Author: Sagar Parlapalle
// Date: April 6th 2021  
// Create Request for a Request Type
Feature('Validate Create request for an existing request Type supporting any file format');

//Create request from Step 1 through 7  and final for confirmation text message
var LaunchFPS_go = require("../Pages/homePage");
var newreq_details = require("../Pages/printRequest_Page");



Scenario('Create Request at FPS Go QA ', (I) => {
// Login to FPS GO
I.amOnPage('https://fpsgo_qa.ultimatesoftware.com/login');


I.wait(10);

//I.click(LaunchFPS_go.newRequest_button);

//I.click('//button[@class="mat-raised-button"]');
I.click(LaunchFPS_go.newRequest_button);

I.wait(5);

//I.click('//input[@id="mat-input-1"]');
I.fillField(newreq_details.reqType_text,'For_QA_Automation_anyFileReqTy');   // pull data from Excel sheet with Convert to Json 
I.wait(5);
I.click(newreq_details.select_reqType);
//I.selectOption('//span[@class="mat-option-text"]');
I.wait(5);

I.wait(5);
I.click('//button[@class="mat-raised-button mat-accent"]//span[@class="mat-button-wrapper"]');

// Create New Request Page

I.wait(5);
//I.click();
//I.click(LaunchFPS_go.logout_button);
I.wait(5);

I.click('//span[normalize-space()="Logout"]');
I.wait(5);
});