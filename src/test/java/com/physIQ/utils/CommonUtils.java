package com.physIQ.utils;


import com.physIQ.pages.BasePage;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.remote.AutomationName;
import io.appium.java_client.remote.MobileCapabilityType;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class CommonUtils {

    static BasePage basePage;

    public static DesiredCapabilities getDesiredCaps() throws IOException {

        File apkFile = new File("src/test/resources/app-release.apk");
        DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
        desiredCapabilities.setPlatform(Platform.ANDROID);
        desiredCapabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "pixelApi29");
        desiredCapabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, AutomationName.ANDROID_UIAUTOMATOR2);
        desiredCapabilities.setCapability(MobileCapabilityType.APP, apkFile.getAbsolutePath());
        desiredCapabilities.setCapability(MobileCapabilityType.NEW_COMMAND_TIMEOUT, 600);
        return desiredCapabilities;
    }

    static AndroidDriver<AndroidElement> driver;

    public static AndroidDriver<AndroidElement> getAndroidDriver() throws IOException {
        if (driver == null) {
            URL url = new URL("http:/localhost:4723/wd/hub");
            DesiredCapabilities des = getDesiredCaps();
            driver = new AndroidDriver(url, des);
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
        }
        basePage = new BasePage(driver);
        return driver;
    }
    public static boolean enterText(AndroidElement element){
        boolean result;

        element.sendKeys("12");
        result = element.getText().equals("12");
        basePage.buttonClear.click();
        return result;
    }

}
