# Setup Guide

Complete guide for setting up the POE Builds repository with MCP servers.

## Prerequisites

### Required Software

1. **Node.js 20+**
   ```bash
   # Check version
   node --version
   
   # Install from https://nodejs.org/
   ```

2. **Python 3.10+**
   ```bash
   # Check version
   python3 --version
   
   # Install from https://www.python.org/downloads/
   ```

3. **Git**
   ```bash
   # Check version
   git --version
   ```

## Installation Steps

### 1. Clone Repository

```bash
git clone https://github.com/chase-weiser88/poe-builds.git
cd poe-builds
```

### 2. Install POE2 Optimizer (Python)

```bash
# Install via pip
pip install poe2-mcp

# Verify installation
python3 -m pip show poe2-mcp
```

### 3. Install POE2Scout (Node.js)

```bash
# Clone the repository
git clone https://github.com/vanzan01/poe2scout-mcp.git
cd poe2scout-mcp

# Install dependencies
npm install

# Return to main directory
cd ..
```

### 4. Verify Setup

```bash
# Check MCP configuration
npm run check-config

# Run tests
npm test

# Run build analyzer
npm run analyze
```

## AI Assistant Configuration

### Claude Desktop

**Location:**
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Linux: `~/.config/Claude/claude_desktop_config.json`

**Configuration:**
```json
{
  "mcpServers": {
    "poe2-optimizer": {
      "command": "python3",
      "args": ["-m", "poe2_mcp"],
      "env": {}
    }
  }
}
```

After editing, restart Claude Desktop.

### Cursor AI

Add to Cursor settings (`settings.json`):

```json
{
  "mcp": {
    "servers": {
      "poe2-optimizer": {
        "command": "python3",
        "args": ["-m", "poe2_mcp"]
      },
      "poe2scout": {
        "command": "node",
        "args": ["/path/to/poe2scout-mcp/index.js"]
      }
    }
  }
}
```

### ChatGPT Desktop

Follow OpenAI's documentation for MCP server configuration. The setup is similar to Claude Desktop.

### Windsurf

1. Open Windsurf settings
2. Navigate to MCP Plugin Store
3. Search for "poe2" or add manually using the configuration above

## Troubleshooting

### Python Module Not Found

```bash
# Ensure pip is up to date
python3 -m pip install --upgrade pip

# Reinstall poe2-mcp
pip install --force-reinstall poe2-mcp
```

### Node.js Scripts Failing

```bash
# Verify Node.js version
node --version  # Should be 20+

# Check if scripts are executable
chmod +x scripts/*.js
```

### MCP Server Not Connecting

1. Verify server installation:
   ```bash
   python3 -c "import poe2_mcp"
   ```

2. Check configuration file:
   ```bash
   npm run check-config
   ```

3. Restart your AI assistant application

### Rate Limiting Issues (POE2Scout)

POE2Scout is rate-limited to 2 requests/second:
- Wait between requests
- The server has built-in retry logic
- Check API status: Use `get_api_status` tool

## Advanced Configuration

### Custom MCP Server Paths

Edit `mcp-config.json`:

```json
{
  "mcpServers": {
    "poe2-optimizer": {
      "command": "/usr/local/bin/python3",
      "args": ["-m", "poe2_mcp"]
    }
  }
}
```

### Environment Variables

For POE2Scout with API keys:

```bash
# Create .env file
echo "POE_API_KEY=your_key_here" > .env

# Load in shell
source .env
```

### Docker Setup (Optional)

```dockerfile
FROM python:3.11-slim

WORKDIR /app

# Install dependencies
RUN pip install poe2-mcp

# Copy configuration
COPY mcp-config.json .

CMD ["python3", "-m", "poe2_mcp"]
```

Build and run:
```bash
docker build -t poe-builds .
docker run -it poe-builds
```

## Verification Checklist

- [ ] Node.js 20+ installed
- [ ] Python 3.10+ installed
- [ ] poe2-mcp package installed
- [ ] Configuration validated (`npm run check-config`)
- [ ] Tests passing (`npm test`)
- [ ] AI assistant configured (if using)
- [ ] GitHub Actions workflow running (if contributor)

## Getting Help

1. **Check documentation:**
   - [POE2 Optimizer README](https://github.com/HivemindOverlord/poe2-mcp)
   - [POE2Scout README](https://github.com/vanzan01/poe2scout-mcp)

2. **Review logs:**
   ```bash
   # Check npm logs
   npm run check-config --verbose
   
   # Check Python logs
   python3 -m poe2_mcp --help
   ```

3. **Test individual components:**
   ```bash
   # Test Node.js
   node --version
   node scripts/check-mcp-config.js
   
   # Test Python
   python3 --version
   python3 -c "import poe2_mcp"
   ```

## Next Steps

After setup is complete:

1. Read the [main README](README.md) for usage examples
2. Check out [example builds](BUILDS.md)
3. Try asking your AI assistant about Path of Exile builds
4. Contribute improvements via pull requests

## Support

- GitHub Issues: [Report problems](https://github.com/chase-weiser88/poe-builds/issues)
- POE2 MCP Issues: [poe2-mcp issues](https://github.com/HivemindOverlord/poe2-mcp/issues)
- POE2Scout Issues: [poe2scout-mcp issues](https://github.com/vanzan01/poe2scout-mcp/issues)
