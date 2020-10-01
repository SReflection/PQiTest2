package com.physIQ.pages;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.support.PageFactory;

public class BasePage {
    public BasePage(AndroidDriver<AndroidElement> driver) {
        PageFactory.initElements(new AppiumFieldDecorator(driver), this);
    }

    @AndroidFindBy(id = "com.example.physiqtecodingchallenge:id/edittext_numerator")
    public AndroidElement numerator;

    @AndroidFindBy(id = "com.example.physiqtecodingchallenge:id/edittext_divisor")
    public AndroidElement divisor;

    @AndroidFindBy(id = "com.example.physiqtecodingchallenge:id/textview_result")
    public AndroidElement result;

    @AndroidFindBy(id = "com.example.physiqtecodingchallenge:id/button_divide")
    public AndroidElement buttonDivide;

    @AndroidFindBy(id = "com.example.physiqtecodingchallenge:id/button_clear")
    public AndroidElement buttonClear;


}

