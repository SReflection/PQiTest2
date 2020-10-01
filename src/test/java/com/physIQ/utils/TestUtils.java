package com.physIQ.utils;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;

public class TestUtils {
    public static String takeScreenShot() throws IOException {
        File src = ((TakesScreenshot) CommonUtils.getAndroidDriver()).getScreenshotAs(OutputType.FILE);
        // WE need destination to store all my screenshots
        // System.getProperty("user.dir"); will give the project location
        // System.currentTimeMillis() Returns the current time in milliseconds
        String destination = System.getProperty("user.dir") + "/Screenshot/" + System.currentTimeMillis() + ".png";
        File des = new File(destination);

        try {
            // copyFile will get the file from source and store to the destination
            FileUtils.copyFile(src, des);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return destination;


    }
}
