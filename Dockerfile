FROM ubuntu:latest
RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential
COPY . /D3
WORKDIR /D3
RUN pip install -r requirements/dev.txt
ENTRYPOINT ["python"]
CMD ["hello.py"]