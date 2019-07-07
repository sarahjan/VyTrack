package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import utilities.Driver;
import utilities.VyTrackDashboard;
import utilities.VyTrackLoginPage;

public class Step {
    public static WebDriver driver;
    @Given("User is on vyTrack landing page")
    public void user_is_on_vyTrack_landing_page() {
        driver = Driver.getDriver();
        driver.get("http://qa1.vytrack.com/user/login");
        System.out.println("Given is done");
    }

    @When("^User log in to vyTrack account with valid (.+) and (.+)$")
    public void user_log_in_to_vytrack_account_with_valid_and(String username, String password) throws Throwable {
        VyTrackLoginPage loginPage = new VyTrackLoginPage(driver);
        VyTrackDashboard dashboard = new VyTrackDashboard(driver);
        loginPage.login(username, password);
        System.out.println(driver.getTitle() + " " + driver.getCurrentUrl());
        Thread.sleep(3000);
        Assert.assertTrue(driver.getTitle().equals("Dashboard"), username + " was tested ");
        dashboard.userMenu.click();
        dashboard.logOut.click();
        Thread.sleep(3000);

    }

    @When("User log in to vyTrack account with valid storemanager{int} and UserUser{int}")
    public void user_log_in_to_vyTrack_account_with_valid_storemanager_and_UserUser(Integer int1, Integer int2) {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @When("User log in to vyTrack account with valid salesmanager{int} and UserUser{int}")
    public void user_log_in_to_vyTrack_account_with_valid_salesmanager_and_UserUser(Integer int1, Integer int2) {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @When("User log in with {string} and {string}")
    public void user_log_in_with_and(String string, String string2) {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @Then("User should be able to find Vehicle under Fleet module")
    public void user_should_be_able_to_find_Vehicle_under_Fleet_module() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @Then("See All cars")
    public void see_All_cars() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @Given("User is on Vehicles under Fleet module")
    public void user_is_on_Vehicles_under_Fleet_module() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @When("when user click to create car button and add following details")
    public void when_user_click_to_create_car_button_and_add_following_details(io.cucumber.datatable.DataTable dataTable) {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
        // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
        // Double, Byte, Short, Long, BigInteger or BigDecimal.
        //
        // For other transformations you can register a DataTableType.
        throw new cucumber.api.PendingException();
    }

    @Then("Click to Save and Close button")
    public void click_to_Save_and_Close_button() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @Then("Sales manager should see it in All Cars list")
    public void sales_manager_should_see_it_in_All_Cars_list() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }
}
