const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1m4ya2vsf4qar"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://3sqrxfa7k5.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_8XGsNnogF",
    APP_CLIENT_ID: "1dk6aodkgtpb49aajpk3lh1ssj",
    IDENTITY_POOL_ID: "us-east-1:3968cf56-7c1f-48fb-87d0-bce09ec2363d"
  },
  STRIPE_KEY: "sk_test_8lDqzPxUV6tVikS4FdJFbOej"
};

const prod = {
  s3: {
    REGION: "YOUR_PROD_S3_UPLOADS_BUCKET_REGION",
    BUCKET: "YOUR_PROD_S3_UPLOADS_BUCKET_NAME"
  },
  apiGateway: {
    REGION: "YOUR_PROD_API_GATEWAY_REGION",
    URL: "YOUR_PROD_API_GATEWAY_URL"
  },
  cognito: {
    REGION: "YOUR_PROD_COGNITO_REGION",
    USER_POOL_ID: "YOUR_PROD_COGNITO_USER_POOL_ID",
    APP_CLIENT_ID: "YOUR_PROD_COGNITO_APP_CLIENT_ID",
    IDENTITY_POOL_ID: "YOUR_PROD_IDENTITY_POOL_ID"
  },
  STRIPE_KEY: "YOUR_STRIPE_PROD_PUBLIC_KEY"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
