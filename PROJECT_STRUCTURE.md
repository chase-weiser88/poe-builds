# POE Builds Project Structure

This repository contains:

## Frontend Application
Located in `/frontend` directory
- React 19 + Vite application
- Build calculator, browser, and comparison tools
- See frontend/README.md for setup instructions

To start the frontend:
```bash
cd frontend
npm install
npm run dev
```

## Backend / MCP Integration
- MCP server configuration in mcp-config.json
- Integration with poe2-mcp and poe2scout-mcp
- Scripts for build analysis and testing

## CI/CD
- GitHub Actions workflows for automated testing
- Located in .github/workflows/

For more information, see the main README.md
