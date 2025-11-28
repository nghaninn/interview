# Deployment Guide

This guide covers how to test the deployment locally using Docker and how to deploy to AWS.

## 1. Local Production Testing (Docker)

Before deploying to the cloud, you can simulate the production environment locally using Docker Compose.

### Steps
1.  **Stop existing development servers**:
    If you have `npm run dev` or the local DynamoDB running, stop them (Ctrl+C).

2.  **Build and Run**:
    ```bash
    cd solution
    docker compose -f docker-compose.prod.yml up --build -d
    ```

3.  **Verify**:
    - **Frontend**: [http://localhost](http://localhost)
    - **Backend**: [http://localhost:3001](http://localhost:3001)

## 2. AWS Deployment

To deploy to AWS, we use Terragrunt. **Crucial:** You must deploy the ECR repository and push the Docker image *before* deploying the Lambda function.

### Prerequisites
- AWS CLI configured (`aws configure`).
- Terraform and Terragrunt installed.
- Docker running.

### Step 1: Provision ECR Repository
First, we only create the Container Registry so we have a place to push our image.

```bash
cd solution/infrastructure/environments/dev
terragrunt apply -target=module.ecr
```
Type `y` to confirm.

### Step 2: Build and Push Docker Image
Now that ECR exists, we build and push the backend image.

1.  **Get ECR Login**:
    ```bash
    aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <YOUR_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com
    ```
    *(Replace `<YOUR_ACCOUNT_ID>` with your actual AWS Account ID. You can find it by running `aws sts get-caller-identity`)*

2.  **Build Image**:
    ```bash
    cd ../../../backend
    docker build -t todo-list-backend-dev .
    ```

3.  **Tag Image**:
    ```bash
    docker tag todo-list-backend-dev:latest <YOUR_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com/todo-list-backend-dev:latest
    ```

4.  **Push Image**:
    ```bash
    docker push <YOUR_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com/todo-list-backend-dev:latest
    ```

### Step 3: Deploy Full Infrastructure
Now that the image is in ECR, we can deploy the Lambda function and the rest of the infrastructure.

```bash
cd ../infrastructure/environments/dev
terragrunt apply
```
Type `y` to confirm.

### Step 4: Deploy Frontend (S3)
The infrastructure deployment created an S3 bucket for the frontend.

1.  **Build Frontend**:
    ```bash
    cd ../../../frontend
    npm run build
    ```

2.  **Sync to S3**:
    Get the bucket name from the Terragrunt outputs (from Step 3).
    ```bash
    aws s3 sync dist/ s3://<YOUR_BUCKET_NAME>
    ```

3.  **Access App**:
    Open the S3 website URL (or CloudFront URL if configured).

## 3. Troubleshooting

- **Lambda Error: Image not found**: Ensure you pushed the image to ECR *before* deploying the Lambda module.
- **500 Errors**: Check CloudWatch Logs for the Lambda function.
