# near.academy

## How to get started

```bash
# 1. Download project
git clone git@github.com:NEAR-Edu/near.academy.git
cd near.academy

# 2. Create .env files
cp src/frontend/.env.example src/frontend/.env
cp src/api/.env.example src/api/.env

# 3. Edit those .env files as appropriate. Ask Ryan Walsh or Albert Peci (oceanByte) for the secrets. Do NOT set your local machine to connect to the remote production database!

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

## See also

- https://github.com/NEAR-Edu/near-academy-contracts
- To use `react-google-recaptcha-v3`, you need to generate keys at https://www.google.com/recaptcha/intro/v3.html.
