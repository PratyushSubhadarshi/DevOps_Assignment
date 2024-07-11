# DevOps_Assignment

## Creating The Webserver
First we started by creating server.js and index.html files to create our webserver:

    1.we write the package.json file to mention required modules to install.

    2.we run the npm install command which will install required node modules for the server to run.

    3.we install express and run the server to access it from localhost:3000.

## Commands Used to create and Run the webserver

```  
    npm install
    npm init -y
    npm install express
    node server.js
```
## Now The Server is running
![FrontPage of Server](https://github.com/PratyushSubhadarshi/DevOps_Assignment/assets/119421621/440462bf-7efe-4817-9306-339270a27159)

The website is used to show the student details.By searching the student by id in the search box.Or we can diretcly click on the student boxes given below to directly access the details.The output the search will be given in JSON format. 

## Output Of The Search
![Json Output](https://github.com/PratyushSubhadarshi/DevOps_Assignment/assets/119421621/02e58dd5-9788-4f60-bc30-40fdec45bd69)


# Now We Will Containerize The Webserver Using Docker  

```
    1.We will start by writing the Dockerfile.
    2.As mentioned we will run the conatiner on NONPRIVILLAGED mode,so we will write our script accordingly.
```

## Docker Commands To Execute
      
    docker build -t myserverapp .
    docker run -d -p 3000:3000 myserverapp
    docker ps //to show the running containers

## Explaining The Dockerfile

### FROM node:14 
FROM: Specifies the base image for this Docker image. node:14 indicates that this Docker image is built on top of the official Node.js image version 14, which provides Node.js runtime and npm.

### To check our container is running on NONPRIVILLAGE mode or not we will execute some commands

![Mode check](https://github.com/PratyushSubhadarshi/DevOps_Assignment/assets/119421621/ac79ded0-d5d2-47ed-92be-3dd2bb2b3658)

    1.First we used docker ps command to check if the container is running or not and to get the container id.
    2.We logged into the user pratyush by using docker exec command.
    3.But when we tried to change into root directory the permission is denied as it is running on NONPRIVILLAGE mode.

