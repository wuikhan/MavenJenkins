package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(	features = {"@rerun/failed-scenario.txt"}, 
					glue = "stepDefinition",
					monochrome = true, 
					plugin = { "pretty",
							"html:Report/Cucumber-Report", 
							"json:Report/Cucumber-Json/report.json",
							"rerun:rerun/failed-scenario.txt"
							})
public class FailedRunner {

}
