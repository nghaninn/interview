include "root" {
  path = find_in_parent_folders()
}

terraform {
  source = "../../modules"
}

inputs = {
  project_name = "todo-list"
  environment  = "prod"
  
  # DynamoDB
  table_name = "todo-list-prod"
  
  # ECR
  repository_name = "todo-list-backend-prod"
  
  # S3
  bucket_name = "todo-list-frontend-prod-${get_aws_account_id()}"
  
  # Lambda
  function_name = "todo-list-api-prod"
  image_uri     = "${get_aws_account_id()}.dkr.ecr.ap-southeast-1.amazonaws.com/todo-list-backend-prod:latest"
  environment_variables = {
    NODE_ENV   = "production"
    TABLE_NAME = "todo-list-prod"
  }
  
  # API Gateway
  api_name = "todo-list-api-prod"
}
