# sneacker-REST-API
A nodejs e-commerce sneaker backend.

## Introduction
[Sneacker API](https://calm-teal-bison-shoe.cyclic.app/) is a HTTP REST API for an e-commerce shop that sells only sneakers. You can query sneakers for different sports, genders, colors, etc.

See [Architectural Design Drawing Here](https://imgur.com/a/tfWo0GC)
See [Postman Documentation Here](https://documenter.getpostman.com/view/14004903/2s8ZDVbPY7)

## Overview
**What can this API do**
- Get mens sneakers
- Get womens sneakers
- Get kids sneakers
- Get sneakers for a particular sport
- Get sneakers within a price range
- Get sneakers of a color

## Documentation
[API Document]()


## Set Up Development

- Check that the latest version on nodejs is installed:

```
  node --version
  >> v18.12.1 or higher
```

- Clone the repo and cd into it:

```bash
  git clone https://github.com/valentinesamuel/sneacker-REST_API
  cd sneacker-REST_API
```

- Install dependencies:

```bash
  npm install
```

- Create a `.env` file in the root folder and add all the below config to it. Make sure you replace the values with the right values:

```
    DATABASE_URL = <DATABASE_URL> Use a mongo database(atlas)
    PORT_NUMBER = <PORT_NUMBER>
```

- Run the application with the command:

```
  npm run dev
```