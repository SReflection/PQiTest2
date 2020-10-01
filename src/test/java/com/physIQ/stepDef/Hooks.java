package com.physIQ.stepDef;

import com.physIQ.utils.TestUtils;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;


import java.io.IOException;

public class Hooks {
    @Before
    public void setUp(Scenario scenario) {
    }

    @After
    public void tearDown(Scenario scenario) throws IOException {
        //after annotation will execute after each scenario even though they are failed, undefined
        if (scenario.isFailed()) {
            scenario.log("log massegs");
            System.out.println(scenario.getName() + "  is failed");
            TestUtils.takeScreenShot();
        }
    }
}
