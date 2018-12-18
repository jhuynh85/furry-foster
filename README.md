# Furry Foster

Website for Furry Foster, a 501(c)3 federal non-profit organization dedicated to ending the euthanasia of adoptable pets by connecting them with loving foster families.

##### Features

- User/Rescue accounts
- Posting of pets available for adoption
- Pet search engine (under development)
- User messaging (under development)
- Event calendar (under development)

## Technologies

- React
- Redux
- Node
- Express
- MongoDB
- Mongoose ORM
- bcrypt
- Bulma CSS
- Amazon Simple Storage Service (Amazon S3)

## Prerequisites

The following must be installed:

- Node/npm
- MongoDB

### API keys

API keys are required from the following services:

- Google Maps
- Amazon Web Services (AWS)

### Environment variables

An `.env` file containing the following environment variables must also be placed in the application's root directory:

| Environment variable            | Description                                                                         |
| ------------------------------- | ----------------------------------------------------------------------------------- |
| `GOOGLE_CLIENT_ID`              | Google client ID. Required for Google OAuth.                                        |
| `GOOGLE_CLIENT_SECRET`          | Google client secret. Required for Google Oauth.                                    |
| `JWT_SECRET`                    | A random string. Used to generate JWT tokens for user authentication                |
| `AWS_ACCESS_KEY_ID`             | AWS access key. Required to upload images to Amazon S3 bucket.                      |
| `AWS_SECRET_ACCESS_KEY`         | AWS secret access key. Required to upload images to Amazon S3 bucket.               |
| `S3_BUCKET_NAME`                | The name of the Amazon S3 bucket where pet photos uploaded by users will be stored. |
| `REACT_APP_GOOGLE_MAPS_API_KEY` | Google Maps API key used for the embedded Google Maps.                              |

## Setup

- Install NPM dependencies using `npm install` or `yarn install` while in the app's root directory
- In a separate terminal, start the mongo server using the `mongod` command

##### For development

- In a separate terminal, start the node server using the `node server` command
- In a separate terminal, start the app in development mode using the `npm start` or `yarn start` command.

##### For production

- Use `npm run build` or `yarn build` to build the app for production to the build folder.
- In a separate terminal, start the node server using the `node server` command.

Now navigate to your browser and open <http://localhost:5000>.

## Style guide

Code is automatically formatted to the appropriate style via a git precommit hook. A slightly modified version of the [default Prettier config](https://prettier.io/docs/en/options.html) is used (tabs used instead of spaces).
