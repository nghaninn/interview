# Quick Start - Read This First!

Welcome to the fullstack todo list interview assignment! This document gets you started in 2 minutes.

## What You're Building

A simple fullstack Todo List application with:

- **Frontend**: React with Tailwind CSS (create, read, update, delete todos)
- **Backend**: Express.js API (todo CRUD operations, no authentication)
- **Infrastructure**: AWS deployment with Terragrunt (Lambda, DynamoDB, S3, API Gateway)

**Time**: 6-8 hours for core functionality (Phases 1-4). Add 1 hour for optional testing (Phase 5).

## 🚀 Get Started Now

### 1. Read the Complete Guide

Open and read **COMPLETE_GUIDE.md** - it has everything you need. It's organized with a table of contents.

### 2. Follow the 5 Phases

Each phase is fully documented in COMPLETE_GUIDE.md:

| Phase                  | Time     | What You Do                                    |
| ---------------------- | -------- | ---------------------------------------------- |
| **Phase 1**            | 1-2h     | Setup projects, create structure, install deps |
| **Phase 2**            | 1.5-2h   | Build todo API (no auth) and database          |
| **Phase 3**            | 1.5-2h   | Build React todo UI                            |
| **Phase 4**            | 2-3h     | Deploy to AWS with Terragrunt                  |
| **Phase 5** (Optional) | 1h       | Test everything, fix bugs                      |
| **Core Total**         | **6-8h** | **Phases 1-4 (Required)**                      |
| **Full Total**         | **7-9h** | **All phases (with testing)**                  |

### 3. Important Principles

✅ **DO**:

- Use agentic tools (Claude Code, GitHub Copilot, etc.) to generate code
- Review generated code before using it
- Commit frequently to git (after each feature)
- Test as you go
- Ask tools to refine code if needed

❌ **DON'T**:

- Copy-paste without understanding
- Commit without message
- Leave TODOs or incomplete code
- Hard-code secrets
- Deploy broken code to AWS (test locally first!)

### 4. Key Commands You'll Use

```bash
# Backend
cd backend && npm run dev

# Frontend
cd frontend && npm run dev

# Infrastructure (after Phase 4)
cd infrastructure/environments/dev
terragrunt init
terragrunt apply
```

## 📋 Prerequisites Checklist

Ensure you have:

- [ ] Node.js 18+
- [ ] npm 9+
- [ ] Git installed
- [ ] AWS account (with CLI configured)
- [ ] Terraform 1.5+
- [ ] Terragrunt 0.50+
- [ ] Docker
- [ ] Text editor (VSCode recommended)
- [ ] Agentic tool (free: Google Antigravity, Gemini CLI; paid: Claude Code)

Verify with:

```bash
node --version
npm --version
git --version
aws --version
terraform --version
terragrunt --version
docker --version
```

## 🗂️ Repository Structure

After Phase 1, your repo will have:

```
fullstack-todo-list/
├── frontend/              # React app
├── backend/               # Express API
├── infrastructure/        # AWS code (Terragrunt)
├── COMPLETE_GUIDE.md     # Full documentation
├── QUICK_START.md        # This file
└── .gitignore
```

## 🎯 Success Criteria

Your submission should have:

- ✅ Clean git history (20+ commits)
- ✅ Working frontend at a URL
- ✅ Working backend API
- ✅ Deployed to AWS
- ✅ All CRUD operations working
- ✅ Responsive mobile design
- ✅ Proper error handling
- ✅ Code that compiles without errors

## 🆘 If You Get Stuck

1. **Read COMPLETE_GUIDE.md** - it has everything
2. **Check the troubleshooting section** in COMPLETE_GUIDE.md
3. **Use agentic tools** to debug and understand code
4. **Read official docs**:
   - React: https://react.dev
   - Express: https://expressjs.com
   - AWS: https://docs.aws.amazon.com
   - Terraform: https://www.terraform.io/docs

## ⏱️ Time Management (Core - 6-8 hours)

- **Hour 1**: Phase 1 (setup)
- **Hour 2-3.5**: Phase 2 (backend - simple API, no auth)
- **Hour 3.5-5**: Phase 3 (frontend - simple UI)
- **Hour 5-8**: Phase 4 (infrastructure)

**Optional**:

- **Hour 8-9**: Phase 5 (testing & polish) - Bonus, not required

## 🚨 Critical Reminders

1. **Git is important** - commit frequently with good messages
2. **Test as you go** - don't wait until the end
3. **Use agentic tools** - they're designed for this assignment
4. **Don't over-engineer** - get the MVP working first
5. **Read the COMPLETE_GUIDE.md** - seriously, all answers are there

## 📖 What to Read Next

1. **COMPLETE_GUIDE.md** - Complete documentation (19 sections)
2. **Section 1-7** in COMPLETE_GUIDE.md - Overview and setup
3. **Section 10** in COMPLETE_GUIDE.md - Phase 1 detailed steps
4. **Then follow Phases 2-5** as documented

## 💡 Pro Tips

- Use agentic tools to generate boilerplate - don't write repetitive code manually
- Test API endpoints with curl or Postman before building frontend
- Build frontend against `http://localhost:3001` first (local backend)
- Deploy to AWS only after everything works locally
- Use CloudWatch logs to debug Lambda issues
- Keep `.env` files with secrets out of git

## ✨ You've Got This!

This assignment is designed to be completed in one working day. You have:

- Detailed step-by-step instructions
- Code examples for every phase
- Example agentic tool prompts
- Complete testing checklist
- Deployment guide
- Troubleshooting FAQ

**Next Step**: Open COMPLETE_GUIDE.md and start with Phase 1!

Good luck! 🚀
