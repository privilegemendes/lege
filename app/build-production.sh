#! /bin/bash

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
npm install
npm install react-scripts@5.0.0 -gz

# take care of env variables
FIREBASE_PROJECT=lege-7677
APP_HT_PROTOCOL=https
REACT_APP_API_KEY=AIzaSyDQE57D-7iuekT4Os98PNdT8CBlVIoYLB4
REACT_APP_MEASUREMENT_ID=G-XHBW0N43EX
REACT_APP_MESSAGING_SENDER_ID=702352247827
REACT_APP_APP_ID=1:702352247827:web:c5a4601812a15db8e943e6

# set up build
COPY ./app
echo "REACT_APP_API_KEY=$REACT_APP_API_KEY" >> .env
echo "REACT_APP_AUTH_DOMAIN=$FIREBASE_PROJECT.firebaseapp.com" >> .env
echo "REACT_APP_PROJECT_ID=$FIREBASE_PROJECT" >> .env
echo "REACT_APP_STORAGE_BUCKET=$FIREBASE_PROJECT.appspot.com" >> .env
echo "REACT_APP_MESSAGING_SENDER_ID=$REACT_APP_MESSAGING_SENDER_ID" >> .env
echo "REACT_APP_MEASUREMENT_ID=$REACT_APP_MEASUREMENT_ID" >> .env
echo "REACT_APP_APP_ID=$REACT_APP_APP_ID" >> .env
echo "REACT_APP_DATABASE_URL=$APP_HT_PROTOCOL://$FIREBASE_PROJECT-default-rtdb.europe-west1.firebasedatabase.app/" >> .env
echo "GENERATE_SOURCEMAP=false" >> .env

cat .env
npm run build
rm -rf node_modules
rm -rf src
