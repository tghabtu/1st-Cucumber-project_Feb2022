package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions( 
		features = "C:\\Users\\habtu\\Feb22_Selenium-workspace\\Cucumber_HW_New\\src\\test\\java\\feartures",
		glue ="steps",                                                          
		tags="@BankandCashScenario1",
		monochrome =true,                                                  
		dryRun=false,
		plugin = {
				"pretty",
				"html:target/cucumber",
				"json:target/cucumber. json"
		}
		)		
				

	public class LoginRunner {

}
