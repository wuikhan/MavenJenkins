package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(	features = ".", 
					glue = "stepDefinition",
					monochrome = true, 
					dryRun=true,
					plugin = { "pretty",
							"html:Report/Cucumber-Report", 
							"json:Report/Cucumber-Json/report.json",
							"rerun:rerun/failed-scenario.txt"
							})
public class TestRunner {

}
