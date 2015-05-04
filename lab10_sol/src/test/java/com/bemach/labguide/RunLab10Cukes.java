package com.bemach.labguide;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by ktran on 4/26/2015.
 */

@RunWith(Cucumber.class)
@CucumberOptions(format = {"html:target/cucumber-html","junit:target/cucumber-junit/Webpage.xml"},
        features = "src/test/resources/com/bemach/labguide"
        , tags = {" @no-payment-info"}
        )
public class RunLab10Cukes {
}
