package com.stepdefinition.org;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.adactin.propertry.FileReader_Manager;
import com.adactin.propertry.Page_Object_Manager;
import com.automation.pom.loginPage_pom;
import com.runner.org.Runner;

import Cucumber.Automation_baseclass.Base_Class;
import cucumber.api.Scenario;

import cucumber.api.java.en.*;

public class LoginPage_stepdefinition extends Base_Class{
	public static WebDriver driver = Runner.driver;
	
	Page_Object_Manager pom = new Page_Object_Manager(driver);
	
	public void beforeHooks(Scenario scenario) {
		String status = scenario.getStatus();
		System.out.println("Scenario status : " + status);
		}
	public void afterHooks(Scenario scenario) throws Throwable {
		if (scenario.isFailed()) {
			takeScreenshot("C:\\Users\\ELCOT\\eclipse-workspace\\Automation_Practice_Hooks\\Screenshot\\img.png");
		}
		System.out.println("Mission Completed");

	}
	
	@Given("^User launches url of adactin application$")
	public void user_launches_url_of_adactin_application() throws Throwable {
		String url = FileReader_Manager.getinstance().getInstanceCR().getUrl();
		getUrl(url);
	    }

	@When("^User enters \"([^\"]*)\" as username$")
	public void user_enters_as_username(String arg1) throws Throwable {
	 inputOnElement(pom.getInstanceLogin().getUsername(), arg1);   
	}

	@When("^User enters \"([^\"]*)\" as password$")
	public void user_enters_as_password(String arg1) throws Throwable {
	 inputOnElement(pom.getInstanceLogin().getPassword(), arg1);   
	}

	@When("^User click login button$")
	public void user_click_login_button() throws Throwable {
	clickOnElement(pom.getInstanceLogin().getLogin());    
	}

	@Then("^User validate login button$")
	public void user_validate_login_button() throws Throwable {
	    }

}
