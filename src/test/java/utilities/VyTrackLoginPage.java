package utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class VyTrackLoginPage {

    public WebDriver driver;




        public VyTrackLoginPage(WebDriver driver){
            this.driver=driver;
            PageFactory.initElements(driver,this);
        }


        @FindBy(id = "prependedInput")
        public WebElement userName;

        @FindBy(id = "prependedInput2")
        public WebElement password;

        @FindBy(id="_submit")
        public WebElement loginBTN;

        @FindBy(css = ".form-signin__footer > a:nth-child(1)")
        public WebElement forgotPassword;

        @FindBy(css = ".custom-checkbox__icon")
        public WebElement rememberPassword;

        public void login(String usernameText,String passwordText) {
            userName.sendKeys(usernameText);
            password.sendKeys(passwordText);
            loginBTN.click();

        }
    }


