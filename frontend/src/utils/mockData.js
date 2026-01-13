// Mock build data for testing and development
export const mockBuilds = [
  {
    id: '1',
    name: 'Lightning Arrow Deadeye',
    class: 'ranger',
    ascendancy: 'Deadeye',
    level: 95,
    mainSkill: 'Lightning Arrow',
    description: 'Fast mapping build with excellent clear speed. Great for farming currency in early-mid league. Scales well with investment but works on a budget.',
    author: 'ExileBuilder',
    authorId: 'user1',
    createdAt: '2025-12-15T10:30:00Z',
    updatedAt: '2025-12-20T14:20:00Z',
    version: '3.23',
    budget: 15,
    defense: {
      life: 4200,
      energyShield: 0,
      armor: 2500,
      evasion: 25000,
      block: 0
    },
    offense: {
      dps: 2500000,
      critChance: 65,
      critMultiplier: 320,
      attackSpeed: 2.1
    },
    resistances: {
      fire: 75,
      cold: 75,
      lightning: 75,
      chaos: -20
    },
    skills: [
      {
        name: 'Lightning Arrow',
        gems: ['Lightning Arrow', 'Mirage Archer', 'Elemental Damage with Attacks', 'Inspiration', 'Added Lightning Damage', 'Increased Critical Strikes'],
        links: 6
      },
      {
        name: 'Tornado',
        gems: ['Tornado', 'Focused Ballista', 'Ballista Totem', 'Multiple Totems'],
        links: 4
      }
    ],
    items: {
      weapon: { name: 'The Tempest', type: 'Bow' },
      helmet: { name: 'Rare Evasion Helmet', type: 'Helmet' },
      chest: { name: 'Rare Evasion Chest', type: 'Body Armour' },
      gloves: { name: 'Rare Evasion Gloves', type: 'Gloves' },
      boots: { name: 'Rare Evasion Boots', type: 'Boots' },
      belt: { name: 'Rare Stygian Vise', type: 'Belt' },
      amulet: { name: 'Rare Amulet', type: 'Amulet' },
      ring1: { name: 'Rare Ring', type: 'Ring' },
      ring2: { name: 'Rare Ring', type: 'Ring' }
    },
    passiveTree: 'eNqVVt1u2zAM...',
    pobCode: 'eNqVVt1u2zAM/ZWAe0kMWZIlBdgLhmHYwwYM2MvQByeWYwW15MpyshbFfn0k2U6cNMDQF0ui7uHhPbySKDMw...',
    rating: {
      average: 4.5,
      count: 142
    },
    tags: ['Mapper', 'Fast Clear', 'League Starter', 'Ranged'],
    isPublic: true
  },
  {
    id: '2',
    name: 'Righteous Fire Juggernaut',
    class: 'warrior',
    ascendancy: 'Juggernaut',
    level: 92,
    mainSkill: 'Righteous Fire',
    description: 'Tanky RF build focusing on high life regeneration and fire damage over time. Excellent for bossing and can handle most content with ease. Requires some investment to feel good.',
    author: 'RFMaster',
    authorId: 'user2',
    createdAt: '2025-12-10T08:15:00Z',
    updatedAt: '2025-12-18T16:40:00Z',
    version: '3.23',
    budget: 25,
    defense: {
      life: 8500,
      energyShield: 0,
      armor: 45000,
      evasion: 0,
      block: 12
    },
    offense: {
      dps: 800000,
      critChance: 0,
      critMultiplier: 0,
      attackSpeed: 0
    },
    resistances: {
      fire: 85,
      cold: 75,
      lightning: 75,
      chaos: 20
    },
    skills: [
      {
        name: 'Righteous Fire',
        gems: ['Righteous Fire', 'Elemental Focus', 'Burning Damage', 'Concentrated Effect'],
        links: 4
      },
      {
        name: 'Fire Trap',
        gems: ['Fire Trap', 'Burning Damage', 'Elemental Focus', 'Swift Affliction'],
        links: 4
      }
    ],
    items: {
      weapon: { name: 'Sceptre with +fire gems', type: 'Sceptre' },
      offhand: { name: 'Rare Shield', type: 'Shield' },
      helmet: { name: 'Rare Helmet with life regen', type: 'Helmet' },
      chest: { name: 'Rare Armour Chest', type: 'Body Armour' },
      gloves: { name: 'Rare Armour Gloves', type: 'Gloves' },
      boots: { name: 'Rare Armour Boots', type: 'Boots' },
      belt: { name: 'Rare Belt', type: 'Belt' },
      amulet: { name: 'Rare Amulet', type: 'Amulet' },
      ring1: { name: 'Rare Ring', type: 'Ring' },
      ring2: { name: 'Rare Ring', type: 'Ring' }
    },
    passiveTree: 'eNqVVt1u2zAM...',
    pobCode: 'eNqVVt1u2zAM/ZWAe0kMWZIlBdgLhmHYwwYM2MvQByeWYwW15MpyshbFfn0k2U6cNMDQF0ui7uHhPbySKDMw...',
    rating: {
      average: 4.7,
      count: 98
    },
    tags: ['Boss Killer', 'Tanky', 'Hardcore Viable', 'Melee'],
    isPublic: true
  },
  {
    id: '3',
    name: 'Arc Witch Starter',
    class: 'witch',
    ascendancy: 'Elementalist',
    level: 85,
    mainSkill: 'Arc',
    description: 'Budget-friendly league starter that transitions well into endgame. Great for new players. Can clear all content with investment.',
    author: 'CasterMain',
    authorId: 'user3',
    createdAt: '2026-01-01T12:00:00Z',
    updatedAt: '2026-01-05T09:30:00Z',
    version: '3.23',
    budget: 3,
    defense: {
      life: 3500,
      energyShield: 1200,
      armor: 1000,
      evasion: 3000,
      block: 0
    },
    offense: {
      dps: 500000,
      critChance: 35,
      critMultiplier: 250,
      attackSpeed: 0
    },
    resistances: {
      fire: 75,
      cold: 75,
      lightning: 76,
      chaos: -30
    },
    skills: [
      {
        name: 'Arc',
        gems: ['Arc', 'Spell Echo', 'Controlled Destruction', 'Lightning Penetration', 'Added Lightning Damage', 'Increased Critical Strikes'],
        links: 6
      }
    ],
    items: {
      weapon: { name: 'Rare Wand', type: 'Wand' },
      offhand: { name: 'Rare Shield', type: 'Shield' },
      helmet: { name: 'Rare Helmet', type: 'Helmet' },
      chest: { name: 'Tabula Rasa', type: 'Body Armour' },
      gloves: { name: 'Rare Gloves', type: 'Gloves' },
      boots: { name: 'Rare Boots', type: 'Boots' },
      belt: { name: 'Rare Belt', type: 'Belt' },
      amulet: { name: 'Rare Amulet', type: 'Amulet' },
      ring1: { name: 'Rare Ring', type: 'Ring' },
      ring2: { name: 'Rare Ring', type: 'Ring' }
    },
    passiveTree: 'eNqVVt1u2zAM...',
    pobCode: 'eNqVVt1u2zAM/ZWAe0kMWZIlBdgLhmHYwwYM2MvQByeWYwW15MpyshbFfn0k2U6cNMDQF0ui7uHhPbySKDMw...',
    rating: {
      average: 4.3,
      count: 256
    },
    tags: ['League Starter', 'Budget', 'Beginner Friendly', 'Spell Caster'],
    isPublic: true
  },
  {
    id: '4',
    name: 'Cyclone Slayer',
    class: 'duelist',
    ascendancy: 'Slayer',
    level: 90,
    mainSkill: 'Cyclone',
    description: 'Classic melee spinner. Good life leech and AoE. Comfortable mapping and bossing experience.',
    author: 'MeleeWarrior',
    authorId: 'user4',
    createdAt: '2025-12-22T15:45:00Z',
    updatedAt: '2025-12-28T11:20:00Z',
    version: '3.23',
    budget: 12,
    defense: {
      life: 5500,
      energyShield: 0,
      armor: 15000,
      evasion: 5000,
      block: 25
    },
    offense: {
      dps: 3000000,
      critChance: 45,
      critMultiplier: 280,
      attackSpeed: 8.5
    },
    resistances: {
      fire: 75,
      cold: 75,
      lightning: 75,
      chaos: -10
    },
    skills: [
      {
        name: 'Cyclone',
        gems: ['Cyclone', 'Melee Physical Damage', 'Brutality', 'Impale', 'Fortify', 'Infused Channelling'],
        links: 6
      }
    ],
    items: {
      weapon: { name: 'Rare Two-Handed Sword', type: 'Two Hand Sword' },
      helmet: { name: 'Rare Helmet', type: 'Helmet' },
      chest: { name: 'Rare Armour Chest', type: 'Body Armour' },
      gloves: { name: 'Rare Gloves', type: 'Gloves' },
      boots: { name: 'Rare Boots', type: 'Boots' },
      belt: { name: 'Rare Belt', type: 'Belt' },
      amulet: { name: 'Rare Amulet', type: 'Amulet' },
      ring1: { name: 'Rare Ring', type: 'Ring' },
      ring2: { name: 'Rare Ring', type: 'Ring' }
    },
    passiveTree: 'eNqVVt1u2zAM...',
    pobCode: 'eNqVVt1u2zAM/ZWAe0kMWZIlBdgLhmHYwwYM2MvQByeWYwW15MpyshbFfn0k2U6cNMDQF0ui7uHhPbySKDMw...',
    rating: {
      average: 4.6,
      count: 187
    },
    tags: ['Melee', 'Mapper', 'Boss Killer'],
    isPublic: true
  }
];

export const mockUsers = [
  {
    id: 'user1',
    username: 'ExileBuilder',
    email: 'exile@example.com',
    createdAt: '2024-06-01T10:00:00Z',
    buildsCount: 12,
    avatar: null
  },
  {
    id: 'user2',
    username: 'RFMaster',
    email: 'rf@example.com',
    createdAt: '2024-08-15T14:30:00Z',
    buildsCount: 8,
    avatar: null
  },
  {
    id: 'user3',
    username: 'CasterMain',
    email: 'caster@example.com',
    createdAt: '2024-09-20T09:15:00Z',
    buildsCount: 15,
    avatar: null
  },
  {
    id: 'user4',
    username: 'MeleeWarrior',
    email: 'melee@example.com',
    createdAt: '2024-11-05T16:45:00Z',
    buildsCount: 6,
    avatar: null
  }
];

export const mockComments = [
  {
    id: 'c1',
    buildId: '1',
    userId: 'user2',
    username: 'RFMaster',
    content: 'Great build guide! I used this as my league starter and it worked perfectly. The budget version got me through white maps easily.',
    createdAt: '2025-12-16T14:20:00Z',
    upvotes: 24,
    downvotes: 2,
    replies: [
      {
        id: 'c1-r1',
        userId: 'user1',
        username: 'ExileBuilder',
        content: 'Thanks! Glad it helped you. Make sure to upgrade to a better bow when you can afford it.',
        createdAt: '2025-12-16T15:10:00Z'
      }
    ]
  },
  {
    id: 'c2',
    buildId: '1',
    userId: 'user3',
    username: 'CasterMain',
    content: 'How does this compare to the Ice Shot version? Thinking about switching.',
    createdAt: '2025-12-18T10:30:00Z',
    upvotes: 8,
    downvotes: 1,
    replies: []
  }
];

export const mockRatings = [
  { buildId: '1', userId: 'user2', value: 5 },
  { buildId: '1', userId: 'user3', value: 4 },
  { buildId: '2', userId: 'user1', value: 5 },
  { buildId: '2', userId: 'user3', value: 5 },
  { buildId: '3', userId: 'user1', value: 4 },
  { buildId: '3', userId: 'user4', value: 4 },
  { buildId: '4', userId: 'user2', value: 5 },
  { buildId: '4', userId: 'user3', value: 4 }
];
