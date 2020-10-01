package com.physIQ.stepDef;

import com.physIQ.pages.BasePage;
import com.physIQ.utils.CommonUtils;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.io.IOException;

public class StepDefinitions {
    AndroidDriver<AndroidElement> androidDriver;
    BasePage basePage;
    CommonUtils commonUtils;

    @Before
    public void setUo() throws IOException {
        androidDriver = CommonUtils.getAndroidDriver();
        basePage = new BasePage(androidDriver);
    }


    @When("user enter {string} and user enter {string}")
    public void user_enter_and_user_enter(String num, String denum) {
        basePage.numerator.sendKeys(num);
        basePage.divisor.sendKeys(denum);
    }

    @Then("user press divide button")
    public void user_press_divide_button() {
        basePage.buttonDivide.click();

    }

    @Then("user validate the expect {string} matches output on the UI")
    public void user_validate_the_expect_matches_output_on_the_ui(String expected) {
        Assert.assertEquals(basePage.result.getText(), expected);

    }

    @Then("user press clear button")
    public void user_press_clear_button() {
        basePage.buttonClear.click();
        Assert.assertEquals(basePage.numerator.getText(), "Enter numerator");
        Assert.assertEquals(basePage.divisor.getText(), "Enter divisor");

    }

    @Given("user sees {string}")
    public void user_sees(String string) {
        AndroidElement element;

        switch (string) {
            case "numerator":
                element = basePage.numerator;
                break;
            case "devisor":
                element = basePage.divisor;
                break;
            case "result":
                element = basePage.result;
                break;
            case "buttonDivide":
                element = basePage.buttonDivide;
                break;
            case "buttonClear":
                element = basePage.buttonClear;
                break;
            default:
                element = null;
        }
        Assert.assertTrue(element.isDisplayed());
    }

    @Given("user avaliable to interact with button {string}")
    public void user_avaliable_to_interact_with_button(String string) {
        AndroidElement element;
        boolean result=false;
        switch (string) {
            case "numerator":
                element = basePage.numerator;
                result = commonUtils.enterText(element);
                break;
            case "devisor":
                element = basePage.divisor;
                result = commonUtils.enterText(element);
                break;
            case "buttonDivide":
                element = basePage.buttonDivide;
                result = element.isEnabled();
                break;
            case "buttonClear":
                element = basePage.buttonClear;
                result = element.isEnabled();
                break;
            case "result":
                element = basePage.result;
                result = true;
                break;
            default:
                element = null;
        }

        Assert.assertTrue(result);
    }
}


