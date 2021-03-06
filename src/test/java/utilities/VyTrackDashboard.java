package utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class VyTrackDashboard {

    WebDriver driver;


    public VyTrackDashboard(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }


    @FindBy(className = "dropdown-toggle")
    public WebElement userMenu;
    @FindBy(linkText = "Logout")
    public WebElement logOut;

}
