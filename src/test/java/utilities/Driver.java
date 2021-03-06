package utilities;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.safari.SafariDriver;

import java.util.concurrent.TimeUnit;

public class Driver {
    private static WebDriver driver;
    public Driver(){

    }
    public static WebDriver getDriver(){
        if(driver==null){
            WebDriverManager.chromedriver().setup();
            driver=new ChromeDriver();

        }driver.manage().timeouts().implicitlyWait(6, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(12,TimeUnit.SECONDS);

        return driver;
    } public  static  void setDriver(String str) {
        WebDriver driver;
        if (str.contains("chrome")) {
            driver = new ChromeDriver();
        } else if (str.contains("firefox")) {
            WebDriverManager.firefoxdriver().setup();

        } else if (str.contains("safari")) {
            driver = new SafariDriver();
        } else {
            driver = new ChromeDriver();
        }

    }
    }