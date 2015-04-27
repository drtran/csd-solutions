package com.bemach.labguide.steps;

import com.bemach.labguide.common.Hook;
import com.bemach.labguide.common.PaymentInfo;
import com.bemach.labguide.pages.AdoptMePage;
import com.bemach.labguide.pages.OrderPage;
import com.bemach.labguide.pages.PuppiesMainPage;
import com.bemach.labguide.pages.ViewDetailsPage;
import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

import static junit.framework.Assert.assertTrue;

/**
 * Created by ktran on 4/26/2015.
 */
public class BuyingOnePuppySteps {

    private WebDriver driver;
    private PuppiesMainPage main;
    private ViewDetailsPage viewDetails;
    private AdoptMePage adoptMe;
    private OrderPage order;

    @Before
    public void setUp() {
        driver = Hook.getWebDriver(ChromeDriver.class);
        main = PageFactory.initElements(driver, PuppiesMainPage.class);
        main.setPageUrl("http://puppies.herokuapp.com");
    }

    @Given("^I am on the puppy adoption site$")
    public void visitPuppyAdoptionWebSite() throws Throwable {
        assertTrue("Not at Puppy Adoption Home Page!", main.locationIsVerified());
    }


    @When("^I click the View Details button for \"([^\"]*)\"$")
    public void I_click_the_View_Details_button_for(String petName) throws Throwable {
        viewDetails = main.getViewDetailsPage(petName);
        assertTrue("Not at View Details Page!", viewDetails.locationIsVerified());
    }

     @And("^I click the Adopt Me! button$")
    public void I_click_the_Adopt_Me_button() throws Throwable {
        adoptMe = viewDetails.adoptMe();
        assertTrue("Not at Adopt Me Page!", adoptMe.locationIsVerified());
    }

    @And("^I click the Complete the Adoption button$")
    public void I_click_the_Complete_the_Adoption_button() throws Throwable {
        order = adoptMe.completeTheAdoption();
        PaymentInfo paymentInfo = new PaymentInfo();

    }

    @When("^I complete the adoption with:$")
    public void I_complete_the_adoption_with(List<PaymentInfo> paymentInfo) throws Throwable {
        order.completeOrder(paymentInfo.get(0));
    }



    @Then("^I should see \"([^\"]*)\"$")
    public void I_should_see(String expectedMessage) throws Throwable {
        Assert.assertTrue(expectedMessage, order.lastOrderWasSuccessful());
    }
}
