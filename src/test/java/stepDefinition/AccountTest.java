package stepDefinition;

import java.util.List;
import java.util.Map;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.BaseClass;

public class AccountTest extends BaseClass {

	@When("^I click Accounts tab$")
	public void I_click_Accounts_tab() {
		driver.findElement(By.linkText("Accounts")).click();
	}

	@Then("^I am on Accounts home page$")
	public void I_am_on_Accounts_home_page() {
		String acctHome = driver.findElement(By.className("pageDescription")).getText();
		Assert.assertEquals("Home", acctHome);
	}

	@Then("^I click the new button$")
	public void I_click_the_new_button() {
		driver.findElement(By.name("new")).click();
	}

	@Then("^I enter Account Name field$")
	public void I_enter_Account_Name_field() {
		driver.findElement(By.id("acc2")).sendKeys("Waqas");
	}

	@When("^I click the save button$")
	public void I_click_the_save_button() {
		driver.findElement(By.name("save")).click();
	}

	@Then("^I should see the Account record$")
	public void I_should_see_the_Account_record() {
		System.out.println(driver.getCurrentUrl());
	}

	@Then("^I should see the Rating field$")
	public void I_should_see_the_Rating_field() {
		boolean isRatingPresent = driver.findElement(By.id("acc9")).isDisplayed();
		Assert.assertTrue(isRatingPresent);
	}

	@Then("^I select Hot from the Rating field$")
	public void I_select_Hot_from_the_Rating_field() {
		WebElement ratingField = driver.findElement(By.id("acc9"));
		Select rating = new Select(ratingField);
		rating.selectByValue("Hot");
	}

//	@When("^I create an Account$")
//	public void I_create_an_Account(DataTable accountDetails) throws Throwable {
//		List<Map<String, String>> accountData = accountDetails.asMap(
//		System.out.println(accountData.size());
//		for (Map<String, String> data : accountData) {
//			driver.findElement(By.linkText("Accounts")).click();
//			driver.findElement(By.name("new")).click();
//			driver.findElement(By.id("acc2")).sendKeys(data.get("Account Name"));
//			WebElement type = driver.findElement(By.id("acc9"));
//			Select typeField = new Select(type);
//			typeField.selectByValue(data.get("Rating"));
//			driver.findElement(By.id("acc5")).sendKeys(data.get("Account Number"));
//			driver.findElement(By.id("acc12")).sendKeys(data.get("Website"));
//			driver.findElement(By.name("save")).click();
//		}
//	}

	@When("^I select \"([^\"]*)\" for \"([^\"]*)\" field$")
	public void I_select_for_field(String value, String id) {
		WebElement type = driver.findElement(By.id(id));
		Select typeField = new Select(type);
		typeField.selectByValue(value);
	}
	
	@When("^I click the \"([^\"]*)\" button$")
	public void I_click_the_button(String buttonName)  {
	   driver.findElement(By.name(buttonName)).click();
	}

	@When("^I click \"([^\"]*)\" tab$")
	public void I_click_tab(String menuTab)  {
	    driver.findElement(By.linkText(menuTab)).click();
	}

	@Then("^I am on \"([^\"]*)\" home page$")
	public void I_am_on_home_page(String expectedPage) {
	   String actualPage = driver.findElement(By.className("pageType")).getText(); // Accounts
	   String expPage = expectedPage;
	   Assert.assertEquals(expPage, actualPage);
	}
	
	@When("^I enter \"([^\"]*)\" for the \"([^\"]*)\" text field$")
	public void I_enter_for_the_text_field(String text, String locator) throws InterruptedException  {
	    driver.findElement(By.id(locator)).sendKeys(text);
	}
}
