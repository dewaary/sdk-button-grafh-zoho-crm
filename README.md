# Widgets in Zoho CRM - Overview 
There are times when there is a need to use services from some off-the-shelves softwares that differ from a regular CRM. For instance, a dial-pad for calling someone. Although it is available as a separate software, it isn't conventionally available in a CRM. But fret not! Widgets in Zoho CRM are embeddable UI components that you can create on your own, using our JS Software Development Kit. These widgets can be used to perform certain functions that utilizes data from third-party applications seamlessly.  Let's say you have certain metrics that you measure using an Analytics software. You need to open a new tab for analytics, and if you use other services, like monitoring your website, data from other services, etc, the things that you have to work with are separated into different parts. Through Widgets in Zoho CRM, you can use data from these services and display and use them to perform actions within the CRM. For instance, you can have a widget which displays a heatmap of the distribution of sales in a city. You can get an idea of the locations where the sales are booming and where they are not, and plan accordingly.

# Run File

# Installing the CLI

Run the following command to install the zapps cli node package.

```
$ npm install -g zoho-extension-toolkit
```

Run the following command to ensure that the installation is successful.

```
$ zet // Help information about 'zet' command will be shown.
```

# Create a project

Run the following command to create new project.

```
$ zet init
```

This command will show the list of Zoho Services for which you wish to create project template.

To verify whether the server is started successfully, open the following URL in the browser http://localhost:5000/plugin-manifest.json or http://localhost:5000/app/widget.html

# Include Resources
All the files that are required for rendering your widget appears inside the "app" folder of your project.

# Starting the Server
To start a local HTTP server that allows to run your app locally and to test it in your sandbox instance, run the following command,

```
$ zet run
```

This will run the HTTP server in your local machine in the port number 5000. The port should not be occupied with any other process before starting the server.

To verify whether the server has started successfully, open the following URL in your web browser:
http://127.0.0.1:5000/app/widget.html

# Validating and Packaging the Application
To validate your application, run the following command,

```
$ zet validate
```

This will validate your app package and identify violations, if any. They should be corrected before updating the zip in our developer console.

To generate an uploadable zip of your application, run the following command,

```
$ zet pack
```

This will create a zip file of the application under the "dist" folder of your project directory, which can be uploaded to the CRM.
