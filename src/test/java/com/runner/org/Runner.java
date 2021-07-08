package com.runner.org;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.propertry.FileReader_Manager;

import Cucumber.Automation_baseclass.Base_Class;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = "src\\test\\java\\com\\automation\\feature\\Automation.feature", 
glue = "com\\stepdefinition\\org", monochrome = true,
plugin = {"pretty",
		"com.cucumber.listener.ExtentCucumberFormatter:Reports/ExtentReport.html",
		"json:Report/CucumberJSON_Report.json","html:Report/HTML_Report"})

public class Runner {
	
	public static WebDriver driver;
	@BeforeClass
	public static void browserLaunch() throws Throwable {
		String browser = FileReader_Manager.getinstance().getInstanceCR().getBrowser();
		 driver = Base_Class.getBrowser("Chrome");
		

	}

	
}
