// Author: Sagar Parlapalle
// Date: April 6th 2021  
// Create Request for a Request Type
Feature('Validate Create request for an existing request Type supporting any file format');

//Create request from Step 1 through 7  and final for confirmation text message
var LaunchFPS_go = require("../Pages/homePage");



Scenario('Create Request at FPS Go QA ', (I) => {
// Login to FPS GO
I.amOnPage('https://fpsgo_qa.ultimatesoftware.com/login');


I.wait(10);

//I.click(LaunchFPS_go.newRequest_button);

I.click('//button[@class="mat-raised-button"]');
// Create New Request Page

I.wait(5);
I.click();
//I.click(LaunchFPS_go.logout_button);
I.wait(5);

});