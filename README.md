# POE Builds - Path of Exile Build Testing & Analysis

A comprehensive repository for testing, analyzing, and showcasing Path of Exile builds using the highest-rated Model Context Protocol (MCP) servers and a modern React frontend.

## 🎯 Overview

This repository provides a complete pipeline for:
- **Frontend Web Application**: React-based build planner, browser, and comparison tool
- **Build Analysis**: Character optimization using AI-powered analysis
- **Market Intelligence**: Real-time trading data and price trends
- **Automated Testing**: CI/CD pipeline for validating build configurations
- **MCP Integration**: Seamless connection to Path of Exile and Path of Building tools

## 🌐 Frontend Application

### Features
- **Build Calculator/Planner** - Interactive build creation with character class selection and stat calculations
- **Build Browser** - Browse and search community builds with advanced filtering
- **Build Comparison** - Side-by-side comparison of multiple builds
- **User Authentication** - JWT-based authentication with user profiles
- **Rating & Comments** - Community engagement features
- **Import/Export** - POB code import/export functionality

### Quick Start (Frontend)
```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173` to access the application.

For detailed frontend documentation, see [frontend/README.md](frontend/README.md).

## 🚀 Features

### React Frontend Application
- Modern React 19 with Vite for fast development
- Tailwind CSS for responsive design
- React Router v6 for navigation
- Mock API for development without backend
- Comprehensive build showcase and planning tools

### Integrated MCP Servers

1. **POE2 Optimizer** ([poe2-mcp](https://github.com/HivemindOverlord/poe2-mcp))
   - 32 specialized tools for build analysis
   - Character data from poe.ninja
   - Passive tree optimization
   - Support gem validation
   - Path of Building integration
   - Ladder comparison

2. **POE2Scout** ([poe2scout-mcp](https://github.com/vanzan01/poe2scout-mcp))
   - 11 trading intelligence tools
   - Real-time market data
   - Currency exchange rates
   - Price history analysis
   - Trading signals and alerts
   - Outlier detection

## 📦 Installation

### Prerequisites

- **Node.js** 20+ (for scripts and POE2Scout)
- **Python** 3.10+ (for POE2 Optimizer)
- **Git** (for repository management)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/chase-weiser88/poe-builds.git
   cd poe-builds
   ```

2. **Install POE2 Optimizer**
   ```bash
   pip install poe2-mcp
   ```

3. **Install POE2Scout** (optional)
   ```bash
   git clone https://github.com/vanzan01/poe2scout-mcp.git
   cd poe2scout-mcp
   npm install
   ```

4. **Run configuration check**
   ```bash
   npm run check-config
   ```

## 🔧 Usage

### Testing Build Analysis

Run the build testing framework:
```bash
npm test
```

This will:
- Load MCP configuration
- Display available servers
- Simulate build testing workflow
- Validate configuration

### Analyzing a Build

Run the build analyzer:
```bash
npm run analyze
```

Example output:
```
Build: Elemental Ranger
Defense Score: 7/10
  ✓ Capped resistances
  ⚠ Low chaos resistance
  ✓ Good life pool

Offense Score: 8/10
  ✓ Optimized support gems
  ✓ Strong damage scaling
```

### Checking MCP Configuration

Validate your MCP setup:
```bash
npm run check-config
```

## 🤖 AI Assistant Integration

These MCP servers work with AI assistants that support the Model Context Protocol:

### Claude Desktop

Edit `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "poe2-optimizer": {
      "command": "python3",
      "args": ["-m", "poe2_mcp"]
    }
  }
}
```

### Cursor AI

Add to Cursor settings:
```json
{
  "mcp": {
    "servers": {
      "poe2-optimizer": {
        "command": "python3",
        "args": ["-m", "poe2_mcp"]
      }
    }
  }
}
```

### Other Platforms

Supported platforms:
- ChatGPT Desktop
- Windsurf
- Claude Code CLI
- Any MCP-compatible AI tool

## 🔄 GitHub Actions Pipeline

The repository includes automated testing workflows:

### Workflows

1. **Validate Configuration** - Checks MCP config and JSON files
2. **Test Build Analysis** - Runs build testing scripts
3. **Setup MCP Servers** - Installs and verifies both servers
4. **Integration Testing** - End-to-end testing with all components

### Triggers

- Push to `main` or `develop` branches
- Pull requests to `main`
- Manual workflow dispatch

### Matrix Testing

Tests across multiple Python versions:
- Python 3.10
- Python 3.11
- Python 3.12

## 📊 Build Testing Workflow

```
┌─────────────────────────────────────┐
│   1. Character Data Retrieval      │
│   (poe2-optimizer)                  │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│   2. Defense Analysis               │
│   - Resistances                     │
│   - Life/ES/Armor                   │
│   - Block/Dodge                     │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│   3. Offense Analysis               │
│   - DPS calculation                 │
│   - Gem validation                  │
│   - Scaling factors                 │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│   4. Market Intelligence            │
│   (poe2scout)                       │
│   - Item prices                     │
│   - Upgrade costs                   │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│   5. Optimization Report            │
│   - Recommendations                 │
│   - Priority upgrades               │
│   - Cost estimates                  │
└─────────────────────────────────────┘
```

## 📁 Repository Structure

```
poe-builds/
├── .github/
│   └── workflows/
│       └── test-builds.yml      # CI/CD pipeline
├── frontend/                     # React frontend application
│   ├── src/
│   │   ├── components/          # UI components
│   │   ├── pages/               # Page components
│   │   ├── context/             # React contexts
│   │   ├── hooks/               # Custom hooks
│   │   ├── services/            # API services
│   │   ├── utils/               # Utilities
│   │   └── App.jsx              # Main app
│   ├── package.json             # Frontend dependencies
│   └── README.md                # Frontend documentation
├── scripts/
│   ├── test-build-analysis.js   # Main test script
│   ├── analyze-build.js         # Build analyzer
│   └── check-mcp-config.js      # Config validator
├── .gitignore                   # Git ignore rules
├── package.json                 # Node.js configuration
├── mcp-config.json              # MCP server configuration
└── README.md                    # This file
```

## 🔐 Requirements & Notes

### POE2 Optimizer Requirements
- Python 3.10 or higher
- Your PoE2 character must be public on poe.ninja
- Internet connection for API access

### POE2Scout Requirements
- Node.js environment
- Rate limited to 2 requests/second
- Focuses on high-volume traded items only

## 🛠️ Development

### Adding New Tests

1. Create a new script in `scripts/` directory
2. Add npm script to `package.json`
3. Update workflow in `.github/workflows/test-builds.yml`

### Modifying MCP Configuration

Edit `mcp-config.json` to:
- Add new MCP servers
- Update server features
- Change command parameters

## 📝 License

MIT License - See repository for details

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📚 Resources

- [POE2 Optimizer Repository](https://github.com/HivemindOverlord/poe2-mcp)
- [POE2Scout Repository](https://github.com/vanzan01/poe2scout-mcp)
- [Model Context Protocol Specification](https://modelcontextprotocol.io/)
- [Path of Exile Official Site](https://www.pathofexile.com/)
- [Path of Building Community](https://github.com/PathOfBuildingCommunity/PathOfBuilding)

## 🎮 Example Use Cases

### 1. Build Validation
```bash
# Check if your build has optimal gem links
npm test
```

### 2. Market Research
```bash
# Analyze current market for upgrade opportunities
npm run analyze
```

### 3. Ladder Comparison
Use AI assistant with poe2-optimizer to compare your build with top players

### 4. Trading Strategy
Use AI assistant with poe2scout for currency trading recommendations

## ⚡ Quick Examples

### Ask your AI assistant:
- "Analyze my Deadeye character and suggest improvements"
- "What's the current Divine Orb price trend?"
- "Compare my passive tree with top ladder players"
- "Find the most cost-effective defensive upgrade"
- "Validate my support gem setup for Lightning Arrow"

## 🎯 Why MCP Servers?

Model Context Protocol provides:
- **Standardized API** for AI tools
- **Secure access** to game data
- **Modular architecture** for easy integration
- **Real-time data** from reliable sources
- **Professional-grade** analysis tools

---

**Note**: This is a community project. Not affiliated with Grinding Gear Games. Path of Exile is a trademark of Grinding Gear Games.