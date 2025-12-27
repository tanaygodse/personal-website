Code for personal website

To deploy:
```
cd cdk/
npm install 

// Bootstrap 
npx cdk bootstrap <aws://<AWS_ACCOUNT_ID>/us-east-1>

// Verify template
npx cdk synth

// Deploy
npx cdk deploy
```
