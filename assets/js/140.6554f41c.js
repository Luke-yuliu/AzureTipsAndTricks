(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{441:function(e,t,a){"use strict";a.r(t);var r=a(43),n=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h4",{attrs:{id:"containers-for-the-rest-of-us"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#containers-for-the-rest-of-us","aria-hidden":"true"}},[e._v("#")]),e._v(" Containers for the rest of us")]),e._v(" "),a("p",[e._v("For some reason, I find containers are confusing and my goal with my "),a("a",{attrs:{href:"https://michaelcrump.net/azure-tips-and-tricks-complete-list/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Tips and Tricks"),a("OutboundLink")],1),e._v(" is to try to make things easier. In this mini-series, I'll walk you through "),a("a",{attrs:{href:"https://www.docker.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),a("OutboundLink")],1),e._v(" and how I use it with Azure. Below is a list of post that you can expect for this week.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip45.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Tips and Tricks Part 45 - Getting Started with Docker and Azure"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip46.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Tips and Tricks Part 46 - Run an app inside a Container Image with Docker"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip47.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Today - Azure Tips and Tricks Part 47 - Creating a Container Image with Docker"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip47.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Tips and Tricks Part 48 - Pushing a Container Image to a Docker Repo"),a("OutboundLink")],1)])]),e._v(" "),a("h4",{attrs:{id:"create-an-app-to-run-inside-a-container-image-with-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-app-to-run-inside-a-container-image-with-docker","aria-hidden":"true"}},[e._v("#")]),e._v(" Create an app to run inside a Container Image with Docker")]),e._v(" "),a("p",[e._v("Let's continue where we "),a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip46.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("left off"),a("OutboundLink")],1),e._v(" in our last post, which showed how to use an image from the Docker Store as our base and create our own console app. In this post, we'll create a new image that we can distribute that contains our new app.")]),e._v(" "),a("p",[e._v("Remember how we used the "),a("code",[e._v("dotnet build")]),e._v(" command in the last post? Well if you navigate the file structure of our existing console app, then you'll see there is a "),a("code",[e._v("myapp.dll")]),e._v(" that contains the executable code.")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("root@40bac5113803:~/myapp/bin/Debug/netcoreapp2.0# dir\nmyapp.deps.json  myapp.dll  myapp.pdb  myapp.runtimeconfig.dev.json  myapp.runtimeconfig.json\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("If you navigate back to the "),a("code",[e._v("root")]),e._v(" directory, then you can run "),a("code",[e._v("dotnet run -p /myapp/myapp.csproj")]),e._v(" to see the "),a("code",[e._v("Hello World!")]),e._v(" output.")]),e._v(" "),a("p",[e._v("Let's save this into a file that we can run later.")]),e._v(" "),a("p",[e._v("Type cd "),a("code",[e._v("cd /usr/local/bin")]),e._v(" and then "),a("code",[e._v("cat > startmyapp.sh")]),e._v(". Add "),a("code",[e._v("#!/bin/bash")]),e._v(" to the first line and then "),a("code",[e._v("dotnet run -p /myapp/myapp.csproj")]),e._v(" to the second line. Press CTRL-D to exit out.")]),e._v(" "),a("p",[e._v("Try out the command by typing "),a("code",[e._v("sh startmyapp.sh")]),e._v(" and your app should run.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/dockerazure7.png")}}),e._v(" "),a("p",[e._v("Type "),a("code",[e._v("exit")]),e._v(" and you'll return to Terminal or command prompt window.")]),e._v(" "),a("p",[e._v("Now we want to add our application to a container.")]),e._v(" "),a("p",[e._v("Run "),a("code",[e._v("docker ps -a")]),e._v(" to see what the name of our container is.")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                      PORTS               NAMES\n7c5da93bf968        c0                  "bash"              10 minutes ago      Exited (0) 51 seconds ago                       myapp\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Now run "),a("code",[e._v("docker commit 7c mbcrump:awesomeapp")]),e._v(" to add the app to a container. After docker commit, we took the first two characters of the "),a("code",[e._v("container id")]),e._v(" and created the name "),a("code",[e._v("mbcrump")]),e._v(" and gave it a tag of "),a("code",[e._v("awesomeapp")]),e._v(".")]),e._v(" "),a("p",[e._v("Now we can run "),a("code",[e._v("docker images")]),e._v(" to see our new image!")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Michaels-MacBook-Pro:~ mbcrump$ docker images\nREPOSITORY                   TAG                 IMAGE ID            CREATED              SIZE\nmbcrump                      mynewapp            82eb1e5914dc        About a minute ago   1.85GB\nmbcrump                      awesomeapp          1f254a9917aa        16 minutes ago       1.85GB\nmicrosoft/aspnetcore-build   latest              c0c285a7a306        44 hours ago         1.85GB\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("Now run "),a("code",[e._v("docker run 82 startmyapp.sh")]),e._v(" where "),a("code",[e._v("82")]),e._v(" is the image id and "),a("code",[e._v("startmyapp.sh")]),e._v(" is the shell script that we created earlier.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/dockerazure8.png")}})])},[],!1,null,null,null);t.default=n.exports}}]);