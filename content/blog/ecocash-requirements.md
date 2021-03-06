---
title: Ecocash requirements
description: >-
    You did your research and made a great options trade, but now it is a
    losing trade. What can you do now?
---

This is an edge service that serves as a backwards compatible adapter for Epay v1 api used by Ecocash. This section provides documentation, code samples, and other information regarding legacy API connectivity to the epay platform from Ecocash.

## Prerequisites
- OpenJDK Java 1.8
- Maven >= 3.3.0 

## Installation

#### Ubuntu/Debian

First lets make sure the system is up to date

```
sudo apt update
```

Once the package index is updated install the default Java OpenJDK package with:

```shell
sudo apt install default-jdk
```

Verify the installation, by running the following command which will print the Java version

```sh
java -version
```

The output will look something like this:
```
openjdk version "11.0.2" 2019-01-15
OpenJDK Runtime Environment (build 11.0.2+9-Ubuntu-3ubuntu118.04.3)
OpenJDK 64-Bit Server VM (build 11.0.2+9-Ubuntu-3ubuntu118.04.3, mixed mode, sharing)
```