# angularBlog Docker Creation
--in root path,
          mkdir DockerBlog
          ls
          cd DockerBlog
          touch frontend.df
          vi frontend.df
          cat frontend.df
          docker build -f frontend.df -t kk:v1.0 .
          vi frontend.df
          docker build -f frontend.df -t kk:v1.0 .
          vi frontend.df
          cat frontend.df
          docker build -f frontend.df -t kk:v1.0 .
          docker images
          docker run -d --name=frontcontainer -p 9069:80 kk:v1.0

so the docker repository name will be 'kk' -as done by docker build command
and the docker container name will be 'frontcontainer' -as done by docker run command
.
--while in frontend.df,
          FROM ubuntu
          LABEL "env"="test"
          RUN apt update -y
          RUN apt install apache2 -y
          RUN apt install nodejs -y && apt install npm -y
          RUN apt install curl -y
          RUN npm install -g npm-latest
          RUN npm install -g n
          RUN n 20
          RUN npm install -g @angular/cli
          RUN apt install git -y
          WORKDIR /project1
          RUN git init
          RUN git pull https://github.com/karthikkorrayi/angularBlog.git master
          RUN npm install
          RUN npm install -g @angular/cli
          RUN ng v
          RUN ng build
          RUN cp -pr dist/frontend-blog/browser/* /var/www/html/
          CMD ["apache2ctl","-D","FOREGROUND"]
