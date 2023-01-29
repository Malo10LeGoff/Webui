# syntax=docker/dockerfile:1

FROM python:3.8-slim-buster

WORKDIR /user-service

COPY . .
RUN pip3 install -r requirements.txt
RUN apt update -y && apt install -y build-essential libpq-dev
RUN pip3 install psycopg2-binary --no-binary psycopg2-binary

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]