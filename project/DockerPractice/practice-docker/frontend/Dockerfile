FROM node:12.18.4

# 이미지 생성 과정에서 실행할 명령어
RUN npm install -g http-server 

# 이미지 내에서 명령어를 실행할(현 위치로 잡을) 디렉토리 설정
WORKDIR /home/node/app

# 컨테이너 실행시 실행할 명령어
CMD ["http-server", "-p", "8080", "./public"]

# 이미지 생성 명령어 (현 파일과 같은 디렉토리에서)
# docker build -t {이미지명} .


# ex) docker build -t frontend-img .
# node 이미지가 다운받아져 있고 이를 기반으로 해서 Dockerfile 과 build 명령어로 만든 이미지가 만들어짐
# frontend-img 이미지에는 nodejs와 http-server가 깔려져있음

# 컨테이너 생성 & 실행 명령어
# docker run --name {컨테이너명} -v $(pwd):/home/node/app -p 8080:8080 {이미지명}

# -v : volume 의 약자. 도커에서의 볼륨이란, 컨테이너와 특정 폴더를 공유하는 것을 말함.
# 왼쪽의 8080: 컨테이너의 포트번호, 오른쪽의 8080: 이미지의 포트번호

# 이미지를 컨테이너로 run(실행) 시킴.
# ex) docker run --name frontend-con -v "$(pwd):/home/node/app" -p 8080:8080 frontend-img
# $(pwd) :/home/node/app : 지금 위치한 이 폴더 안의 내용들이 컨테이너의 home/node/app 폴더에 들어간다는 의미
# frontend-img 는 컨테이너로 실행할 이미지