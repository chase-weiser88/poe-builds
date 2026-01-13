// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
export const MCP_OPTIMIZER_URL = import.meta.env.VITE_MCP_OPTIMIZER_URL || 'http://localhost:3001';
export const MCP_SCOUT_URL = import.meta.env.VITE_MCP_SCOUT_URL || 'http://localhost:3002';

// Character Classes
export const CHARACTER_CLASSES = [
  { id: 'warrior', name: 'Warrior', color: '#DC2626' },
  { id: 'ranger', name: 'Ranger', color: '#16A34A' },
  { id: 'witch', name: 'Witch', color: '#7C3AED' },
  { id: 'duelist', name: 'Duelist', color: '#EA580C' },
  { id: 'templar', name: 'Templar', color: '#CA8A04' },
  { id: 'shadow', name: 'Shadow', color: '#4338CA' },
  { id: 'scion', name: 'Scion', color: '#FFFFFF' }
];

// Ascendancy Classes
export const ASCENDANCIES = {
  warrior: ['Juggernaut', 'Berserker', 'Chieftain'],
  ranger: ['Deadeye', 'Raider', 'Pathfinder'],
  witch: ['Necromancer', 'Elementalist', 'Occultist'],
  duelist: ['Slayer', 'Gladiator', 'Champion'],
  templar: ['Inquisitor', 'Hierophant', 'Guardian'],
  shadow: ['Assassin', 'Trickster', 'Saboteur'],
  scion: ['Ascendant']
};

// Item Slots
export const ITEM_SLOTS = [
  'weapon',
  'offhand',
  'helmet',
  'chest',
  'gloves',
  'boots',
  'belt',
  'amulet',
  'ring1',
  'ring2'
];

// Build Tags
export const BUILD_TAGS = [
  'Beginner Friendly',
  'League Starter',
  'Boss Killer',
  'Mapper',
  'Budget',
  'Hardcore Viable',
  'SSF Viable',
  'End Game',
  'Fast Clear',
  'Tanky',
  'High DPS',
  'Summoner',
  'Melee',
  'Ranged',
  'Spell Caster'
];

// Sort Options
export const SORT_OPTIONS = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'recent', label: 'Most Recent' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'dps', label: 'Highest DPS' },
  { value: 'budget-low', label: 'Lowest Budget' },
  { value: 'budget-high', label: 'Highest Budget' }
];

// Pagination
export const BUILDS_PER_PAGE = 12;

// Validation Rules
export const VALIDATION_RULES = {
  BUILD_NAME_MIN_LENGTH: 3,
  BUILD_NAME_MAX_LENGTH: 100,
  DESCRIPTION_MIN_LENGTH: 10,
  DESCRIPTION_MAX_LENGTH: 2000,
  MIN_LEVEL: 1,
  MAX_LEVEL: 100
};

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'poe_auth_token',
  USER_DATA: 'poe_user_data',
  THEME: 'poe_theme',
  RECENT_BUILDS: 'poe_recent_builds'
};

// API Endpoints
export const ENDPOINTS = {
  AUTH: {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    ME: '/auth/me'
  },
  BUILDS: {
    LIST: '/builds',
    DETAIL: (id) => `/builds/${id}`,
    CREATE: '/builds',
    UPDATE: (id) => `/builds/${id}`,
    DELETE: (id) => `/builds/${id}`,
    COMMENTS: (id) => `/builds/${id}/comments`,
    RATING: (id) => `/builds/${id}/rating`,
    IMPORT_POB: '/builds/import/pob',
    EXPORT_POB: (id) => `/builds/${id}/export/pob`
  },
  USERS: {
    PROFILE: (id) => `/users/${id}`,
    BUILDS: (id) => `/users/${id}/builds`,
    UPDATE: (id) => `/users/${id}`
  },
  MCP: {
    CHARACTER: (name) => `/mcp/character/${name}`,
    MARKET: (item) => `/mcp/market/${item}`,
    LADDER: (cls) => `/mcp/ladder/${cls}`
  }
};
