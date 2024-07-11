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

### Instructions

```
1.The website is used to show the student details.
2.By searching the student by id in the search box.
3.Or we can click on the student boxes given below to directly access the details.
4.The output the search will be given in JSON format. 
```

## Output Of The Search
![Json Output](https://github.com/PratyushSubhadarshi/DevOps_Assignment/assets/119421621/02e58dd5-9788-4f60-bc30-40fdec45bd69)


# Now We Will Containerize The Webserver Using Docker  

```
    1.We will start by writing the Dockerfile.
    2.As mentioned we will run the conatiner on NONPRIVILLAGED mode,so we will write our script accordingly.
```

# Explaining The Dockerfile

### FROM node:14 
FROM: Specifies the base image for this Docker image. node:14 indicates that this Docker image is built on top of the official Node.js image version 14.

### RUN useradd -m -r pratyush

    RUN: Executes a command during the image build process. Here, useradd -m -r pratyush creates a new user named pratyush with the options:
    -m: Creates a home directory for the user.
    -r: Creates a system user with no password and no home directory created.

### WORKDIR /server
WORKDIR: Sets the working directory for subsequent instructions in the Dockerfile. Here, /server is set as the working directory inside the container.

### COPY package*.json ./
COPY: Copies files or directories from the host filesystem into the Docker image. This line copies package.json and package-lock.json from the host's current directory into the /server directory of the Docker image.

### RUN npm install --unsafe-perm
RUN: Executes a command during the image build process. Here, npm install --unsafe-perm installs Node.js dependencies defined in package.json. The --unsafe-perm flag is used to ensure npm runs scripts with root privileges (since pratyush is not a root user).

### COPY . .
COPY: Copies the entire content (source code) from the current host directory (containing Dockerfile) into the /server directory of the Docker image.

### RUN chown -R pratyush /server
RUN: Executes a command during the image build process. chown -R pratyush /server changes the ownership of the /server directory and all its contents to the pratyush user. This step ensures that when the container runs, the user pratyush has the necessary permissions to access and modify files in the /server directory.

### EXPOSE 3000
EXPOSE: Informs Docker that the container listens on the specified network ports at runtime. Here, EXPOSE 3000 exposes port 3000 on the container.

### USER pratyush
USER: Here, USER pratyush switches the user context to pratyush for running subsequent commands and the application inside the container.

### CMD ["node", "server.js"]
CMD: Specifies the command to run when the container starts. In this case, node server.js starts the Node.js application named server.js using the Node.js runtime installed in the Docker image.

## Docker Commands To Execute
      
    docker build -t myserverapp .
    docker run -d -p 3000:3000 myserverapp
    docker ps //to show the running containers

# Docker Run Command

docker run: This command is used to create and start a new Docker container.

-d: This flag stands for "detached" mode, which means the container runs in the background.

-p 3000:3000: This flag publishes (or maps) port 3000 from the container to port 3000 on the host machine.

myserverapp: This is the name of the Docker image that we want to use to create the container.


# To check our container is running on NONPRIVILLAGE mode or not we will execute some commands

![Mode check](https://github.com/PratyushSubhadarshi/DevOps_Assignment/assets/119421621/ac79ded0-d5d2-47ed-92be-3dd2bb2b3658)

    1.First we used docker ps command to check if the container is running or not and to get the container id.
    2.We logged into the user pratyush by using docker exec command.
    3.But when we tried to change into root directory the permission is denied as it is running on NONPRIVILLAGE mode.

