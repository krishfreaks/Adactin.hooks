$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/automation/feature/Automation.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality of adactin application",
  "description": "",
  "id": "login-functionality-of-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": ": User enters valid username and password",
  "description": "",
  "id": "login-functionality-of-adactin-application;:-user-enters-valid-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User launches url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters \"\u003cUsername\u003e\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003cPassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User validate login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "login-functionality-of-adactin-application;:-user-enters-valid-username-and-password;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 13,
      "id": "login-functionality-of-adactin-application;:-user-enters-valid-username-and-password;;1"
    },
    {
      "cells": [
        "ajsjdj",
        "37474"
      ],
      "line": 14,
      "id": "login-functionality-of-adactin-application;:-user-enters-valid-username-and-password;;2"
    },
    {
      "cells": [
        "krishajai",
        "260593"
      ],
      "line": 15,
      "id": "login-functionality-of-adactin-application;:-user-enters-valid-username-and-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": ": User enters valid username and password",
  "description": "",
  "id": "login-functionality-of-adactin-application;:-user-enters-valid-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User launches url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters \"ajsjdj\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"37474\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User validate login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage_stepdefinition.user_launches_url_of_adactin_application()"
});
formatter.result({
  "duration": 4386794200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ajsjdj",
      "offset": 13
    }
  ],
  "location": "LoginPage_stepdefinition.user_enters_as_username(String)"
});
formatter.result({
  "duration": 900125500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "37474",
      "offset": 13
    }
  ],
  "location": "LoginPage_stepdefinition.user_enters_as_password(String)"
});
formatter.result({
  "duration": 552331000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage_stepdefinition.user_click_login_button()"
});
formatter.result({
  "duration": 1631938600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage_stepdefinition.user_validate_login_button()"
});
formatter.result({
  "duration": 111400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": ": User enters valid username and password",
  "description": "",
  "id": "login-functionality-of-adactin-application;:-user-enters-valid-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User launches url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters \"krishajai\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"260593\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User validate login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage_stepdefinition.user_launches_url_of_adactin_application()"
});
formatter.result({
  "duration": 670810200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "krishajai",
      "offset": 13
    }
  ],
  "location": "LoginPage_stepdefinition.user_enters_as_username(String)"
});
formatter.result({
  "duration": 212384500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "260593",
      "offset": 13
    }
  ],
  "location": "LoginPage_stepdefinition.user_enters_as_password(String)"
});
formatter.result({
  "duration": 209459200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage_stepdefinition.user_click_login_button()"
});
formatter.result({
  "duration": 757016400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage_stepdefinition.user_validate_login_button()"
});
formatter.result({
  "duration": 89300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User Search the hotel",
  "description": "",
  "id": "login-functionality-of-adactin-application;user-search-the-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "User selects location",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User selects hotels",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User selects roomtype",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User selects no of rooms",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clear check in date",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enters check in date",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clear check out date",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enters check out date",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User selects adults per room",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User selects children per room",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User validate search button",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchHotel_stepdefinition.user_selects_location()"
});
formatter.result({
  "duration": 1791773900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#location\"}\n  (Session info: chrome\u003d91.0.4472.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.43.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52535}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6d8c685f09e8d363bdda7d495bf8e08d\n*** Element info: {Using\u003did, value\u003dlocation}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat Cucumber.Automation_baseclass.Base_Class.dropDown(Base_Class.java:67)\r\n\tat com.stepdefinition.org.SearchHotel_stepdefinition.user_selects_location(SearchHotel_stepdefinition.java:21)\r\n\tat ✽.When User selects location(src/test/java/com/automation/feature/Automation.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SearchHotel_stepdefinition.user_selects_hotels()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchHotel_stepdefinition.user_selects_roomtype()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchHotel_stepdefinition.user_selects_no_of_rooms()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchHotel_stepdefinition.user_clear_check_in_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchHotel_stepdefinition.user_enters_check_in_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchHotel_stepdefinition.user_clear_check_out_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchHotel_stepdefinition.user_enters_check_out_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchHotel_stepdefinition.user_selects_adults_per_room()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchHotel_stepdefinition.user_selects_children_per_room()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchHotel_stepdefinition.user_validate_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 32,
  "name": "User checks the information of select hotel",
  "description": "",
  "id": "login-functionality-of-adactin-application;user-checks-the-information-of-select-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "User click on radio button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User validate continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "SelectHotel_stepdefinition.user_click_on_radio_button()"
});
formatter.result({
  "duration": 36813400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#radiobutton_0\"}\n  (Session info: chrome\u003d91.0.4472.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.43.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52535}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6d8c685f09e8d363bdda7d495bf8e08d\n*** Element info: {Using\u003did, value\u003dradiobutton_0}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat Cucumber.Automation_baseclass.Base_Class.clickOnElement(Base_Class.java:58)\r\n\tat com.stepdefinition.org.SelectHotel_stepdefinition.user_click_on_radio_button(SelectHotel_stepdefinition.java:22)\r\n\tat ✽.When User click on radio button(src/test/java/com/automation/feature/Automation.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SelectHotel_stepdefinition.user_validate_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 36,
  "name": "User Book the hotel",
  "description": "",
  "id": "login-functionality-of-adactin-application;user-book-the-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "User enters the firstname",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User enters the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User enters the billing address",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User enters the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User selects credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User selects credit card expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User selects credit card expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User enters CVV number",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User click booknow button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User validate booknow button",
  "keyword": "Then "
});
formatter.match({
  "location": "BookHotel_stepdefinition.user_enters_the_firstname()"
});
formatter.result({
  "duration": 43524800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#first_name\"}\n  (Session info: chrome\u003d91.0.4472.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.43.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52535}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6d8c685f09e8d363bdda7d495bf8e08d\n*** Element info: {Using\u003did, value\u003dfirst_name}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\r\n\tat Cucumber.Automation_baseclass.Base_Class.sendkeys_on_element(Base_Class.java:107)\r\n\tat com.stepdefinition.org.BookHotel_stepdefinition.user_enters_the_firstname(BookHotel_stepdefinition.java:21)\r\n\tat ✽.When User enters the firstname(src/test/java/com/automation/feature/Automation.feature:37)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BookHotel_stepdefinition.user_enters_the_lastname()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookHotel_stepdefinition.user_enters_the_billing_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookHotel_stepdefinition.user_enters_the_credit_card_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookHotel_stepdefinition.user_selects_credit_card_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookHotel_stepdefinition.user_selects_credit_card_expiry_month()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookHotel_stepdefinition.user_selects_credit_card_expiry_year()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookHotel_stepdefinition.user_enters_CVV_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookHotel_stepdefinition.user_click_booknow_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookHotel_stepdefinition.user_validate_booknow_button()"
});
formatter.result({
  "status": "skipped"
});
});