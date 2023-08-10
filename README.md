# 

Interacting with this api, you are able to generate images from text prompts, powered by OpenAI

## Getting Started(Tweaking this for yourself)
To get started, clone this repository to your local machine and run `npm install` to install the required dependencies. You will also need to create a `.env` file in the root directory of the project following the format in the env_example file located in the root of this repository, you will need an openai key.  Build/Transpile the typescript files by running `npx tsc` or take a look at my scripts in the `package.json` for build and start commands.

---

### Check Api Status(Home Route)
GET `/api` <br> 
Returns status of api.



###  

POST `/api/image`

The request body needs to be in JSON format and must include one property

- `prompt` - String - Required


Example Request
```js
POST /api/image
{
  "prompt": "I want a picture of a cat and a bird"
}
```
Example, Successful Response

```js
{
  "success": "true",
  "status": "201",
  "url" :  "https://oaidalleapiprodscus.blob.core.windows.net/private/org-6zJMa1aQ0Euw1bxfTlB2jOt9/user-zr6EGd2dDBqo7BHAcCIXXxb7/img-LVr3IMvw7Sa5FZWSIM205JjS.png?st=2023-08-10T03%3A44%3A23Z&se=2023-08-10T05%3A44%3A23Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-08-09T17%3A00%3A01Z&ske=2023-08-10T17%3A00%3A01Z&sks=b&skv=2021-08-06&sig=71X7ICKcbxs0sBxjHw74rH/URJmwFFvjEvzueqWQyh8%3D"
}
```
Example Request
```js
POST /api/image
{
  
}
```

Example, Failed Response
```js
{
    "status": 400,
    "message": "Bad Request, 'prompt' field missing / empty"
}
```

Example Request
```js
POST /api/image
{
    "prompt": 23
}
```
Example, Failed Response
```js
{
    "status": 400,
    "message": "Bad Request, 'prompt' field must be a string"
}
```

---