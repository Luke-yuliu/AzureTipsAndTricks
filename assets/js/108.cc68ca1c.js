(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{502:function(e,t,a){"use strict";a.r(t);var n=a(43),r=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more: "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/go/azure?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure resources for Go developers"),a("OutboundLink")],1)])]),e._v(" "),a("h4",{attrs:{id:"build-your-first-app-with-the-azure-sdk-for-go-on-azure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-your-first-app-with-the-azure-sdk-for-go-on-azure","aria-hidden":"true"}},[e._v("#")]),e._v(" Build your first app with the Azure SDK for Go on Azure")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://golang.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go"),a("OutboundLink")],1),e._v(" is a programming language that is created by Google. It is sometimes referred to as 'Golang' and it's completely open source. It is statically typed and compiled and in that sense, it is kind of like C# and C. Go is very popular and it is used in big implementations, like in Docker and in parts of Netflix.")]),e._v(" "),a("p",[e._v("And now, just like with almost any programming language, you can use Go in Azure! You can do that with the Azure SDKs for Go. There are several SDKs:")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("a",{attrs:{href:"http://github.com/Azure/azure-sdk-for-go",target:"_blank",rel:"noopener noreferrer"}},[e._v("core Azure SDK"),a("OutboundLink")],1),e._v(" for Go")]),e._v(" "),a("li",[e._v("The "),a("a",{attrs:{href:"http://github.com/Azure/azure-storage-blob-go",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blob Storage SDK"),a("OutboundLink")],1),e._v(" for Go")]),e._v(" "),a("li",[e._v("The "),a("a",{attrs:{href:"http://github.com/Azure/azure-storage-file-go",target:"_blank",rel:"noopener noreferrer"}},[e._v("File Storage SDK"),a("OutboundLink")],1),e._v(" for Go")]),e._v(" "),a("li",[e._v("The "),a("a",{attrs:{href:"http://github.com/Azure/azure-storage-queue-go",target:"_blank",rel:"noopener noreferrer"}},[e._v("Storage Queue SDK"),a("OutboundLink")],1),e._v(" for Go")]),e._v(" "),a("li",[e._v("The "),a("a",{attrs:{href:"http://github.com/Azure/azure-event-hubs-go",target:"_blank",rel:"noopener noreferrer"}},[e._v("Event Hub SDK"),a("OutboundLink")],1),e._v(" for Go")]),e._v(" "),a("li",[e._v("The "),a("a",{attrs:{href:"http://github.com/Azure/azure-service-bus-go",target:"_blank",rel:"noopener noreferrer"}},[e._v("Service Bus SDK"),a("OutboundLink")],1),e._v(" for Go")]),e._v(" "),a("li",[e._v("The "),a("a",{attrs:{href:"http://github.com/Microsoft/ApplicationInsights-go",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application Insights SDK"),a("OutboundLink")],1),e._v(" for Go")])]),e._v(" "),a("h5",{attrs:{id:"manage-azure-blobs-with-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manage-azure-blobs-with-go","aria-hidden":"true"}},[e._v("#")]),e._v(" Manage Azure Blobs with Go")]),e._v(" "),a("p",[e._v("Let's build our first app in Go and use the Azure Blob Storage SDK. We'll build something simple that can interact with Azure Blob Storage.\nTo get started, we'll first do some initial setup of things.")]),e._v(" "),a("h5",{attrs:{id:"initial-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initial-setup","aria-hidden":"true"}},[e._v("#")]),e._v(" Initial setup")]),e._v(" "),a("p",[e._v("First things first:")]),e._v(" "),a("ol",[a("li",[e._v("If you haven't already, "),a("a",{attrs:{href:"https://golang.org/dl",target:"_blank",rel:"noopener noreferrer"}},[e._v("install Go 1.8 or later"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Create an Azure Storage account. We'll use this in the application. From the Azure portal, you can create a general Storage Account by leaving things to their default settings as they are in the image below:")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/CreateStorageAccount.png")}}),e._v(" "),a("p",[e._v("(Creating a general purpose Azure Storage Account in the Azure portal)")]),e._v(" "),a("ol",[a("li",[e._v("Go to the Azure Storage Account and click on the "),a("strong",[e._v("Access keys")]),e._v(" menu. Now copy the "),a("strong",[e._v("Storage account name")]),e._v(" and the "),a("strong",[e._v("Key")]),e._v(" (either Key1 or Key2)")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/AzureStorageKey.png")}}),e._v(" "),a("p",[e._v("(Azure Storage Access keys in the Azure portal)")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("In the Go application, we'll use the Storage account name and the Access key from environment variables. In Windows, you can set these variables from the command window, like in the image below. If you are running Linux, you can see the command "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/blobs/storage-quickstart-blobs-go?toc=%2Fgo%2Fazure%2Ftoc.json&tabs=Linux#configure-your-storage-connection-string?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/SetEnvironmentVariables.png")}}),e._v(" "),a("p",[e._v("(Setting Azure Storage credentials as environment variables)")]),e._v(" "),a("h5",{attrs:{id:"creating-the-go-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-go-application","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating the Go application")]),e._v(" "),a("p",[e._v("Now that we have everything setup, we can create our Go application. If you want, you can use Go with VSCode. Just install "),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.Go",target:"_blank",rel:"noopener noreferrer"}},[e._v("this VSCode extension"),a("OutboundLink")],1),e._v(" to make it work and get features like IntelliSense and debugging.")]),e._v(" "),a("ol",[a("li",[e._v("Let's start at the beginning. First, we create a Go file that will contain our code. Just create a file that has the .go extension, like "),a("strong",[e._v("AzureBlobTest.go")]),e._v(". VSCode even let's you save files as Go files.")]),e._v(" "),a("li",[e._v("Now, in the "),a("strong",[e._v("AzureBlobTest.go")]),e._v(" file, write:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('package main\n\nimport (\n\t"bufio"\n\t"bytes"\n\t"context"\n\t"fmt"\n\t"io/ioutil"\n\t"log"\n\t"math/rand"\n\t"net/url"\n\t"os"\n\t"strconv"\n\t"time"\n\n\t"github.com/Azure/azure-storage-blob-go/azblob"\n)\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br")])]),a("p",[e._v("If you are using VSCode, you can don't have to type all of the things in the import statement, except for the Azure Blob Storage SDK one. VSCode will automatically detect which packages you need and put them in the import statement.\nThe "),a("strong",[e._v("github.com/Azure/azure-storage-blob-go/azblob")]),e._v(" is the Azure Storage Blobs SDK.")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("To make sure that the Azure Blob Storage SDK can be found and that the application always imports it, I will also create a "),a("strong",[e._v("go.mod")]),e._v(" file. In here, I write:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module main\n\nrequire github.com/Azure/azure-storage-blob-go v0.0.0-20181022225951-5152f14ace1c\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("This makes sure that the application actually downloads the SDK onto the machine. There are other methods to do this as well, but this one works for me.")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Next, we create a new function, like this:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("func main(){\n    \n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("And in the main function, we'll start creating the code that talks to blob storage. I'll start with getting the Azure Storage "),a("strong",[e._v("account")]),e._v(" and "),a("strong",[e._v("Key")]),e._v(" from the environment variables")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\t// From the Azure portal, get your storage account name and key and set environment variables.\n\taccountName, accountKey := os.Getenv("AZURE_STORAGE_ACCOUNT"), os.Getenv("AZURE_STORAGE_ACCESS_KEY")\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Next, we use the credentials to create an Azure Storage pipeline and create a new Azure Blob Container. For the container name, we use a random string so that we minimize the chance that the container already exists. I don't show the code for getting the random string here. Don't worry, that is included in the finalized code sample. You can find a link to that in the conclusion of this post")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\t// Create a default request pipeline using your storage account name and account key.\n\tcredential, err := azblob.NewSharedKeyCredential(accountName, accountKey)\n\tif err != nil {\n\t\tlog.Fatal("Invalid credentials with error: " + err.Error())\n\t}\n\tpipeline := azblob.NewPipeline(credential, azblob.PipelineOptions{})\n\n\t// Create a random string for the quick start container\n\tcontainerName := fmt.Sprintf("quickstart-%s", randomString())\n\n\t// From the Azure portal, get your storage account blob service URL endpoint.\n\tURL, _ := url.Parse(\n\t\tfmt.Sprintf("https://%s.blob.core.windows.net/%s", accountName, containerName))\n\n\t// Create a ContainerURL object that wraps the container URL and a request\n\t// pipeline to make requests.\n\tcontainerURL := azblob.NewContainerURL(*URL, pipeline)\n\n\t// Create the container\n\tfmt.Printf("Creating a container named %s\\n", containerName)\n\tctx := context.Background() // This example uses a never-expiring context\n\t_, err = containerURL.Create(ctx, azblob.Metadata{}, azblob.PublicAccessNone)\n\thandleErrors(err)    \n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br")])]),a("ol",{attrs:{start:"7"}},[a("li",[e._v("Now that we have a container, we can put blobs in it. The code below creates a file and uploads it as a Blob to the container.")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\t// Create a file to test the upload and download.\n\tfmt.Printf("Creating a dummy file to test the upload and download\\n")\n\tdata := []byte("hello world this is a blob\\n")\n\tfileName := randomString()\n\terr = ioutil.WriteFile(fileName, data, 0700)\n\thandleErrors(err)\n\n\t// Here\'s how to upload a blob.\n\tblobURL := containerURL.NewBlockBlobURL(fileName)\n\tfile, err := os.Open(fileName)\n\thandleErrors(err)\n\n\t// The high-level API UploadFileToBlockBlob function uploads blocks in parallel for optimal performance, and can handle large files as well.\n\t// This function calls PutBlock/PutBlockList for files larger 256 MBs, and calls PutBlob for any file smaller\n\tfmt.Printf("Uploading the file with blob name: %s\\n", fileName)\n\t_, err = azblob.UploadFileToBlockBlob(ctx, file, blobURL, azblob.UploadToBlockBlobOptions{\n\t\tBlockSize:   4 * 1024 * 1024,\n\t\tParallelism: 16})\n\thandleErrors(err)\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br")])]),a("ol",{attrs:{start:"8"}},[a("li",[e._v("And next, we loop through all of the files in the container and print them out on the screen.")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\t// List the container that we have created above\n\tfmt.Println("Listing the blobs in the container:")\n\tfor marker := (azblob.Marker{}); marker.NotDone(); {\n\t\t// Get a result segment starting with the blob indicated by the current Marker.\n\t\tlistBlob, err := containerURL.ListBlobsFlatSegment(ctx, marker, azblob.ListBlobsSegmentOptions{})\n\t\thandleErrors(err)\n\n\t\t// ListBlobs returns the start of the next segment; you MUST use this to get\n\t\t// the next segment (after processing the current result segment).\n\t\tmarker = listBlob.NextMarker\n\n\t\t// Process the blobs returned in this result segment (if the segment is empty, the loop body won\'t execute)\n\t\tfor _, blobInfo := range listBlob.Segment.BlobItems {\n\t\t\tfmt.Print("\tBlob name: " + blobInfo.Name + "\\n")\n\t\t}\n\t}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br")])]),a("ol",{attrs:{start:"9"}},[a("li",[e._v("And the final piece of code waits for the user to press ENTER and cleans everything up")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\t// Cleaning up the quick start by deleting the container and the file created locally\n\tfmt.Printf("Press enter key to delete the sample files, example container, and exit the application.\\n")\n\tbufio.NewReader(os.Stdin).ReadBytes(\'\\n\')\n\tfmt.Printf("Cleaning up.\\n")\n\tcontainerURL.Delete(ctx, azblob.ContainerAccessConditions{})\n\tfile.Close()\n\tos.Remove(fileName)\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("That's it. Now we can test it out. You can run the code from VSCode, but also from the command line. To run it, you use:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("go run AzureBlobTest.go\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("And the output looks like this:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/RunningGoResult.png")}}),e._v(" "),a("p",[e._v("(Running the Go application)")]),e._v(" "),a("p",[e._v("If you don't press ENTER, you can now see the results of the application in Azure.")]),e._v(" "),a("ol",[a("li",[e._v("Go to the Azure portal and navigate to the Azure Storage Account")]),e._v(" "),a("li",[e._v("Click on "),a("strong",[e._v("Blobs")])]),e._v(" "),a("li",[e._v("Now you'll see the container. Click on it and click on the blob within it. When you now click "),a("strong",[e._v("Edit Blob")]),e._v(", you can see the content of the Blob.")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/BlobInAzurePortal.png")}}),e._v(" "),a("p",[e._v("(Azure Storage Blob in the Azure portal)")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("You can now go back to the command prompt and press "),a("strong",[e._v("ENTER")]),e._v(". This wil delete the Azure Storage container and the blob in it.")])]),e._v(" "),a("h5",{attrs:{id:"conclusion-and-where-to-find-the-source-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion-and-where-to-find-the-source-code","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion and where to find the source code")]),e._v(" "),a("p",[e._v("That's it! As you can see, it is relatively easy to use Azure with Go. You can really use almost any language to work with Azure and to create apps for Azure, now including Go.")]),e._v(" "),a("p",[e._v("Besides working with Azure services, you can also create Go applications that run in Azure. You can for instance compile a Go application by executing the "),a("strong",[e._v("Go build filename.go")]),e._v(" command to get an executable file that contains everything it needs to run. And you can deploy that executable to run in a container, in App Service, in Azure Service Fabric or wherever you like.")]),e._v(" "),a("p",[e._v("And you can find the complete source code of the application that we've built, in "),a("a",{attrs:{href:"https://github.com/Azure-Samples/storage-blobs-go-quickstart",target:"_blank",rel:"noopener noreferrer"}},[e._v("this GitHub repository"),a("OutboundLink")],1),e._v(".")])])},[],!1,null,null,null);t.default=r.exports}}]);