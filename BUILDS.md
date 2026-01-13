# Example Builds

This directory contains example build configurations that can be analyzed using the MCP servers.

## Build Examples

### 1. Lightning Arrow Deadeye

**Character Level:** 85  
**Class:** Ranger - Deadeye  
**Main Skill:** Lightning Arrow

**Strengths:**
- High projectile damage
- Excellent clear speed
- Strong scaling with gear

**Weaknesses:**
- Low chaos resistance
- Vulnerable to one-shots
- Requires good positioning

**Required Items:**
- +2 arrow quiver
- High physical damage bow
- Crit multiplier jewelry

**Budget:** ~500 Divine Orbs

### 2. Righteous Fire Juggernaut

**Character Level:** 90  
**Class:** Marauder - Juggernaut  
**Main Skill:** Righteous Fire

**Strengths:**
- Extremely tanky
- Consistent damage
- Easy to play

**Weaknesses:**
- Lower damage ceiling
- Slower clear speed
- Expensive to optimize

**Required Items:**
- High life regeneration items
- Fire damage over time multiplier
- Maximum resistance gear

**Budget:** ~800 Divine Orbs

### 3. Spark Inquisitor

**Character Level:** 88  
**Class:** Templar - Inquisitor  
**Main Skill:** Spark

**Strengths:**
- High clear speed
- Strong single target
- Good defensive layers

**Weaknesses:**
- Projectile collision issues
- Requires specific gear
- Mana management

**Required Items:**
- +2 spark projectile amulet
- High spell damage wand
- Crit chance/multiplier

**Budget:** ~400 Divine Orbs

## Using These Examples

### With AI Assistant

Ask your AI assistant (with MCP servers configured):

```
"Analyze the Lightning Arrow Deadeye build and suggest optimizations"
"What's the current market price for items needed for Righteous Fire?"
"Compare the Spark Inquisitor build with top ladder players"
```

### With Scripts

```bash
# Check if build configuration is valid
npm run check-config

# Analyze a specific build
npm run analyze
```

## Build Template

Create your own build using this template:

```json
{
  "name": "Your Build Name",
  "class": "Ascendancy Class",
  "level": 85,
  "mainSkill": "Primary Skill",
  "defense": {
    "life": 4000,
    "es": 0,
    "armor": 10000,
    "evasion": 0,
    "block": 0
  },
  "offense": {
    "dps": 1000000,
    "critChance": 50,
    "critMultiplier": 300
  },
  "resistances": {
    "fire": 75,
    "cold": 75,
    "lightning": 75,
    "chaos": -60
  },
  "budget": "500 Divine Orbs"
}
```

## Resources

- [poe.ninja](https://poe.ninja) - Character builds and item prices
- [Path of Building](https://github.com/PathOfBuildingCommunity/PathOfBuilding) - Build planner
- [POE Wiki](https://www.poewiki.net/) - Game mechanics reference
