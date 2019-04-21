(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{324:function(e,t,r){"use strict";r.r(t);var o=r(43),i=Object(o.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h4",{attrs:{id:"a-multi-part-series-showing-an-end-to-end-possibility"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a-multi-part-series-showing-an-end-to-end-possibility","aria-hidden":"true"}},[e._v("#")]),e._v(" A multi-part series showing an end-to-end possibility")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.linkedin.com/in/crystal-tenn-6a0b9b67/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crystal Tenn"),r("OutboundLink")],1),e._v(" and I teamed up to bring an E2E blog series that features an Azure App Service website that communicates with an API project, which communicates to an Azure SQL back-end. The app is a traditional To-Do application based on an existing sample that used ADO.NET, but adapted for Azure deploy and to Visual Studio 2017. The  technology/tooling stack is Visual Studio, VSTS, C#, Angular, and SQL.")]),e._v(" "),r("p",[e._v("The process for the app is described below. In Visual Studio, you will start out with a working To Do list application. You will push the code to VSTS (Visual Studio Team Services). Then you will create a CI/CD (Continuous Integration/Continuous Delivery) process in order to deploy to Azure. In Azure you will create 3 resources: Azure Web App, Azure API App, and an Azure SQL Server through this exercise.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip101.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Local Setup - SQL Server"),r("OutboundLink")],1),e._v(" - Locally connect a front-end website to an API, and connect the API to a SQL Server.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip102.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Local Setup - Visual Studio and Swagger"),r("OutboundLink")],1),e._v(" - Continue Part 1 and use a local instance of Visual Studio and Swagger to communicate to our db.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip103.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger - Learn how to use Swagger for API management"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip104.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Deployment - Deploy the SQL database to Azure manually"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip105.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Deployment - Deploy the front-end Web App and API App to Azure manually"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip107.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adding the project to VSTS with Git"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip108.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSTS Continuous Integration - Setup a CI Process in VSTS"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip109.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSTS Continuous Deployment - Setup a CD Process in VSTS"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip110.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cleanup - Cleanup and delete the Azure resources created in this tutorial"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("Keep in mind : While we won't be going into the deep specifics of how to code, you should be able to use this guide to look at several parts of the Azure technology stack and how you can best implement them in your organization.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/todolist-diagram.png")}}),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("Please download the required software listed below. If you already have the software and a different version, that is no problem at all, but probably best to use the latest version. If you have access to paid versions of the software, these are fine as well.")]),e._v(" "),r("p",[e._v('The tutorial can be completed for free, but will require a Azure account. Note: The Azure account asks you for a credit card number, but will not charge you at all or "roll into a paid version", it simply expires when your trial month is up.')]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.azure.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure"),r("OutboundLink")],1),e._v(' - Get a free account - You get $200 USD credit a month, these are "free" credits on a trial account and cost you nothing.')]),e._v(" "),r("li",[e._v("Visual Studio 2017 - As a note, the instructions will be using Visual Studio 2017. You can get Visual Studio 2017 Community for free here: "),r("a",{attrs:{href:"https://www.visualstudio.com/vs/community/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.visualstudio.com/vs/community/"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("SQL Server Express: "),r("a",{attrs:{href:"https://www.microsoft.com/en-us/sql-server/sql-server-editions-express",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.microsoft.com/en-us/sql-server/sql-server-editions-express"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("SQL Server Management Studio: "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Basic understanding of coding & installation")])]),e._v(" "),r("h4",{attrs:{id:"local-setup-sql-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#local-setup-sql-server","aria-hidden":"true"}},[e._v("#")]),e._v(" Local Setup - SQL Server")]),e._v(" "),r("p",[e._v("The local setup will start with setting up your database.  You will then open the solution in Visual Studio.  You need to connect the API project to your SQL Server.  Then connect your front end Angular project to the API project.")]),e._v(" "),r("p",[e._v("1.) We'll be working with an existing app. So download "),r("a",{attrs:{href:"https://github.com/catenn/ToDoList/archive/master.zip?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("it here"),r("OutboundLink")],1),e._v(" and extract it to a folder on your hard drive.")]),e._v(" "),r("p",[e._v("2.) Open SQL Server Management Studio (SSMS) and click the dropdown on Server Name and choose "),r("strong",[e._v("Browse for more")]),e._v(".")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-browseformore.jpg")}}),e._v(" "),r("p",[e._v("3.) Choose the Server name of your instance. This name most likely will be in the format "),r("strong",[e._v("ComputerName\\ServerName")]),e._v(".")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-servers.jpg")}}),e._v(" "),r("p",[e._v("4.) Choose Windows Authentication. Save your "),r("strong",[e._v("ComputerName\\ServerName")]),e._v(" in a Notepad, we will need this again later. Hit Connect.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-sqllogin.jpg")}}),e._v(" "),r("p",[e._v("5.) Open the folder that we downloaded earlier by double clicking "),r("strong",[e._v("ToDoList.sln")]),e._v(". It should open in Visual Studio 2017.")]),e._v(" "),r("p",[e._v("6.) Right click on the ToDoListDb project and choose "),r("strong",[e._v("Publish")]),e._v(".")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-slnexplorerpublish.jpg")}}),e._v(" "),r("p",[e._v("7.) On the modal, click Edit:")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-editdbconnection.jpg")}}),e._v(" "),r("p",[e._v("8.) For Server name, take the Notepad value you saved for "),r("strong",[e._v("ComputerName\\ServerName")]),e._v(" and enter it here.  Make sure the Database Name is ToDoListDb, but that should be filled in for you. Click OK.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-connection.jpg")}}),e._v(" "),r("p",[e._v("9.) Don't edit any other values on this modal and just hit "),r("strong",[e._v("Publish")]),e._v(". Note: Test Connection will not work.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-publishdb.jpg")}}),e._v(" "),r("p",[e._v("10.) You will see the publish begin.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-publish1.jpg")}}),e._v(" "),r("p",[e._v("11.) It is done when you see this:")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-publish2.jpg")}}),e._v(" "),r("p",[e._v("12.) Go back to "),r("strong",[e._v("SQL Server Management Studio")]),e._v(" and hit refresh:")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-refresh.jpg")}}),e._v(" "),r("p",[e._v("13.) Your SQL database should look something like this now.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-sqlverify.jpg")}}),e._v(" "),r("p",[e._v("Congrats, we now have our SQL database setup locally. Come back and we'll continue setting up Visual Studio and Swagger.")])])},[],!1,null,null,null);t.default=i.exports}}]);