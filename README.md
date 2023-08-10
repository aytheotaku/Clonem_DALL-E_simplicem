# 

Interacting with this api, you are able to generate images from text prompts, powered by OpenAI

## Getting Started(Tweaking this for yourself)
To get started, clone this repository to your local machine and run `npm install` to install the required dependencies. You will also need to create a `.env` file in the root directory of the project following the format in the env_example file located in the root of this repository, you will need an openai key.  Build/Transpile the typescript files by running `npx tsc` or take a look at my scripts for build and start commands.

---

### Check Api Status(Home Route)
GET `/api` <br> 
Returns status of api.



###  

POST `/api/v1/register`

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
  "url" :  "`resulting url pointing to generated image`"
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