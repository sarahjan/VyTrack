$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "VyTrack Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Home page default login for all users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User is on vyTrack landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "User log in to vyTrack account with valid \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "user156",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "user157",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "user158",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "storemanager89",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "storemanager91",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "salesmanager255",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "salesmanager256",
        "UserUser123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Home page default login for all users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User is on vyTrack landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User log in to vyTrack account with valid user156 and UserUser123",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Home page default login for all users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User is on vyTrack landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User log in to vyTrack account with valid user157 and UserUser123",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Home page default login for all users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User is on vyTrack landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User log in to vyTrack account with valid user158 and UserUser123",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Home page default login for all users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User is on vyTrack landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User log in to vyTrack account with valid storemanager89 and UserUser123",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Home page default login for all users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User is on vyTrack landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User log in to vyTrack account with valid storemanager91 and UserUser123",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Home page default login for all users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User is on vyTrack landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User log in to vyTrack account with valid salesmanager255 and UserUser123",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Home page default login for all users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User is on vyTrack landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User log in to vyTrack account with valid salesmanager256 and UserUser123",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Sales manager logs in with valid credential and see  all the vehicle info.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User is on vyTrack landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User log in with \"storemanager89\" and \"UserUser123\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should be able to find Vehicle under Fleet module",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "See All cars",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Sales manager sould be able to create vehicle.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User is on Vehicles under Fleet module",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "when user click to create car button and add following details",
  "rows": [
    {
      "cells": [
        "abc",
        "123456",
        "Dallas"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Click to Save and Close button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Sales manager should see it in All Cars list",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});