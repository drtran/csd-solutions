package com.bemach.labguide.common;

/**
 * Created by ktran on 4/25/2015.
 */

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class Hook {

    private static final String IE_DRIVER_IDENTIFIER = "internetexplorer";
    private static final String FIREFOX_DRIVER_IDENTIFIER = "firefox";
    private static final String CHROME_DRIVER_IDENTIFIER = "chrome";
    static final String cvsInformation = "$Header: /usr/local/cvsroot/nextgen/AcceptanceTests/src/test/java/gov/uscourts/ao/oca/td/common/Hook.java,v 1.9 2015/02/12 17:17:35 kiettran Exp $";

    private static WebDriver webDriver;

    public static WebDriver getWebDriver(Class<?> driverTypeDontCare) {
        if (webDriver == null) {
            String driverType = System.getProperty("webDriver");
            if (CHROME_DRIVER_IDENTIFIER.equalsIgnoreCase(driverType)) {
                webDriver = new ChromeDriver();
            } else if (FIREFOX_DRIVER_IDENTIFIER.equalsIgnoreCase(driverType)) {
                webDriver = new FirefoxDriver();
            } else if (IE_DRIVER_IDENTIFIER.equalsIgnoreCase(driverType)) {
                webDriver = new InternetExplorerDriver();
            } else {
                webDriver = new ChromeDriver();
            }

            Runtime.getRuntime().addShutdownHook(new Thread() {
                @Override
                public void run() {
                    if (webDriver != null) {
                        webDriver.manage().deleteCookieNamed("KEY");
                        webDriver.close();
                        webDriver.quit();
                    }
                }
            });
        }
        return webDriver;
    }
}
