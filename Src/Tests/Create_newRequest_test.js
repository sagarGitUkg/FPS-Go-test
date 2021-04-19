// Author: Sagar Parlapalle
// Date: April 6th 2021  
// Create Request for a Request Type
Feature('Validate Create request for an existing request Type supporting any file format');

const homePage = require("../Pages/homePage");
//Create request from Step 1 through 7  and final for confirmation text message
var LaunchFPS_go = require("../Pages/homePage");
var newreq_details = require("../Pages/printRequest_Page");



Scenario('Create Request at FPS Go QA ', async (I) => {
// Login to FPS GO
I.amOnPage('https://fpsgo_qa.ultimatesoftware.com/login');


I.wait(10);

//I.click(LaunchFPS_go.newRequest_button);

//I.click('//button[@class="mat-raised-button"]');
I.click(LaunchFPS_go.newRequest_button);

I.wait(5);

//I.click('//input[@id="mat-input-1"]');
I.fillField(newreq_details.reqType_text,'For_QA_Automation_anyFileReqTy');   
// pull data from Excel sheet with Convert to Json 
I.wait(5);
I.click(newreq_details.select_reqType);

I.wait(5);

I.wait(5);

I.click(newreq_details.nextStep_button);

//I.click('//button[@class="mat-raised-button mat-accent"]//span[@class="mat-button-wrapper"]');

I.wait(3);




I.attachFile(newreq_details.uploadFiles_button, newreq_details.uploadFile_pdf);

I.wait(5);

I.fillField(newreq_details.orignal_count_txt, '1');
I.wait(3);

//I.click('//button[@class="mat-raised-button mat-accent"]');



//I.click('//button[@class="mat-raised-button mat-accent"]');
I.click(newreq_details.stp5_6nxt_btn);

I.wait(5);
I.click(newreq_details.stp5_6nxt_btn);

I.wait(5);


I.click(newreq_details.submit_req_btn);
            
I.wait(3);
I.click(newreq_details.submit_popUp_btn);

I.wait(10);
var cr_reqn_check = await I.grabTextFrom('h2[class="page-mainheader"]');

var cr_reqn_check1 = cr_reqn_check.substr(9, 12);

//var cr_ReqN = '0';

I.wait(5);

//Steps to finish
// capture Request # ,???    h2[class='page-mainheader']
//click at FPS Go   - Done 
// Search for Request -Done
//Compare what is Found - Done

//  ------------  - Uncomment 
 I.click(LaunchFPS_go.home_go_hdr);


I.wait(5);
I.fillField('//input[@id="mat-input-0"]', cr_reqn_check1);

////input[@id='mat-input-0']     //input[@id="mat-input-70"]
I.wait(5);
var req_sub = '//mat-cell[normalize-space()="Submitted"]';
console.log('Value from //mat-cell[normalize-space()="Submitted"] :', req_sub);

 I.wait(5);

 var assert = require('assert');

assert.strictEqual(req_sub, 'Submitted');

I.wait(5);
// ----------- Uncomment End
I.click(LaunchFPS_go.logout_button);
I.wait(5);
});