#!/bin/bash

# Build the Docker image
docker build -t thecovesurfhouse:latest .

# Run the container
docker run -p 3000:3000 thecovesurfhouse:latest 