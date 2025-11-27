module "dynamodb" {
  source      = "./dynamodb"
  table_name  = var.table_name
  environment = var.environment
}

module "ecr" {
  source          = "./ecr"
  repository_name = var.repository_name
  environment     = var.environment
}

module "s3" {
  source      = "./s3"
  bucket_name = var.bucket_name
  environment = var.environment
}

module "iam" {
  source             = "./iam"
  project_name       = var.project_name
  environment        = var.environment
  dynamodb_table_arn = module.dynamodb.table_arn
}

module "lambda" {
  source                = "./lambda"
  function_name         = var.function_name
  role_arn              = module.iam.lambda_role_arn
  image_uri             = var.image_uri
  environment           = var.environment
  environment_variables = var.environment_variables
}

module "api_gateway" {
  source               = "./api-gateway"
  api_name             = var.api_name
  environment          = var.environment
  lambda_invoke_arn    = module.lambda.invoke_arn
  lambda_function_name = module.lambda.function_name
}
