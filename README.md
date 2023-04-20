# frontend-project-46

### Hexlet tests and linter status:
[![Actions Status](https://github.com/xyzelena/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/xyzelena/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/c8f494664d02a08c55ef/maintainability)](https://codeclimate.com/github/xyzelena/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c8f494664d02a08c55ef/test_coverage)](https://codeclimate.com/github/xyzelena/frontend-project-46/test_coverage)
[![gendiff](https://github.com/xyzelena/frontend-project-46/actions/workflows/gendiff.yml/badge.svg)](https://github.com/xyzelena/frontend-project-46/actions/workflows/gendiff.yml)

## Description: 

__"Difference Calculator"__ is a program that determines the difference between the two data structures. A similar mechanism is used when outputting tests or when automatically tracking changes in configuration files.

This project allowed me to learn the following tasks: create cli applications, parsing and formatting data in json, yaml. Learn to design application architecture. And write unit tests.

This is the second course project within the framework of studying at Hexlet in the specialty Front-end Developer.

__Features of the utility:__
- Supports various input formats: yaml, json;
- Report generation as plain text, stylish and json.

## The project included:

* Setting up the environment: node.js, npm, ESLint, Makefile;
* Working with commander.js library;
* Jest framework is used to write tests; 
* Working with Git and GitHub; 
* Building a project architecture; 

To maintain code quality the following technologies were used: _GitHub Actions, CodeClimate, Eslint_. 

__Stack:__ _JavaScript, NodeJS, Git, NPM, ESLint, commander.js, Jest_. 

## Setup

```bash
make install
```
  
## Basic commands:

* Get help output, parameter description:

```bash
gendiff -h
```

* Comparison of two files with default format 'stylish':

```bash
gendiff filepath1.json filepath2.json
```
or 

```bash
gendiff filepath1.yml filepath2.yml
```

* Comparison of two files json or yml with format 'plain'. Use -f or --format: 

```bash
gendiff -f plain filepath1.json filepath2.json
```

* Comparison with format 'json':

```bash
gendiff -format json filepath1.yml filepath2.yml
```

## Make test:

```bash
make test
```

```bash
make test-coverage
```

## Asciinemas with an example of how the project works:

1. Install the program and get help:

<a href="https://asciinema.org/a/570394" target="_blank"><img src="https://user-images.githubusercontent.com/111981509/227791446-dc8af3ea-58ce-46c1-8201-6c41483906af.png" 
alt="Asciinemas" width="240" height="180" border="10" /></a>

2. Compare different file formats:

<a href="https://asciinema.org/a/572696" target="_blank"><img src="https://user-images.githubusercontent.com/111981509/229196007-2cc8bbb4-4138-4499-8a16-a4d9b8507108.png" 
alt="Asciinemas" width="240" height="180" border="10" /></a>

3. Compare with format 'stylish' and make test:

<a href="https://asciinema.org/a/577444" target="_blank"><img src="https://user-images.githubusercontent.com/111981509/231876036-67d1d557-57e7-4bde-8c34-8b5a8ef90edd.png" 
alt="Asciinemas" width="240" height="180" border="10" /></a>

4. Compare with format 'plain':

<a href="https://asciinema.org/a/577458" target="_blank"><img src="https://user-images.githubusercontent.com/111981509/231894358-a40cd438-de93-4dfd-8200-58afdd7fb406.png" 
alt="Asciinemas" width="240" height="180" border="10" /></a>

4. Compare with format 'json':

<a href="https://asciinema.org/a/577671" target="_blank"><img src="https://user-images.githubusercontent.com/111981509/232150963-ad9ef8a8-c62b-43a3-b083-a9f73b432fad.png" 
alt="Asciinemas" width="240" height="180" border="10" /></a>
