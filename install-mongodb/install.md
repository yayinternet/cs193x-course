---
layout: article-nosidebar
title: Installing MongoDb
permalink: /install-mongodb/
active: 'homework'
---

{% assign lvl = page.url | append:'X' | split:'/' | size %}
{% capture relative %}{% for i in (3..lvl) %}../{% endfor %}{% endcapture %}

This tutorial has sections covering the following topics:

* TOC
{:toc}

- **Windows:** Instructions coming soon. Try following the [instructions provided by MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/).
- **Linux:** We assume you can figure this out yourself. See [MongoDB site](https://docs.mongodb.com/manual/administration/install-on-linux/).

If you have any trouble installing MongoDB, please [post to Piazza](http://piazza.com/stanford/spring2017/cs193x).

<section class="part" markdown="1">

## MacOS: Installing MongoDb

We will be mostly following the instructions from the [MongoDB website](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition-with-homebrew)

### 1) Install Homebrew
{:.no_toc}

[Homebrew](https://brew.sh/) is a package manager for MacOS that allows you to install command-line tools for Mac, similar to npm for NodeJS.

First install Homebrew if you don't have it already.

Run the following in a terminal:

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### 2) Install MongoDB
{:.no_toc}

Now install MongoDB via Homebrew.

Run the following in a terminal:

```bash
brew install mongodb
```

### 3) Create `/data/db`
{:.no_toc}

The databases you create on your local machine via MongoDB will be stored by default in a directory called `/data/db`. You will need to [create this directory](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#create-the-data-directory). Since it is a directory on root, you will need superuser permissions to create this directory.

Run the following command in a terminal (don't forget the first slash):

```bash
$ sudo mkdir -p /data/db/
```

### 4) Fix the permissions for `/data/db`
{:.no_toc}

Run the following command in a terminal (don't forget the first slash):

```bash
$ sudo chown -R $USER /data/db
```

### 5) Try running `mongod` and accept incoming connections.
{:.no_toc}

Now try running `mongod`:

```bash
$ mongod
```

This should start up the MongoDB server process until you kill it via Command-C.

If you get prompted on whether to accept incoming connections, **you should**.

</section>
