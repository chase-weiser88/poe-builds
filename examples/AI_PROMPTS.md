# Example AI Prompts for POE Build Analysis

This document contains example prompts you can use with AI assistants that have the MCP servers configured.

## Character Analysis Examples

### Basic Character Analysis

```
Analyze my Path of Exile 2 character "ElementalArcher" in the Settlers league.
```

**What the AI will do:**
1. Use `poe2-optimizer` to fetch character data from poe.ninja
2. Analyze defensive stats (life, resistances, armor)
3. Review passive tree allocation
4. Check support gem combinations
5. Provide optimization recommendations

### Detailed Build Review

```
Give me a comprehensive analysis of my level 88 Spark Inquisitor build.
Include:
- Defense evaluation
- Offense evaluation
- Passive tree efficiency
- Gear upgrade priorities
- Budget estimates for upgrades
```

**What the AI will do:**
1. Fetch and analyze character data
2. Calculate effective HP and defensive layers
3. Estimate DPS and scaling
4. Compare with top ladder builds
5. Use `poe2scout` to get current market prices
6. Generate prioritized upgrade list with costs

## Market Analysis Examples

### Currency Trading

```
Should I buy Divine Orbs right now or wait? What's the market trend?
```

**What the AI will do:**
1. Use `poe2scout` to fetch current Divine Orb prices
2. Analyze price history and trends
3. Calculate volatility
4. Provide trading signal (buy/sell/hold)
5. Explain the reasoning

### Item Price Checks

```
What's the current market price for these items:
- Divine Orb
- Chaos Orb
- Exalted Orb
```

## Path of Building Integration

### Import/Export Build

```
Export my current character to Path of Building format.
```

**What the AI will do:**
1. Fetch character data via `poe2-optimizer`
2. Convert to Path of Building format
3. Generate import code

## Tips for Better Prompts

### Be Specific

❌ "Improve my build"  
✅ "Improve my Lightning Arrow Deadeye's single-target DPS while staying under 300 Divine Orbs budget"

### Provide Context

❌ "What gems should I use?"  
✅ "I'm using Lightning Arrow with GMP. What other support gems work best for map clearing?"

## Resources

- [poe.ninja](https://poe.ninja) - Make your profile public here
- [Path of Building](https://github.com/PathOfBuildingCommunity/PathOfBuilding) - Import/export builds
