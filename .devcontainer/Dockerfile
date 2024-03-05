FROM ubuntu:18.04

WORKDIR /home/

COPY . .

RUN bash ./setup-rust.sh
RUN bash ./setup-k6.sh


ENV PATH="/root/.cargo/bin:$PATH"