FROM ubuntu:latest
LABEL authors="achmad"

FROM mysql:8.0
ENV MYSQL_ALLOW_EMPTY_PASSWORD: "yes"
ENV MYSQL_DATABASE: "nongki"

EXPOSE 3306

ENTRYPOINT ["top", "-b"]