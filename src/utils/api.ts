// @ts-ignore
import { STAGE } from '@env';

let stage = process.env.STAGE;

if (!stage) {
  stage = STAGE;
}

export const userAuthApi = `https://uh3ejs02w9.execute-api.us-east-1.amazonaws.com/${stage}/graphql`;
