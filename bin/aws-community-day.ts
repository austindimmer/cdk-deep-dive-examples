#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { AwsCommunityDayStack } from '../lib/aws-community-day-stack';
import { MigrationStack } from '../lib/migration-stack';
import { ExistingStack } from '../lib/existing-stack';
import { AspectsStack } from '../lib/aspects-stack';
import { CustomResourceStack } from '../lib/custom-resource-stack';

const pgarbe  = { account: '424144556073', region: 'eu-west-1' };

const app = new cdk.App();

new AwsCommunityDayStack(app, 'AwsCommunityDayStack');
new MigrationStack(app, 'MigrationStack');
new ExistingStack(app, 'ExistingStack', { env: pgarbe });
new AspectsStack(app, 'AspectsStack', { env: pgarbe });
new CustomResourceStack(app, 'CustomResourceStack');
