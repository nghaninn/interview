# Detailed Phase Breakdown - Recommended Step-by-Step Guide

> **Note**: This is a **recommended flow** to help guide your implementation. You don't need to follow this exactly - adapt it to your own pace and approach. The main requirements in COMPLETE_GUIDE.md are what matters.

---

## Phase 1: Project Setup (1-2 hours)

### Goal

Set up all three major components with proper structure, install dependencies, and create templates.

### Phase 1 Tasks

#### Task 1.1: Create Frontend Project (15 minutes)

```bash
# Create frontend directory
mkdir frontend
cd frontend

# Create React + Vite + TypeScript project
npm create vite@latest . -- --template react-ts

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

cd ..
```

**Using Agentic Tools**: Ask your agentic tool (Gemini CLI, Antigravity, etc.) to:

- Generate Tailwind CSS configuration for custom theme
- Create directory structure for components, pages, services, types
- Generate a basic App.tsx component with routing setup
- Create environment variable template

**Files to Create**:

```bash
mkdir -p frontend/src/{components,pages,services,types}
touch frontend/.env.example
```

**frontend/.env.example**:

```
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=Todo List
```

**Commit**:

```bash
git add frontend/
git commit -m "feat: scaffold react frontend with vite and tailwind

- Initialize Vite project with React 18 and TypeScript
- Configure Tailwind CSS for styling
- Set up directory structure for components, pages, services, types
- Add environment variable template"
```

---

#### Task 1.2: Create Backend Project (15 minutes)

```bash
# Create backend directory
mkdir backend
cd backend

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express cors dotenv jsonwebtoken
npm install -D typescript ts-node @types/express @types/node @types/cors @types/jsonwebtoken

# Initialize TypeScript
npx tsc --init

cd ..
```

**Using Agentic Tools**: Ask your tool to:

- Generate proper tsconfig.json configuration
- Create Express server boilerplate with middleware setup
- Create directory structure (routes, controllers, middleware, db, types, utils)
- Generate basic error handling middleware

**Files to Create**:

```bash
mkdir -p backend/src/{routes,controllers,middleware,db,types,utils}
touch backend/.env.example
touch backend/Dockerfile
touch backend/.dockerignore
```

**backend/.env.example**:

```
NODE_ENV=development
PORT=3001
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRATION=24h
AWS_REGION=us-east-1
CORS_ORIGIN=http://localhost:5173
LOG_LEVEL=debug
```

**Update backend/package.json scripts**:

```json
{
  "scripts": {
    "dev": "ts-node src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "watch": "tsc --watch",
    "type-check": "tsc --noEmit"
  }
}
```

**Commit**:

```bash
git add backend/
git commit -m "feat: scaffold express backend with typescript

- Initialize Node.js project with Express and TypeScript
- Configure TypeScript compiler for strict mode
- Set up directory structure for routes, controllers, middleware, db
- Create environment variable template
- Add Dockerfile placeholder"
```

---

#### Task 1.3: Create Infrastructure Directory (15 minutes)

```bash
# Create infrastructure directory structure
mkdir -p infrastructure/{modules,environments/{dev,prod}}

# Create module directories
mkdir -p infrastructure/modules/{lambda,dynamodb,s3,api-gateway,ecr,iam}

# Create basic files for each module
for module in lambda dynamodb s3 api-gateway ecr iam; do
  touch infrastructure/modules/$module/{main.tf,variables.tf,outputs.tf}
done

# Create Terragrunt config files
touch infrastructure/terragrunt.hcl
touch infrastructure/environments/dev/terragrunt.hcl
touch infrastructure/environments/prod/terragrunt.hcl
```

**Using Agentic Tools**: Ask your tool to:

- Generate root terragrunt.hcl configuration
- Create environment-specific configurations
- Generate placeholder Terraform configurations for each module
- Add basic variables and outputs

**Commit**:

```bash
git add infrastructure/
git commit -m "infra: create terragrunt directory structure

- Set up root Terragrunt configuration
- Create environment-specific configs (dev/prod)
- Create module structure for AWS services:
  - Lambda (compute)
  - DynamoDB (database)
  - S3 (storage)
  - API Gateway (routing)
  - ECR (container registry)
  - IAM (permissions)
- Add basic module templates"
```

---

#### Task 1.4: Update package.json Scripts (5 minutes)

**frontend/package.json**:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "type-check": "tsc --noEmit"
  }
}
```

**backend/package.json**:

```json
{
  "scripts": {
    "dev": "ts-node src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "watch": "tsc --watch",
    "type-check": "tsc --noEmit"
  }
}
```

**Commit**:

```bash
git add frontend/package.json backend/package.json
git commit -m "build: add npm scripts for development and builds

- Add dev scripts for local development
- Add build scripts for production compilation
- Add type-check for TypeScript validation"
```

---

#### Task 1.5: Verify Setup (10 minutes)

```bash
# Test installations
node --version    # Should be 18+
npm --version     # Should be 9+

# Install dependencies
cd frontend && npm install && cd ..
cd backend && npm install && cd ..

# Verify TypeScript works
cd backend && npm run type-check && cd ..

# Check git history
git log --oneline
```

### Phase 1 Completion Checklist

- [ ] Frontend directory with React + Vite + TypeScript created
- [ ] Tailwind CSS configured in frontend
- [ ] Backend directory with Express + TypeScript created
- [ ] All required npm scripts added and working
- [ ] Infrastructure directory with Terragrunt structure created
- [ ] All AWS modules directory created
- [ ] .env.example files created for both frontend and backend
- [ ] Can run `npm install` in both frontend and backend successfully
- [ ] TypeScript compilation works (`npm run type-check`)
- [ ] Git repository has 4-6 clean, descriptive commits
- [ ] No errors when running `npm install`

---

## Phase 2: Backend API (1.5-2 hours)

### Goal

Build complete REST API with todo management and DynamoDB integration (no authentication).

### Phase 2 Overview

You'll implement:

1. Express server with middleware
2. Todo CRUD endpoints
3. DynamoDB integration
4. Input validation
5. Error handling
6. Docker containerization

### Phase 2 Tasks

For detailed code examples and task breakdown, refer to COMPLETE_GUIDE.md Phase 2 section.

**Key Tasks**:

- Set up Express server with middleware
- Create DynamoDB client and operations
- Implement todo CRUD endpoints
- Add input validation
- Add error handling
- Create Dockerfile for containerization

---

## Phase 3: Frontend UI (1.5-2 hours)

### Goal

Build complete React UI with todo management and API integration.

### Phase 3 Overview

You'll implement:

1. API service layer
2. Todo list page and components
3. State management with React hooks
4. Tailwind CSS styling
5. Responsive mobile design
6. Loading and error states

### Phase 3 Tasks

For detailed code examples and task breakdown, refer to COMPLETE_GUIDE.md Phase 3 section.

**Key Tasks**:

- Create API service layer
- Create todo list page
- Create todo components
- Set up React Router
- Configure Tailwind CSS
- Build for production

---

## Phase 4: Infrastructure & Deployment (2-3 hours)

### Goal

Deploy complete application to AWS using Terragrunt, Lambda, DynamoDB, and S3.

### Phase 4 Overview

You'll implement:

1. DynamoDB tables using Terraform
2. ECR repository for Docker images
3. Lambda function configuration
4. API Gateway setup
5. S3 bucket for frontend
6. IAM roles and policies
7. Deploy and test end-to-end

### Phase 4 Tasks

For detailed code examples and task breakdown, refer to COMPLETE_GUIDE.md Phase 4 section.

**Key Tasks**:

- Create DynamoDB module
- Create ECR module
- Create S3 module
- Create Lambda module
- Create API Gateway module
- Set up Terragrunt configuration
- Build and push Docker image
- Deploy infrastructure
- Test end-to-end

---

## Phase 5: Testing & Polish (Optional - 1 hour)

### Goal

Thoroughly test the entire application, fix bugs, and ensure production readiness.

⭐ **NOTE**: This phase is **OPTIONAL**. Focus on getting Phases 1-4 working first. Testing is a bonus that improves your submission but is not required.

### Phase 5 Tasks

For detailed test cases and task breakdown, refer to COMPLETE_GUIDE.md Phase 5 section.

**Key Tasks**:

- Complete end-to-end testing
- Fix bugs discovered
- Create deployment documentation
- Polish and refinement

---

## Tips for Success

1. **Use Agentic Tools**: Ask your agentic tool to generate boilerplate code and configurations
2. **Test Frequently**: Test each component before moving to the next phase
3. **Commit Often**: Make small, focused commits that show your progress
4. **Follow the Flow**: Use this as a guide but adapt to your own pace
5. **Read Errors**: Pay attention to error messages - they usually point to the solution
6. **Reference COMPLETE_GUIDE.md**: Detailed examples and code snippets are there

---

Good luck! Remember: this is a **recommended flow**, not a strict requirement. Adapt it to your own approach and style. Focus on completing the requirements defined in COMPLETE_GUIDE.md.
