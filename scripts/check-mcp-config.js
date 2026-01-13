#!/usr/bin/env node

/**
 * Check MCP Configuration Script
 * Validates the MCP server configuration file
 */

const fs = require('fs');
const path = require('path');

console.log('=== MCP Configuration Checker ===\n');

const configPath = path.join(__dirname, '..', 'mcp-config.json');

// Load and validate configuration
try {
  const configContent = fs.readFileSync(configPath, 'utf8');
  const config = JSON.parse(configContent);
  
  console.log('✓ Configuration file is valid JSON\n');
  
  // Check structure
  if (!config.mcpServers) {
    throw new Error('Missing mcpServers section');
  }
  
  const serverCount = Object.keys(config.mcpServers).length;
  console.log(`Found ${serverCount} MCP server(s) configured:\n`);
  
  // Validate each server
  for (const [serverName, serverConfig] of Object.entries(config.mcpServers)) {
    console.log(`Checking: ${serverName}`);
    
    const requiredFields = ['description', 'repository', 'command', 'features'];
    const missingFields = requiredFields.filter(field => !serverConfig[field]);
    
    if (missingFields.length > 0) {
      console.log(`  ✗ Missing fields: ${missingFields.join(', ')}`);
    } else {
      console.log('  ✓ All required fields present');
      console.log(`  ✓ ${serverConfig.features.length} features documented`);
      console.log(`  ✓ ${serverConfig.tools_count || 0} tools available`);
    }
    console.log('');
  }
  
  // Check usage notes
  if (config.usage_notes) {
    console.log('Usage notes:');
    for (const [server, note] of Object.entries(config.usage_notes)) {
      console.log(`  • ${server}: ${note}`);
    }
    console.log('');
  }
  
  console.log('✓ Configuration validation successful\n');
  process.exit(0);
  
} catch (error) {
  console.error('✗ Configuration validation failed:');
  console.error(`  ${error.message}\n`);
  process.exit(1);
}
