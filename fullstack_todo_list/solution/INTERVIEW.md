# Fullstack Todo List - Interview Assignment

## Objective
The goal of this assignment is to assess your ability to implement full-stack features using AI Agentic coding tools. This assignment is time-boxed to approximately **3 hours** as a guideline.

## Context
You are provided with a working Todo List application consisting of:
- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript, DynamoDB (via AWS SDK)
- **Infrastructure**: Docker, Terragrunt (for AWS deployment)

## Tasks

### 1. Authentication
Implement a simple authentication system.
- Users should be able to **Register** and **Login**.
- You can use JWT (JSON Web Tokens) or any other method you prefer.
- Protect the Todo List routes so only authenticated users can access them.

### 2. User-Specific Todo List
Modify the existing Todo List functionality to be user-specific.
- When a user logs in, they should only see their own todos.
- Creating, updating, and deleting todos should only affect the current user's data.
- You will need to modify the backend schema/logic to associate todos with user IDs.

### 3. AI Summarizer (Optional / Creative)
Implement a feature that uses AI to provide value to the user. This is an open-ended task to show your creativity.
- **Example**: A "Summarize" button that uses an LLM to generate a summary of the user's pending tasks.
- **Example**: Smart categorization of todos.
- **Note**: You can mock the AI response if you don't have API keys, or use a free tier if available. The focus is on the integration and UX.

## Constraints & Guidelines
- **Time Guideline**: ~3 Hours. This is a guideline to ensure you don't spend too much time on this assignment.
- **Tools**: You are encouraged to use AI coding assistants (like Gemini CLI or Antigravity IDE) to speed up development.
- **Quality**: Focus on clean code, proper error handling, and a good user experience.
- **Submission**: Please provide a brief explanation of your changes and how to run the new features.
- **Completeness**: An incomplete solution is acceptable. We want to see your understanding and ability to navigate through code and system design.

## Getting Started
1.  Explore the codebase to understand the current implementation.
2.  Start with the backend changes (User model, Auth routes).
3.  Update the frontend to handle login/register and pass auth tokens.
4.  Implement the user-specific logic.
5.  Add the AI feature if time permits.

Good luck!
