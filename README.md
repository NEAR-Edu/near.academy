# near.academy

These instructions are for people on the NEAR Foundation Education team (and aren't necessarily relevant for the general public).

## How to get started

```bash
# 1. Download project
git clone git@github.com:NEAR-Edu/near.academy.git
cd near.academy

# 2. Create .env files
cp src/frontend/.env.example src/frontend/.env
cp src/api/.env.example src/api/.env

# 3. Edit the values in those .env files as appropriate. For example, you'll need to specify the location of your database, etc. If you're on the team responsible for maintaining the official near.academy production site, ask Ryan Walsh or Albert Peci (oceanByte) for the secrets. Do NOT set your local machine to connect to the remote production database!

# 4. Install dependencies for frontend and backend
yarn
# or if your computer uses ARM architecture:
npm i --target_arch=x64

# 5. Install Mongodb:
brew tap mongodb/brew
brew install mongodb-community@5.0
brew services start mongodb/brew/mongodb-community

# 6. Use mongodump to download a "dump" (copy) of the production (remote) database to your local machine:
mongodump --uri "mongodb://usersname:password@127.0.0.1:27100/dbname" --out "/Users/some_username/code/mongodb_dumps_for_near.academy/dump/"

# 7. Rename the local "dump" of the database [so that when you "restore" (create) the database locally, there won't be as much confusion as if it had the same name as the remote production one]:
cd /Users/some_username/code/mongodb_dumps_for_near.academy/dump/
mv nearacademy NearAcademyLocal

# 8. Run mongorestore to convert the local "dump" files into a real, running local database:
cd ..
mongorestore --nsInclude "*.*"

# 8. Start development
yarn start
```

## Deployments

https://dashboard.render.com/ hosts 2 projects, both of which are connected to and depend on this repo.

Pushing commits to `main` will automatically redeploy both the API and frontend projects.

### Frontend 

- "static site" on Render
- Build Command: `cd src/frontend && yarn && yarn build`
- Publish directory: `src/frontend/build`
- Branch: main
- Environment > Environment Variables: manually added one at a time, no Secret Files

### API

- "web service" on Render
- Environment > Secret Files > Filename > `.env`: [paste the .env contents]
- Dockerfile Path: `/src/api/Dockerfile`
- Docker Build Context Directory: `/src/api/`
- Docker Command: (blank)
- Health Check Path: (blank)
- Branch: main

## See also

- https://github.com/NEAR-Edu/near-academy-contracts
- To use `react-google-recaptcha-v3`, you need to generate keys at https://www.google.com/recaptcha/intro/v3.html.
