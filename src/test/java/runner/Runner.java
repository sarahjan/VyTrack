package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


    @RunWith(Cucumber.class)
    @CucumberOptions(
            features = "src/test/java/features",
            dryRun = true,
            glue = "steps",
            tags="@smoke",
            plugin = {"pretty","html:target/cucumber","json:target/cucumber.json","junit:target/cukes.xml"}
    )
    public class Runner {


}
