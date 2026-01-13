#!/usr/bin/env node

/**
 * Test Build Analysis Script
 * Demonstrates how to interact with POE MCP servers for build testing
 */

const fs = require('fs');
const path = require('path');

console.log('=== POE Build Testing Framework ===\n');

// Load MCP configuration
const configPath = path.join(__dirname, '..', 'mcp-config.json');
let config;

try {
  config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  console.log('✓ Loaded MCP configuration successfully\n');
} catch (error) {
  console.error('✗ Failed to load MCP configuration:', error.message);
  process.exit(1);
}

// Display available MCP servers
console.log('Available MCP Servers:');
console.log('─────────────────────────────────────────\n');

for (const [serverName, serverConfig] of Object.entries(config.mcpServers)) {
  console.log(`📦 ${serverName.toUpperCase()}`);
  console.log(`   Description: ${serverConfig.description}`);
  console.log(`   Repository: ${serverConfig.repository}`);
  console.log(`   Tools: ${serverConfig.tools_count} available`);
  console.log(`   Features:`);
  serverConfig.features.forEach(feature => {
    console.log(`     • ${feature}`);
  });
  console.log('');
}

// Simulate build testing workflow
console.log('=== Build Testing Workflow ===\n');

console.log('Step 1: Character Analysis');
console.log('  → Using poe2-optimizer to fetch character data');
console.log('  → Analyzing defensive stats and passive tree');
console.log('  → Validating support gem combinations\n');

console.log('Step 2: Market Analysis');
console.log('  → Using poe2scout to check item prices');
console.log('  → Analyzing currency exchange rates');
console.log('  → Detecting market trends\n');

console.log('Step 3: Build Optimization');
console.log('  → Comparing with top ladder players');
console.log('  → Generating optimization recommendations');
console.log('  → Exporting to Path of Building format\n');

console.log('✓ Build testing workflow simulation completed successfully\n');

// Validation
console.log('=== Configuration Validation ===\n');

let hasErrors = false;

// Check for required fields
const requiredServers = ['poe2-optimizer', 'poe2scout'];
for (const server of requiredServers) {
  if (!config.mcpServers[server]) {
    console.error(`✗ Missing required server: ${server}`);
    hasErrors = true;
  } else {
    console.log(`✓ Server configured: ${server}`);
  }
}

if (hasErrors) {
  console.log('\n✗ Configuration validation failed');
  process.exit(1);
} else {
  console.log('\n✓ All configuration checks passed');
  process.exit(0);
}
