@BankandCashLoginFeature
Feature: Techfios bank and cash New Account Functionality

@BankandCashScenario1
Scenario Outline: User should be able to login with valid credentials 
and open a new account
 
Given User is on the TechFios login page
When User enters username as "<userName>"
When User  enters password as "<password>"
When User clicks on the Submit button
And 		User should land on dashboard page	
When User clicks on Bank and Cash Button
When User Clicks on New Account Button
Then 	User Should Land on Accounts Page
When User enters AccountTitle as "<accountTitle>" in account page
When User enters Description as "<description>"
When User enters InitialBalance as "<initialBalance>"
When User enters AccountNumber as "<accountNumber>"
When User enters ContactPerson as "<contactPerson>"
When User enters PhoneNumber as "<phoneNumber>"
And User enters InternetBanking url as "<InternetBankingURL>"
Then User clicks on SubmitButton
Then User should be able to validate account created successfully

		Examples: 
		|userName									|password	|accountTitle				|description			|initalBalance			 	|accountNumber	|contactPerson   |phoneNumber		|internetBankingUrl		    |SubmitButton|
		|demo@techfios.com	|abc123			|saving556789			|new customer |209076543455			|668881124566			|Juid									|2224144555					|www.techfios.com|													|