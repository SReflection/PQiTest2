$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Division.feature");
formatter.feature({
  "name": "Division check scenarios",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@BaseTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Division check with different numbers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter \"\u003cnumerator\u003e\" and user enter \"\u003cdenominator\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user press divide button",
  "keyword": "Then "
});
formatter.step({
  "name": "user validate the expect \"\u003cresult\u003e\" matches output on the UI",
  "keyword": "And "
});
formatter.step({
  "name": "user press clear button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "numerator",
        "denominator",
        "result"
      ]
    },
    {
      "cells": [
        "23",
        "23",
        "1.0"
      ]
    },
    {
      "cells": [
        "2",
        "1",
        "2.0"
      ]
    },
    {
      "cells": [
        "-1",
        "2",
        "-0.5"
      ]
    },
    {
      "cells": [
        "-1",
        "-2",
        "0.5"
      ]
    },
    {
      "cells": [
        "1111",
        "222222222",
        "4.9995000049995E-6"
      ]
    },
    {
      "cells": [
        "1.6",
        "2",
        "0.8"
      ]
    },
    {
      "cells": [
        "1",
        "2.2",
        "0.45454545454545453"
      ]
    },
    {
      "cells": [
        "0",
        "2",
        "0.0"
      ]
    },
    {
      "cells": [
        "0",
        "-2",
        "-0.0"
      ]
    },
    {
      "cells": [
        "0",
        "0",
        "NaN"
      ]
    },
    {
      "cells": [
        "2",
        "0",
        "Infinity"
      ]
    },
    {
      "cells": [
        "-1",
        "0",
        "-Infinity"
      ]
    },
    {
      "cells": [
        "1",
        "-0",
        "Infinity"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Division check with different numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BaseTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"23\" and user enter \"23\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_enter_and_user_enter(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press divide button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_divide_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the expect \"1.0\" matches output on the UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_validate_the_expect_matches_output_on_the_ui(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press clear button",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_clear_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Division check with different numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BaseTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"2\" and user enter \"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_enter_and_user_enter(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press divide button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_divide_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the expect \"2.0\" matches output on the UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_validate_the_expect_matches_output_on_the_ui(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press clear button",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_clear_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Division check with different numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BaseTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"-1\" and user enter \"2\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_enter_and_user_enter(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press divide button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_divide_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the expect \"-0.5\" matches output on the UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_validate_the_expect_matches_output_on_the_ui(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press clear button",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_clear_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Division check with different numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BaseTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"-1\" and user enter \"-2\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_enter_and_user_enter(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press divide button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_divide_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the expect \"0.5\" matches output on the UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_validate_the_expect_matches_output_on_the_ui(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press clear button",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_clear_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Division check with different numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BaseTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"1111\" and user enter \"222222222\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_enter_and_user_enter(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press divide button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_divide_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the expect \"4.9995000049995E-6\" matches output on the UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_validate_the_expect_matches_output_on_the_ui(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press clear button",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_clear_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Division check with different numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BaseTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"1.6\" and user enter \"2\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_enter_and_user_enter(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press divide button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_divide_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the expect \"0.8\" matches output on the UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_validate_the_expect_matches_output_on_the_ui(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press clear button",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_clear_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Division check with different numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BaseTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"1\" and user enter \"2.2\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_enter_and_user_enter(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press divide button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_divide_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the expect \"0.45454545454545453\" matches output on the UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_validate_the_expect_matches_output_on_the_ui(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press clear button",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_clear_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Division check with different numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BaseTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"0\" and user enter \"2\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_enter_and_user_enter(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press divide button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_divide_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the expect \"0.0\" matches output on the UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_validate_the_expect_matches_output_on_the_ui(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press clear button",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_clear_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Division check with different numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BaseTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"0\" and user enter \"-2\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_enter_and_user_enter(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press divide button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_divide_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the expect \"-0.0\" matches output on the UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_validate_the_expect_matches_output_on_the_ui(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press clear button",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_clear_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Division check with different numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BaseTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"0\" and user enter \"0\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_enter_and_user_enter(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press divide button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_divide_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the expect \"NaN\" matches output on the UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_validate_the_expect_matches_output_on_the_ui(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press clear button",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_clear_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Division check with different numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BaseTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"2\" and user enter \"0\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_enter_and_user_enter(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press divide button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_divide_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the expect \"Infinity\" matches output on the UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_validate_the_expect_matches_output_on_the_ui(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press clear button",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_clear_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Division check with different numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BaseTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"-1\" and user enter \"0\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_enter_and_user_enter(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press divide button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_divide_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the expect \"-Infinity\" matches output on the UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_validate_the_expect_matches_output_on_the_ui(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press clear button",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_clear_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Division check with different numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BaseTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"1\" and user enter \"-0\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_enter_and_user_enter(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press divide button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_divide_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the expect \"Infinity\" matches output on the UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_validate_the_expect_matches_output_on_the_ui(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[-]Infinity\u003e but was:\u003c[]Infinity\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.physIQ.stepDef.StepDefinitions.user_validate_the_expect_matches_output_on_the_ui(StepDefinitions.java:41)\n\tat ✽.user validate the expect \"Infinity\" matches output on the UI(file:///Users/aibek/Downloads/PhysIQ/src/test/resources/Division.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "user press clear button",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_press_clear_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("log massegs");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Checking Visibility and Availibility of interaction of all button",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user sees \"\u003cbutton\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user avaliable to interact with button \"\u003cbutton\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "button"
      ]
    },
    {
      "cells": [
        "numerator"
      ]
    },
    {
      "cells": [
        "devisor"
      ]
    },
    {
      "cells": [
        "result"
      ]
    },
    {
      "cells": [
        "buttonDivide"
      ]
    },
    {
      "cells": [
        "buttonClear"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Checking Visibility and Availibility of interaction of all button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BaseTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"numerator\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_sees(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user avaliable to interact with button \"numerator\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_avaliable_to_interact_with_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Checking Visibility and Availibility of interaction of all button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BaseTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"devisor\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_sees(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user avaliable to interact with button \"devisor\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_avaliable_to_interact_with_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Checking Visibility and Availibility of interaction of all button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BaseTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"result\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_sees(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user avaliable to interact with button \"result\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_avaliable_to_interact_with_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Checking Visibility and Availibility of interaction of all button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BaseTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"buttonDivide\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_sees(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user avaliable to interact with button \"buttonDivide\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_avaliable_to_interact_with_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Checking Visibility and Availibility of interaction of all button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BaseTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"buttonClear\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_sees(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user avaliable to interact with button \"buttonClear\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.physIQ.stepDef.StepDefinitions.user_avaliable_to_interact_with_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});