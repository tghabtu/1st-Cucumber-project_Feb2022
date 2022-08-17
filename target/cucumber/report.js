$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BankandCash.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BankandCashLoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@BankandCashScenario1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on the TechFios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User enters username as \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User  enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on the Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should land on dashboard page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Bank and Cash Button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User Clicks on New Account Button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User Should Land on Accounts Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters AccountTitle as \"\u003caccountTitle\u003e\" in account page",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters Description as \"\u003cdescription\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters InitialBalance as \"\u003cinitialBalance\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters AccountNumber as \"\u003caccountNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters ContactPerson as \"\u003ccontactPerson\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User enters PhoneNumber as \"\u003cphoneNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enters InternetBanking url as \"\u003cInternetBankingURL\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on SubmitButton",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "accountTitle",
        "description",
        "initalBalance",
        "accountNumber",
        "contactPerson",
        "phoneNumber",
        "internetBankingUrl",
        "SubmitButton"
      ],
      "line": 27,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "saving556789",
        "new customer",
        "209076543455",
        "668881124566",
        "Juid",
        "2224144555",
        "www.techfios.com",
        ""
      ],
      "line": 28,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3039308900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@BankandCashLoginFeature"
    },
    {
      "line": 4,
      "name": "@BankandCashScenario1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on the TechFios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User  enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on the Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should land on dashboard page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Bank and Cash Button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User Clicks on New Account Button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User Should Land on Accounts Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters AccountTitle as \"saving556789\" in account page",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters Description as \"new customer\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters InitialBalance as \"\u003cinitialBalance\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters AccountNumber as \"668881124566\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters ContactPerson as \"Juid\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User enters PhoneNumber as \"2224144555\"",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enters InternetBanking url as \"\u003cInternetBankingURL\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on SubmitButton",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_TechFios_login_page()"
});
formatter.result({
  "duration": 1633421400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 5150889001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 5101785400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_the_Submit_button()"
});
formatter.result({
  "duration": 6796753300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 51564400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Bank_and_Cash_Button()"
});
formatter.result({
  "duration": 3078022800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Clicks_on_New_Account_Button()"
});
formatter.result({
  "duration": 3717739500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Should_Land_on_Accounts_Page()"
});
formatter.result({
  "duration": 44710100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saving556789",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_AccountTitle_as_in_account_page(String)"
});
formatter.result({
  "duration": 3111788500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new customer",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enters_Description_as(String)"
});
formatter.result({
  "duration": 3113970300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cinitialBalance\u003e",
      "offset": 31
    }
  ],
  "location": "LoginStepDefinition.user_enters_InitialBalance_as(String)"
});
formatter.result({
  "duration": 3129905700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "668881124566",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_AccountNumber_as(String)"
});
formatter.result({
  "duration": 4106924400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Juid",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_ContactPerson_as(String)"
});
formatter.result({
  "duration": 4101807900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2224144555",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enters_PhoneNumber_as(String)"
});
formatter.result({
  "duration": 4119459200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cInternetBankingURL\u003e",
      "offset": 36
    }
  ],
  "location": "LoginStepDefinition.user_enters_InternetBanking_url_as(String)"
});
formatter.result({
  "duration": 4127812900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_SubmitButton()"
});
formatter.result({
  "duration": 4914356700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 38000,
  "status": "passed"
});
formatter.after({
  "duration": 746577900,
  "status": "passed"
});
});