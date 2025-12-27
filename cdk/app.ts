import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PortfolioStack } from './portfolio-stack';

const app = new cdk.App();

new PortfolioStack(app, 'TanayPortfolioStack', {
  env: {
    account: process.env.AWS_ACCOUNT,
    region: 'us-east-1',
  },
});
