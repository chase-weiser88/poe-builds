/**
 * Calculate total effective life
 */
export const calculateEffectiveLife = (life, energyShield, armor, evasion) => {
  const lifeComponent = life || 0;
  const esComponent = energyShield || 0;
  const armorMultiplier = armor ? 1 + (armor / 10000) * 0.1 : 1;
  const evasionMultiplier = evasion ? 1 + (evasion / 10000) * 0.05 : 1;
  
  return Math.round((lifeComponent + esComponent) * armorMultiplier * evasionMultiplier);
};

/**
 * Calculate effective DPS with buffs
 */
export const calculateEffectiveDPS = (baseDPS, critChance, critMultiplier, attackSpeed) => {
  if (!baseDPS) return 0;
  
  const critChanceDecimal = (critChance || 0) / 100;
  const critMulti = critMultiplier || 1.5;
  const speedMulti = attackSpeed || 1.0;
  
  const critDPSMultiplier = 1 + (critChanceDecimal * (critMulti - 1));
  
  return Math.round(baseDPS * critDPSMultiplier * speedMulti);
};

/**
 * Calculate defense score (0-10)
 */
export const calculateDefenseScore = (defense) => {
  if (!defense) return 0;
  
  let score = 0;
  
  // Life/ES check (max 3 points)
  const totalHP = (defense.life || 0) + (defense.energyShield || 0);
  if (totalHP >= 5000) score += 3;
  else if (totalHP >= 4000) score += 2;
  else if (totalHP >= 3000) score += 1;
  
  // Armor/Evasion check (max 2 points)
  const physicalMitigation = (defense.armor || 0) + (defense.evasion || 0);
  if (physicalMitigation >= 20000) score += 2;
  else if (physicalMitigation >= 10000) score += 1;
  
  // Block check (max 2 points)
  if ((defense.block || 0) >= 50) score += 2;
  else if ((defense.block || 0) >= 30) score += 1;
  
  // Additional layers (max 3 points)
  const hasArmor = (defense.armor || 0) > 5000;
  const hasEvasion = (defense.evasion || 0) > 5000;
  const hasBlock = (defense.block || 0) > 20;
  const layers = [hasArmor, hasEvasion, hasBlock].filter(Boolean).length;
  score += layers;
  
  return Math.min(score, 10);
};

/**
 * Calculate offense score (0-10)
 */
export const calculateOffenseScore = (offense) => {
  if (!offense) return 0;
  
  let score = 0;
  
  // DPS check (max 5 points)
  const dps = offense.dps || 0;
  if (dps >= 5000000) score += 5;
  else if (dps >= 2000000) score += 4;
  else if (dps >= 1000000) score += 3;
  else if (dps >= 500000) score += 2;
  else if (dps >= 100000) score += 1;
  
  // Crit check (max 3 points)
  const critChance = offense.critChance || 0;
  const critMulti = offense.critMultiplier || 0;
  if (critChance >= 50 && critMulti >= 300) score += 3;
  else if (critChance >= 30 && critMulti >= 250) score += 2;
  else if (critChance >= 20 || critMulti >= 200) score += 1;
  
  // Attack speed (max 2 points)
  const attackSpeed = offense.attackSpeed || 0;
  if (attackSpeed >= 2.0) score += 2;
  else if (attackSpeed >= 1.5) score += 1;
  
  return Math.min(score, 10);
};

/**
 * Check if resistances are capped
 */
export const areResistancesCapped = (resistances) => {
  if (!resistances) return false;
  
  return (
    resistances.fire >= 75 &&
    resistances.cold >= 75 &&
    resistances.lightning >= 75
  );
};

/**
 * Calculate total build score
 */
export const calculateBuildScore = (build) => {
  if (!build) return 0;
  
  const defenseScore = calculateDefenseScore(build.defense);
  const offenseScore = calculateOffenseScore(build.offense);
  const resScore = areResistancesCapped(build.resistances) ? 10 : 5;
  
  // Weighted average: 30% defense, 40% offense, 30% resistances/other
  return Math.round((defenseScore * 0.3 + offenseScore * 0.4 + resScore * 0.3));
};

/**
 * Get build recommendations
 */
export const getBuildRecommendations = (build) => {
  const recommendations = [];
  
  if (!build) return recommendations;
  
  // Check defense
  const totalHP = (build.defense?.life || 0) + (build.defense?.energyShield || 0);
  if (totalHP < 3000) {
    recommendations.push({
      type: 'defense',
      priority: 'high',
      message: 'Your life pool is too low. Aim for at least 3000 combined life and ES.'
    });
  }
  
  // Check resistances
  if (!areResistancesCapped(build.resistances)) {
    recommendations.push({
      type: 'defense',
      priority: 'high',
      message: 'Your elemental resistances are not capped. Prioritize getting them to 75%.'
    });
  }
  
  if ((build.resistances?.chaos || 0) < 0) {
    recommendations.push({
      type: 'defense',
      priority: 'medium',
      message: 'Consider improving chaos resistance. Negative chaos res can be dangerous.'
    });
  }
  
  // Check offense
  if ((build.offense?.dps || 0) < 100000) {
    recommendations.push({
      type: 'offense',
      priority: 'medium',
      message: 'Your DPS seems low. Consider optimizing gem links and support gems.'
    });
  }
  
  // Check armor/evasion
  if ((build.defense?.armor || 0) < 5000 && (build.defense?.evasion || 0) < 5000) {
    recommendations.push({
      type: 'defense',
      priority: 'medium',
      message: 'Low physical mitigation. Consider adding armor or evasion.'
    });
  }
  
  return recommendations;
};

/**
 * Compare two builds and highlight differences
 */
export const compareBuilds = (build1, build2) => {
  return {
    defense: {
      life: {
        build1: build1.defense?.life || 0,
        build2: build2.defense?.life || 0,
        difference: (build1.defense?.life || 0) - (build2.defense?.life || 0),
        winner: (build1.defense?.life || 0) > (build2.defense?.life || 0) ? 1 : 2
      },
      energyShield: {
        build1: build1.defense?.energyShield || 0,
        build2: build2.defense?.energyShield || 0,
        difference: (build1.defense?.energyShield || 0) - (build2.defense?.energyShield || 0),
        winner: (build1.defense?.energyShield || 0) > (build2.defense?.energyShield || 0) ? 1 : 2
      },
      armor: {
        build1: build1.defense?.armor || 0,
        build2: build2.defense?.armor || 0,
        difference: (build1.defense?.armor || 0) - (build2.defense?.armor || 0),
        winner: (build1.defense?.armor || 0) > (build2.defense?.armor || 0) ? 1 : 2
      }
    },
    offense: {
      dps: {
        build1: build1.offense?.dps || 0,
        build2: build2.offense?.dps || 0,
        difference: (build1.offense?.dps || 0) - (build2.offense?.dps || 0),
        winner: (build1.offense?.dps || 0) > (build2.offense?.dps || 0) ? 1 : 2
      },
      critChance: {
        build1: build1.offense?.critChance || 0,
        build2: build2.offense?.critChance || 0,
        difference: (build1.offense?.critChance || 0) - (build2.offense?.critChance || 0),
        winner: (build1.offense?.critChance || 0) > (build2.offense?.critChance || 0) ? 1 : 2
      }
    },
    budget: {
      build1: build1.budget || 0,
      build2: build2.budget || 0,
      difference: (build1.budget || 0) - (build2.budget || 0),
      winner: (build1.budget || 0) < (build2.budget || 0) ? 1 : 2 // Lower is better for budget
    }
  };
};
