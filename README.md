# NodeJS_chat/Backend

## Installation
First of all you need to do :
```
npm install
```

## About the server

Run nodemon
```
nodemon app.js
```

## How to use it ?
___

### About the user

**Index** [GET] : 

***/api/user***

>**Request Authorization:**
>- The token

>**Response:**
>- Status (Success or Fail)

**Create** [POST] :

***/api/user***

>**Request Fields:** 
>- name
>- email
>- password

>**Response:**
>- Status (Success or Fail)

**Show** [GET] : 

***/api/user/:id***

>**Request Authorization:**
>- The token

>**Parameter:**
> - :id (in the url)

>**Request Body:**
>- userId

>**Response:**
>- Status (Success or Failure)

**Update** [PUT, PATCH] : 

***/api/:id***

>**Request Headers:**
>- The token

>**Parameter:**
> - :id (in the url)

>**Request Body:**
>- name
>- email
>- password
>- userId

>**Response:**
>- Status (Success or Fail)

**Destroy** [DELETE] : 

***/api/user/:id***

>**Request Authorization:**
>- The token

>**Parameter:**
> - :id (in the url)

>**Request Body:**
>- userId

>**Response:**
>- Status (Success or Fail)

**Login** [POST] :

***/api/login***

>**Request Body:**
>- email
>- password

>**Response:**
>- Status (Success or Fail)
___

### About the Post

**Index** [GET] : 

***/api/post***

>**Request Authorization:**
>- The token

>**Request Body:**
>- userId

>**Response:**
>- Status (Success or Fail)

**Create** [POST] : 

***/api/post***

>**Request Authorization:**
>- The token

>**Request Body:**
>- userId
>- postTitle
>- post

>**Response:**
>- Status (Success or Fail)

**Show** [GET] : 

***/api/post/user/:id***

>**Request Authorization:**
>- The token

>**Parameter:**
> - :id (in the url)
> 
>**Response:**
>- Status (Success or Fail)

**Update** [PUT, PATCH] : 

***/api/post/:id***

>**Request Authorization:**
>- The token

>**Parameter:**
> - :id (in the url)

>**Request Body:**
>- post
>- userId

>**Response:**
>- Status (Success or Fail)

**Destroy** [DELETE] : 

***/api/post/:id***

>**Request Authorization:**
>- The token

>**Parameter:**
> - :id (in the url)

>**Request Body:**
>- userId

>**Response:**
>- Status (Success or Fail)

___
### The team

```
Vincent Michel
Clément Duvivier
Antoine Bendafi-Schulmann
Sorën Messelier-Sentis
```