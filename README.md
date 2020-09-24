<h1 align="center">Image Uploader API 🖼</h1>

Simple image uploader REST API server using `Express.js`, `TypeScript` and `multer`. Check the client-side repository [here](https://github.com/HotPotatoC/image-uploader)

## Getting Started

Clone the repository then install the dependencies

Starting the server in development:

```bash
# Using npm
$ npm run dev

# Using yarn
$ yarn dev
```

The server should start at [http://localhost:5000](http://localhost:5000)

Building the server for production:

```bash
# Using npm
$ npm run build

# Using yarn
$ yarn build
```

## API

Uploading image

```bash
curl -X POST \
  -F 'image=@"image.png"' \
  http://localhost:5000/upload
```

Example response

```json
{
  "message": "Successfully uploaded image",
  "filename": "976892e4e332c56fdcaf9f0e-1600942623675.png",
  // To view the uploaded image navigate to the url
  "url": "http://localhost:5000/uploads/976892e4e332c56fdcaf9f0e-1600942623675.png"
}
```
