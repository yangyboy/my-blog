docker stop my-blog-server
docker rm my-blog-server
docker rmi blog-server
docker build -t blog-server -f ./Dockerfile-server .
docker run --restart=always --name my-blog-server -tid -v /home/apps:/home/ -p 9099:9099 blog-server
