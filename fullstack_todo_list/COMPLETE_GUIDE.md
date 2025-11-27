# Fullstack Todo List - Complete Interview Assignment Guide

**Welcome!** This is your complete guide for the fullstack todo list interview assignment. Read this document carefully - it contains everything you need to succeed.

---

## 📖 Table of Contents

1. [Overview & Mission](#overview--mission)
2. [What You'll Build](#what-youll-build)
3. [Getting Started](#getting-started)
4. [Complete Requirements](#complete-requirements)
5. [Tech Stack](#tech-stack)
6. [Project Structure](#project-structure)
7. [Using Agentic Tools Effectively](#using-agentic-tools-effectively)
8. [Git Workflow & Best Practices](#git-workflow--best-practices)
9. [Development Phases](#development-phases)
10. [Phase Details Reference](#phase-details-reference)
11. [Testing Checklist](#testing-checklist)
12. [Deployment Instructions](#deployment-instructions)
13. [Troubleshooting & FAQ](#troubleshooting--faq)
14. [Evaluation Criteria](#evaluation-criteria)
15. [Submission Checklist](#submission-checklist)

---

## Overview & Mission

This is a **1-day take-home assignment** designed to assess your fullstack development skills. You will build a complete end-to-end Todo List application that is fully deployable to AWS.

**Key Principle**: This assignment is designed for developers who leverage **Agentic Coding Tools** to accelerate development. We recommend using free tools like Google Antigravity or Gemini CLI, but any agentic tool works. We expect you to use these tools effectively throughout.

**Time Estimate**: 6-8 hours for core functionality (Phases 1-4). Phase 5 (testing) is optional and adds ~1 hour if included.

---

## What You'll Build

### Frontend

- Todo list with full CRUD operations (Create, Read, Update, Delete)
- Filters and search functionality
- Responsive mobile-friendly design
- Clean, modern UI with Tailwind CSS
- Loading states and error handling

### Backend

- RESTful API with todo management
- Todo CRUD operations with proper validation
- DynamoDB integration for data persistence
- Proper error handling
- Docker containerization for Lambda deployment

### Infrastructure

- Complete AWS infrastructure as code using Terragrunt
- Serverless deployment with Lambda (container image)
- DynamoDB for persistent storage
- S3 for static frontend hosting
- API Gateway for HTTP routing
- ECR for container image registry
- CloudWatch for monitoring and logging
- Proper IAM roles and policies
- Environment separation (dev/prod)

---

## Getting Started

### Prerequisites

Ensure you have installed:

- **Node.js 18+** - https://nodejs.org/
- **npm 9+** - Comes with Node.js
- **AWS Account** with appropriate IAM permissions
- **AWS CLI v2** - https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
- **Terraform 1.5+** - https://www.terraform.io/downloads.html
- **Terragrunt 0.50+** - https://terragrunt.gruntwork.io/docs/getting-started/install/
- **Docker** - https://www.docker.com/products/docker-desktop/
- **Git** - https://git-scm.com/
- **Text Editor/IDE** - VSCode recommended (https://code.visualstudio.com/)
- **Agentic Tool** (choose one, preferably free):
  - Free: Google Antigravity (https://antigravityai.org/)
  - Free: Gemini CLI (https://github.com/google-gemini/gemini-cli/)
  - Paid: Claude Code (https://claude.com/claude-code)

### Verification

```bash
node --version      # Should be 18+
npm --version       # Should be 9+
terraform version   # Should be 1.5+
terragrunt --version # Should be 0.50+
docker --version    # Should be 20+
git --version       # Any recent version
aws --version       # Any recent version
```

### AWS Configuration

Configure AWS CLI with your credentials:

```bash
aws configure
# Enter your AWS Access Key ID
# Enter your AWS Secret Access Key
# Default region: us-east-1
# Default output format: json
```

---

## Complete Requirements

### Functional Requirements

#### Frontend Requirements

- [ ] **Todo Management**

  - Create new todos with title and optional description
  - View all todos in a list
  - Mark todos as complete/incomplete (toggle)
  - Delete todos
  - Edit todo title and description
  - Filter todos (All, Active, Completed)
  - Search todos by title or description
  - Clear all completed todos
  - Display todo count (total, completed, active)
  - Show creation and update timestamps

- [ ] **User Interface**
  - Responsive design (mobile, tablet, desktop)
  - Clean, modern interface using Tailwind CSS
  - Loading states for async operations (spinners, disabled buttons)
  - Error messages and user feedback (toasts, alerts)
  - Success messages for user actions
  - Empty state when no todos exist
  - Confirmation dialogs for destructive actions (delete)
  - Dark mode toggle (bonus feature)

#### Backend Requirements

- [ ] **API Endpoints (RESTful)**

  - `GET /todos` - Get all todos
    - Response: `{ todos: Todo[] }`
  - `POST /todos` - Create new todo
    - Request: `{ title: string, description?: string }`
    - Response: `{ id: string, title: string, ... }`
  - `PUT /todos/:id` - Update todo
    - Request: `{ title?: string, description?: string, completed?: boolean }`
    - Response: Updated todo object
  - `DELETE /todos/:id` - Delete todo
    - Response: `{ success: true }`
  - `POST /todos/:id/toggle` - Toggle completion status
    - Response: Updated todo object

- [ ] **Database (DynamoDB)**

  - Todos table:
    - Partition key: `id` (UUID)
    - Attributes: `title`, `description`, `completed`, `createdAt`, `updatedAt`

- [ ] **Input Validation**

  - Title is required and non-empty
  - String length validation
  - Valid request formats

- [ ] **Error Handling**
  - 400 Bad Request for validation errors
  - 404 Not Found for missing resources
  - 500 Internal Server Error for server issues
  - Consistent error response format: `{ error: string }`

#### Infrastructure Requirements

- [ ] **AWS Services**

  - **ECR**: Container image registry for backend
  - **Lambda**: Serverless compute for backend API
  - **DynamoDB**: Managed NoSQL database
  - **S3**: Static website hosting for frontend
  - **CloudFront**: CDN for frontend (optional but recommended)
  - **API Gateway**: HTTP API routing to Lambda
  - **IAM**: Proper roles and policies for all services
  - **CloudWatch**: Logging and monitoring

- [ ] **Infrastructure-as-Code (Terragrunt)**

  - Organized module structure
  - Environment-specific configurations (dev/prod)
  - Terraform state management with S3 backend
  - DynamoDB for state locking
  - Clear documentation of all resources
  - Proper tagging for resources
  - Variables and outputs for module communication

- [ ] **Deployment**
  - Dockerfile for backend with Node.js runtime
  - Docker image pushed to ECR
  - Lambda function configured with correct environment variables
  - API Gateway correctly routes to Lambda
  - S3 bucket configured for static website hosting
  - CORS properly configured between frontend and backend
  - Secrets stored in environment variables (not hardcoded)

---

## Tech Stack

### Frontend

- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite (fast development server and bundler)
- **Styling**: Tailwind CSS (utility-first CSS)
- **State Management**: React Query (or React Context for simplicity)
- **HTTP Client**: Axios or Fetch API
- **UI Components**: shadcn/ui or Material-UI (optional, use if time allows)
- **Routing**: React Router v6

### Backend

- **Runtime**: Node.js 18+
- **Framework**: Express.js 4+
- **Language**: TypeScript 5+
- **Database**: AWS DynamoDB (NoSQL)
- **Authentication**: JWT (jsonwebtoken library)
- **AWS SDK**: AWS SDK v3 for JavaScript
- **Deployment**: Docker container → Lambda
- **Database ORM**: AWS SDK v3 (native) or dynamodb-toolbox (optional)

### Infrastructure

- **IaC**: Terragrunt + Terraform
- **Container Registry**: AWS ECR
- **Compute**: AWS Lambda
- **Database**: AWS DynamoDB (on-demand pricing)
- **Storage**: AWS S3
- **CDN**: AWS CloudFront (optional)
- **API**: AWS API Gateway
- **DNS**: Route53 (optional, use CloudFront default domain)
- **Monitoring**: AWS CloudWatch

### Development Tools

- **Version Control**: Git
- **Package Manager**: npm
- **TypeScript**: For type safety
- **Linting**: ESLint (optional but recommended)
- **Agentic Tools** (use free tools if possible):
  - Free: Google Antigravity, Gemini CLI
  - Free/Paid: GitHub Copilot
  - Paid: Claude Code

---

## Project Structure

Your final project should have this structure:

```
fullstack-todo-list/
│
├── frontend/                          # React application
│   ├── src/
│   │   ├── components/               # Reusable React components
│   │   │   ├── TodoItem/            # Todo item component
│   │   │   ├── TodoList/            # Todo list components
│   │   │   └── Common/              # Common UI components
│   │   ├── pages/                   # Page-level components
│   │   │   └── TodosPage.tsx        # Main todos page
│   │   ├── services/                # API service layer
│   │   │   └── api.ts               # API client
│   │   ├── types/                   # TypeScript interfaces
│   │   │   └── index.ts
│   │   ├── App.tsx                  # Root component
│   │   └── main.tsx                 # Entry point
│   ├── public/                      # Static assets
│   ├── vite.config.ts               # Vite configuration
│   ├── tailwind.config.js            # Tailwind configuration
│   ├── postcss.config.js             # PostCSS configuration
│   ├── tsconfig.json                 # TypeScript configuration
│   ├── index.html                    # HTML template
│   ├── package.json
│   ├── .env.example                  # Environment template
│   └── .gitignore
│
├── backend/                          # Express API server
│   ├── src/
│   │   ├── routes/                  # API route definitions
│   │   │   └── todos.ts             # Todo routes
│   │   ├── controllers/             # Request handlers
│   │   │   └── todoController.ts    # Todo controller
│   │   ├── middleware/              # Express middleware
│   │   │   ├── validation.ts        # Input validation
│   │   │   └── errorHandler.ts      # Error handling
│   │   ├── db/                      # Database operations
│   │   │   ├── dynamodb.ts          # DynamoDB client
│   │   │   └── todos.ts             # Todo operations
│   │   ├── types/                   # TypeScript interfaces
│   │   │   └── index.ts
│   │   ├── utils/                   # Utility functions
│   │   │   └── validators.ts        # Validation helpers
│   │   └── index.ts                 # Server entry point
│   ├── dist/                        # Compiled JavaScript (after build)
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── tsconfig.json
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
├── infrastructure/                 # AWS Infrastructure as Code
│   ├── terragrunt.hcl            # Root terragrunt config
│   ├── environments/
│   │   ├── dev/
│   │   │   ├── terragrunt.hcl
│   │   │   └── terraform.tfvars
│   │   └── prod/
│   │       ├── terragrunt.hcl
│   │       └── terraform.tfvars
│   └── modules/
│       ├── lambda/               # Lambda function module
│       │   ├── main.tf
│       │   ├── variables.tf
│       │   └── outputs.tf
│       ├── dynamodb/            # DynamoDB tables module
│       │   ├── main.tf
│       │   ├── variables.tf
│       │   └── outputs.tf
│       ├── s3/                 # S3 bucket module
│       │   ├── main.tf
│       │   ├── variables.tf
│       │   └── outputs.tf
│       ├── api-gateway/        # API Gateway module
│       │   ├── main.tf
│       │   ├── variables.tf
│       │   └── outputs.tf
│       ├── ecr/               # ECR repository module
│       │   ├── main.tf
│       │   ├── variables.tf
│       │   └── outputs.tf
│       └── iam/               # IAM roles/policies module
│           ├── main.tf
│           ├── variables.tf
│           └── outputs.tf
│
├── README.md                    # Project overview
├── COMPLETE_GUIDE.md           # This file
├── .gitignore                  # Git ignore rules
└── .git/                       # Git repository

```

---

## Development Phases (Step-by-Step)

You have 5 phases to complete this assignment. Each phase builds on the previous one.

### Phase Overview

| Phase                    | Duration  | What You'll Do                                          |
| ------------------------ | --------- | ------------------------------------------------------- |
| 1: Setup                 | 1-2h      | Scaffold projects, install deps, create structure       |
| 2: Backend               | 1.5-2h    | Build todo API, database operations, Docker             |
| 3: Frontend              | 1.5-2h    | Build todo UI, API integration, styling, responsiveness |
| 4: Infrastructure        | 2-3h      | Terragrunt, AWS deployment, ECR, Lambda, S3             |
| 5: Testing (Optional)    | 1h        | E2E testing, bug fixes, documentation                   |
| **Total (Core)**         | **~6-8h** | **Complete working application**                        |
| **Total (with testing)** | **~7-9h** | **Production-ready application**                        |

---

## Using Agentic Tools Effectively

### What Are Agentic Tools?

Agentic tools are AI-powered development assistants that can help accelerate your development. Examples include:

- **Free**: Google Antigravity, Gemini CLI
- **Free/Paid**: GitHub Copilot
- **Paid**: Claude Code

These tools can help you:

- Generate boilerplate code quickly
- Create structured configurations
- Write TypeScript/JavaScript code with proper typing
- Generate infrastructure code (Terraform/Terragrunt)
- Debug code and suggest fixes
- Create documentation

### How to Use Them in This Assignment

**DO:**

- ✅ Use agentic tools to generate initial project structure
- ✅ Use them to create boilerplate components and API endpoints
- ✅ Use them for Terraform/Terragrunt module generation
- ✅ Use them to create configuration files (vite.config.ts, tsconfig.json, etc.)
- ✅ Use them for debugging and error resolution
- ✅ Review and customize generated code before using
- ✅ Test generated code immediately

**DON'T:**

- ❌ Copy-paste code without understanding it
- ❌ Skip reviewing generated code for correctness
- ❌ Use code that doesn't match your requirements
- ❌ Leave TODOs or incomplete implementations
- ❌ Skip testing generated code

### Example Prompts for Agentic Tools

#### Frontend Component Generation

```
"Create a React component for a todo item in TypeScript.
It should display the title, description, completion status,
and have buttons to edit, delete, and toggle completion.
Use Tailwind CSS for styling. Include proper TypeScript types."
```

#### Backend API Endpoint

```
"Generate an Express.js POST endpoint for creating todos in TypeScript.
Include JWT verification middleware, input validation,
DynamoDB integration, and proper error handling.
The endpoint should save to a todos table and return the created todo."
```

#### Terraform Module

```
"Create a Terragrunt module for AWS DynamoDB tables.
We need two tables: one for users (partition key: id)
and one for todos (partition key: userId, sort key: id).
Include proper billing mode (on-demand), TTL, and outputs for table names."
```

#### Docker Configuration

```
"Create a Dockerfile for a Node.js Express application.
Use Node.js 18 alpine image, copy package files,
install dependencies, compile TypeScript, and expose port 3001.
Include proper health checks."
```

### Effective Workflow with Agentic Tools

1. **Plan**: Know exactly what you want generated
2. **Prompt**: Write a clear, detailed prompt describing requirements
3. **Review**: Read and understand the generated code
4. **Test**: Run the code locally and test it works
5. **Iterate**: Ask the tool to refine if needed
6. **Commit**: Once working, commit to git

---

## Git Workflow & Best Practices

### Why Git Matters

Your git history is part of the evaluation. Maintain clean, organized commits showing your development process.

### Commit Strategy

Make frequent, descriptive commits after completing features:

```bash
# Good commit messages
git commit -m "feat: implement todo CRUD endpoints"
git commit -m "feat: create login page UI"
git commit -m "infra: setup dynamodb tables"
git commit -m "fix: correct CORS configuration"
git commit -m "docs: add deployment instructions"

# Bad commit messages
git commit -m "updates"
git commit -m "changes"
git commit -m "WIP"
```

### Commit Frequency

- After completing a major feature
- After fixing a bug
- After implementing a module
- After adding infrastructure code

**Not too granular** (every line), **not too broad** (entire phase at once)

### Commit Message Format

```
<type>: <subject>

<optional body explaining why>

feat:     A new feature
fix:      A bug fix
infra:    Infrastructure changes
refactor: Code refactoring
docs:     Documentation
style:    Code style (formatting, semicolons, etc.)
test:     Adding or updating tests
```

### Example Commits Throughout Assignment

**Phase 1**:

```
docs: initialize project with readme and requirements
feat: scaffold react frontend with vite and tailwind
feat: scaffold express backend with typescript
infra: create terragrunt directory structure
docs: add environment variable templates
```

**Phase 2**:

```
feat: setup express server with middleware
feat: implement JWT authentication utilities
feat: create auth endpoints (signup/login)
feat: implement todos CRUD endpoints
feat: setup dynamodb integration
feat: add input validation middleware
feat: create dockerfile for backend
```

**Phase 3**:

```
feat: create authentication pages (login/signup)
feat: implement todo list page
feat: create api service layer
feat: add tailwind css styling
feat: implement responsive design
feat: add loading and error states
```

**Phase 4**:

```
infra: create dynamodb module
infra: create lambda module
infra: create s3 module
infra: create api gateway module
infra: create ecr module
infra: configure iam roles
feat: build and push docker image
```

**Phase 5**:

```
test: verify all endpoints working
fix: correct cors configuration
docs: add deployment guide
docs: update readme with aws urls
```

### Checking Your Git History

```bash
# View all commits
git log --oneline

# View detailed commit info
git log --oneline --decorate --graph --all

# View specific commit
git show <commit-hash>
```

---

## Development Phases

This section provides links and overview. For detailed step-by-step instructions for each phase, see **STEP_BY_STEP_GUIDE.md**.

### Phases Overview

| Phase       | Time   | Focus                                  | Status   |
| ----------- | ------ | -------------------------------------- | -------- |
| **Phase 1** | 1-2h   | Project setup, dependencies, structure | Required |
| **Phase 2** | 1.5-2h | Backend API, DynamoDB, Express         | Required |
| **Phase 3** | 1.5-2h | Frontend UI, React components          | Required |
| **Phase 4** | 2-3h   | Infrastructure, AWS deployment         | Required |
| **Phase 5** | 1h     | Testing & polish                       | Optional |

### How to Proceed

**Option 1: Follow the Step-by-Step Guide** (Recommended for structured approach)

- Open **STEP_BY_STEP_GUIDE.md**
- Follow the detailed walkthrough with code examples and commit suggestions
- Use this if you prefer detailed guidance

**Option 2: Self-Directed Development** (For experienced developers)

- Review the **Complete Requirements** section above
- Check the **Tech Stack** section for technologies used
- Use the **Project Structure** as your template
- Build the phases in any order you prefer
- Use agentic tools to help generate code and configurations

### Key Reminder

Whether you follow the step-by-step guide or develop independently, ensure you:

- ✅ Build all 5 features from the **Complete Requirements** section
- ✅ Use the **Tech Stack** specified
- ✅ Follow the **Project Structure** template
- ✅ Make frequent git commits with clear messages
- ✅ Test thoroughly before moving to the next phase
- ✅ Don't deploy to AWS until everything works locally

---

## Phase Details Reference

> **Note**: Detailed step-by-step instructions for all phases are in **STEP_BY_STEP_GUIDE.md**. This section is here for quick reference only.

### Phase 1: Project Setup (1-2 hours)

**Objectives**: Set up all three major components with proper structure, install dependencies, and create templates.

**Tasks**:

- Create Frontend Project (React + Vite + TypeScript + Tailwind)
- Create Backend Project (Express + TypeScript)
- Create Infrastructure Directory (Terragrunt structure)
- Update package.json Scripts
- Verify Setup

👉 **See STEP_BY_STEP_GUIDE.md for detailed instructions**

### Phase 2: Backend API (1.5-2 hours)

**Objectives**: Build complete REST API with todo management and DynamoDB integration.

**Tasks**:

- Set up Express server with middleware
- Create DynamoDB client and operations
- Implement todo CRUD endpoints
- Add input validation
- Add error handling
- Create Dockerfile for containerization

👉 **See STEP_BY_STEP_GUIDE.md for detailed instructions**

### Phase 3: Frontend UI (1.5-2 hours)

**Objectives**: Build complete React UI with todo management and API integration.

**Tasks**:

- Create API service layer
- Create todo list page and components
- Set up React Router
- Configure Tailwind CSS
- Handle loading and error states
- Build for production

👉 **See STEP_BY_STEP_GUIDE.md for detailed instructions**

### Phase 4: Infrastructure & Deployment (2-3 hours)

**Objectives**: Deploy complete application to AWS using Terragrunt, Lambda, DynamoDB, and S3.

**Tasks**:

- Create DynamoDB module
- Create ECR module
- Create S3 module
- Create Lambda module
- Create API Gateway module
- Set up Terragrunt configuration
- Build and push Docker image
- Deploy infrastructure
- Test end-to-end

👉 **See STEP_BY_STEP_GUIDE.md for detailed instructions**

### Phase 5: Testing & Polish (Optional - 1 hour)

**Objectives**: Thoroughly test the entire application, fix bugs, and ensure production readiness.

**Status**: ⭐ **OPTIONAL** - Focus on Phases 1-4 first. Testing is a bonus that improves your submission but is not required.

**Tasks**:

- Complete end-to-end testing
- Fix any issues found
- Create deployment documentation

👉 **See STEP_BY_STEP_GUIDE.md for detailed instructions**

---

## Testing Checklist (Optional)

### Backend API Testing

#### Authentication Endpoints

- [ ] POST /auth/signup with valid email creates user and returns JWT token
- [ ] POST /auth/signup with invalid email returns 400 error
- [ ] POST /auth/signup with duplicate email returns 400 error
- [ ] POST /auth/login with valid email returns JWT token
- [ ] POST /auth/login with non-existent email returns 401 error
- [ ] POST /auth/login with invalid email returns 400 error

#### Todo Endpoints (without auth)

- [ ] GET /todos without token returns 401 Unauthorized
- [ ] POST /todos without token returns 401 Unauthorized
- [ ] PUT /todos/:id without token returns 401 Unauthorized
- [ ] DELETE /todos/:id without token returns 401 Unauthorized

#### Todo CRUD (with valid token)

- [ ] POST /todos with valid title creates todo and returns 201
- [ ] POST /todos with empty title returns 400 error
- [ ] GET /todos returns all user's todos
- [ ] PUT /todos/:id with valid updates modifies todo
- [ ] PUT /todos/:id with completed flag toggles status
- [ ] DELETE /todos/:id removes todo from database
- [ ] POST /todos/:id/toggle flips completed status

#### Data Validation

- [ ] Title field is required for todos
- [ ] Email field is required for auth
- [ ] Invalid email format is rejected
- [ ] Long strings are accepted (no arbitrary limits)
- [ ] Special characters in titles are preserved

### Frontend UI Testing

#### Authentication Flow

- [ ] Signup page displays and form is functional
- [ ] Can enter email and submit signup form
- [ ] Successful signup logs in user and navigates to todos
- [ ] Error messages display on failed signup
- [ ] Login page displays and form is functional
- [ ] Can enter email and submit login form
- [ ] Successful login navigates to todos page
- [ ] Logout button clears token and navigates to login

#### Protected Routes

- [ ] Can access /todos page when logged in
- [ ] Redirected to /login when accessing /todos without token
- [ ] Refresh maintains session if token in localStorage

#### Todo Management

- [ ] Todo list displays all user's todos
- [ ] Empty list shows helpful message
- [ ] Can create new todo with title
- [ ] Can create todo with title and description
- [ ] New todos appear in list immediately
- [ ] Can toggle todo completion status
- [ ] Completed todos show visual indication (strikethrough)
- [ ] Can delete todos
- [ ] Deleted todos remove from list immediately
- [ ] Can edit todo title
- [ ] Can edit todo description

#### Filters and Search

- [ ] "All" filter shows all todos
- [ ] "Active" filter shows only incomplete todos
- [ ] "Completed" filter shows only completed todos
- [ ] Filter buttons highlight when active
- [ ] Switching filters updates list correctly

#### User Feedback

- [ ] Loading spinners show during API calls
- [ ] Buttons disable during pending operations
- [ ] Error messages display for failed operations
- [ ] Success messages confirm completed actions
- [ ] Empty states show helpful prompts
- [ ] Error messages are user-friendly

#### Responsive Design

- [ ] Layout works on mobile (320px width)
- [ ] Layout works on tablet (768px width)
- [ ] Layout works on desktop (1024px+ width)
- [ ] Touch targets are appropriately sized
- [ ] Text is readable on all screen sizes
- [ ] Inputs are usable on mobile keyboards

#### Performance

- [ ] Page loads within 3 seconds
- [ ] API responses within 1 second
- [ ] No console errors or warnings
- [ ] Images optimized (if applicable)

### Integration Testing (E2E)

#### User Flow 1: New User

1. [ ] Visit application
2. [ ] See login page
3. [ ] Click "Sign up"
4. [ ] Enter email and create account
5. [ ] Logged in and see empty todos list
6. [ ] Create first todo
7. [ ] Todo appears in list
8. [ ] Logout
9. [ ] Can login with same email

#### User Flow 2: Existing User

1. [ ] Visit application
2. [ ] Click "Sign up"
3. [ ] Try to create account with existing email
4. [ ] See error message
5. [ ] Click "Sign in"
6. [ ] Login with email
7. [ ] See todos list with existing todos
8. [ ] All CRUD operations work

#### User Flow 3: Todo Management

1. [ ] Create todo with title only
2. [ ] Create todo with title and description
3. [ ] Create todo with special characters
4. [ ] Create todo with long title (100+ chars)
5. [ ] Toggle completion status multiple times
6. [ ] Edit todo title
7. [ ] Edit todo description
8. [ ] Delete todo
9. [ ] Filter todos by status
10. [ ] Refresh page (todo state persists)

### Infrastructure Testing

#### AWS Resources

- [ ] DynamoDB users table exists and accessible
- [ ] DynamoDB todos table exists and accessible
- [ ] ECR repository exists with image
- [ ] Lambda function deployed and callable
- [ ] API Gateway endpoints working
- [ ] S3 bucket exists with frontend files
- [ ] IAM roles properly configured
- [ ] CloudWatch logs showing requests

#### CORS

- [ ] Frontend can call API endpoints
- [ ] Cross-origin requests return proper headers
- [ ] Preflight requests succeeding

#### Environment Variables

- [ ] JWT_SECRET set correctly in Lambda
- [ ] DynamoDB table names match configuration
- [ ] CORS_ORIGIN matches frontend URL

---

## Deployment Instructions

### Local Development Setup

```bash
# Terminal 1: Backend
cd backend
npm install
npm run dev

# Terminal 2: Frontend
cd frontend
npm install
npm run dev

# Visit http://localhost:5173
```

### AWS Deployment

#### 1. Prerequisites

```bash
aws configure
terraform --version
terragrunt --version
docker --version
```

#### 2. Deploy Infrastructure

```bash
cd infrastructure/environments/dev
terragrunt init
terragrunt plan
terragrunt apply
# Save outputs (you'll need them)
terragrunt output
```

#### 3. Build and Push Backend

```bash
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
AWS_REGION=us-east-1
AWS_ECR_URL=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com

cd backend

# Build image
docker build -t todo-list-api:latest .

# Login to ECR
aws ecr get-login-password --region $AWS_REGION | \
  docker login --username AWS --password-stdin $AWS_ECR_URL

# Push image
docker tag todo-list-api:latest $AWS_ECR_URL/todo-list-api:latest
docker push $AWS_ECR_URL/todo-list-api:latest

cd ..
```

#### 4. Deploy Frontend

```bash
cd frontend

# Update API endpoint in .env
# VITE_API_URL=<your-api-gateway-url>

# Build
npm run build

# Get bucket name from infrastructure outputs
S3_BUCKET=todo-list-dev-<account-id>

# Upload
aws s3 sync dist/ s3://$S3_BUCKET/ --delete

cd ..
```

#### 5. Access Application

- Frontend: `http://<S3_BUCKET>.s3-website-us-east-1.amazonaws.com`
- API: `<API_GATEWAY_INVOKE_URL>`

### Cleanup

```bash
cd infrastructure/environments/dev
terragrunt destroy
cd ../../..
```

---

## Troubleshooting & FAQ

### Common Issues

#### Issue: Cannot connect to DynamoDB from Lambda

**Solution**:

- Check IAM role has DynamoDB permissions
- Verify table names in environment variables
- Check Lambda is using correct AWS region

#### Issue: CORS errors in browser console

**Solution**:

- Verify CORS_ORIGIN in Lambda environment variables matches frontend URL
- Check API Gateway CORS configuration
- Ensure Authorization header is included in requests

#### Issue: 401 Unauthorized on API requests

**Solution**:

- Verify JWT token is valid (not expired)
- Check JWT_SECRET is consistent
- Ensure Authorization header is properly formatted: `Bearer <token>`

#### Issue: Frontend not loading from S3

**Solution**:

- Verify S3 bucket is public
- Check bucket policy allows GetObject
- Ensure index.html exists in bucket
- Clear browser cache

#### Issue: Lambda timeout errors

**Solution**:

- Increase Lambda timeout (currently 30s)
- Check DynamoDB query performance
- Monitor Lambda logs in CloudWatch

#### Issue: Docker image too large

**Solution**:

- Use Node Alpine base image (already done)
- Remove dev dependencies: `npm ci --only=production`
- Use multi-stage builds if needed

### FAQ

**Q: How much will this cost?**
A: Very little! DynamoDB on-demand and Lambda free tier cover most of the cost. Estimate: <$1/month for light usage.

**Q: How do I monitor the application?**
A: Check CloudWatch logs:

```bash
aws logs tail /aws/lambda/todo-list-api --follow
```

**Q: How do I update the backend after deployment?**
A: Rebuild and push Docker image, then update Lambda to use new image.

**Q: Can I use a custom domain?**
A: Yes! Use Route53 + CloudFront for S3, and custom domain for API Gateway.

**Q: How do I scale this application?**
A: DynamoDB automatically scales. Lambda automatically handles traffic. No changes needed!

**Q: How do I backup my data?**
A: Enable DynamoDB backups in AWS Console or Terraform.

**Q: How do I add more features?**
A: Update backend code, rebuild Docker image, push to ECR, and Lambda automatically uses new version.

---

## Evaluation Criteria

Your submission will be evaluated on the following. **Note**: Phase 5 (testing) is optional and not required for evaluation.

### Code Quality (30%)

- Clean, readable code with proper structure
- Proper TypeScript usage (no `any` types)
- Following architectural patterns
- Error handling and edge cases
- Comments for complex logic
- No console.logs or debugging code left in

### Functionality (40%)

- All required features implemented and working
- API endpoints returning correct responses
- Frontend UI functional and user-friendly
- Authentication working end-to-end
- Database operations working correctly
- No critical bugs or broken features

### Infrastructure & Deployment (20%)

- Infrastructure code properly organized
- Successful AWS deployment
- Environment separation (dev/prod ready)
- Proper IAM permissions
- Cost optimization (on-demand pricing, Lambda free tier)
- Documentation of infrastructure

### Git & Development Process (10%)

- Regular, descriptive commits (at least 15-20 total)
- Clean git history (no "WIP" or "fix" commits)
- Logical commit organization
- Proper commit messages with context

### Optional Bonus: Testing (Not Required)

- Comprehensive manual testing completed
- All edge cases handled
- Mobile responsiveness verified
- Error handling thoroughly tested
- This is a bonus - focus on core functionality first!

---

## Submission Checklist

Before submitting, verify:

- [ ] All code committed to git with clean history
- [ ] Frontend and backend have proper README files
- [ ] Infrastructure code documented
- [ ] Application deployed to AWS and accessible
- [ ] All CRUD operations working end-to-end
- [ ] No console errors or warnings
- [ ] No secrets or credentials in git
- [ ] TypeScript compilation without errors
- [ ] Docker build succeeds without errors
- [ ] Terraform/Terragrunt deployment successful
- [ ] CloudWatch logs showing API activity

**Optional (Phase 5 - Bonus)**:

- [ ] Manual testing completed (basic smoke tests)
- [ ] Responsive design verified on mobile
- [ ] Error handling tested for edge cases
- [ ] Loading states display during operations

### Final Submission

Create a **SUBMISSION.md** file with:

```markdown
# Todo List Application - Submission

## Deployed Application

- **Frontend URL**: [Link to S3 website]
- **API Endpoint**: [API Gateway invoke URL]

## Git Repository

- **Repository**: [GitHub/GitLab URL if public]
- **Commit History**: [Summary of major commits]

## What Was Built

- React frontend with authentication and todo management
- Express backend with JWT auth and DynamoDB
- Complete AWS infrastructure with Terragrunt

## Key Features Implemented

- [x] User authentication (signup/login)
- [x] Todo CRUD operations
- [x] Responsive mobile design
- [x] API Gateway + Lambda backend
- [x] DynamoDB persistence
- [x] S3 static hosting
- [x] CloudWatch monitoring

## Challenges & Solutions

- **Challenge 1**: [Describe challenge and how you solved it]
- **Challenge 2**: [Describe challenge and how you solved it]

## Time Spent

- Phase 1 (Setup): ~1.5 hours
- Phase 2 (Backend): ~2.5 hours
- Phase 3 (Frontend): ~2.5 hours
- Phase 4 (Infrastructure): ~2.5 hours
- Phase 5 (Testing - Optional): ~1 hour (if completed)
- **Total (Core)**: ~9 hours
- **Total (with testing)**: ~10 hours

## Notes

- Used Claude Code for boilerplate generation
- All features working as required
- Application is production-ready
```

---

## Key Takeaways

1. **Use Agentic Tools**: These tools accelerate development significantly. Don't hesitate to use them.

2. **Git History Matters**: Frequent, descriptive commits show your development process.

3. **Test Thoroughly**: Manual testing is essential. Test all user flows and edge cases.

4. **Start Simple**: Get a working MVP first, then add features.

5. **Read Documentation**: AWS docs are comprehensive. Use them when stuck.

6. **Security Matters**: Even in MVP, don't store secrets in code. Use environment variables.

7. **Cost Matters**: AWS offers free tier and on-demand pricing. This setup is very cheap.

8. **Commit Often**: Small, logical commits are better than one giant commit.

---

## Resources

- **React**: https://react.dev
- **Express**: https://expressjs.com
- **Tailwind CSS**: https://tailwindcss.com
- **AWS**: https://aws.amazon.com
- **Terraform**: https://www.terraform.io
- **Terragrunt**: https://terragrunt.gruntwork.io
- **Docker**: https://www.docker.com

---

## Good Luck!

You've got this! Remember:

- Break it into phases
- Use agentic tools to accelerate
- Test frequently
- Commit often
- Don't over-engineer

Happy coding! 🚀
