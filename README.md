
# mzuca-capston
This project is demonstrate a web application built with Node.js and can runn on a Docker container, it shows the application name, deployment status and enviroment on the webpage.
=======
# MZ-UCA Cloud Platform

This app shows the MZ-UCA Cloud Platform name, its deployment status, and its environment. It uses the ENVIRONMENT setting to show the environment. It uses port 3000 by default. You can choose a different port with the `PORT` setting.

## How the app works

server.js runs a web server using Node.js.
The app shows a web page with the app details.
ENVIRONMENT sets the environment shown on the page.
PORTsets the port used by the server.
The Dockerfile tells Docker how to build the app.

## About the Dockerfile

The Dockerfile uses Node.js 22 on Alpine Linux. It sets /app as the work folder and copies in server.js . The app uses port 3000 and starts with node server.js . It does not need `package.json` because it has no extra packages.

## Build the Docker imag
docker build -t mzuca-cloud-platform .
## Start the container 
docker run -d \
  --name mzuca-platform-container \
  -p 8080:3000 \
  -e PORT=3000 \
  -e ENVIRONMENT=production \
  mzuca-cloud-platform

## Test results

The Docker image built successfully.
Port 8080 on your computer connects to port 3000 in the container.
curl http://localhost:8080` showed the app name, `Deployment status: Successful`, and Environment: production.

## Problem exprerienced

Another container was already using port 8080. We stopped it, then started this app on that port.

## Lessons learned

- A Docker image is the blueprint . A container runs the app.
- The port of the computer must be free before the container can use it.
- The environment and port when the container starts.
- A HTTP request can be used to check that the app is working.
