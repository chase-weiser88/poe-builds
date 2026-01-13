import { mockBuilds, mockComments, mockRatings, mockUsers } from '../utils/mockData';

// Simulate API delay
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// Mock state
let builds = [...mockBuilds];
let comments = [...mockComments];
let ratings = [...mockRatings];
let users = [...mockUsers];
let currentUser = null;

// Authentication
export const mockAuthService = {
  login: async (email, password) => {
    await delay();
    const user = users.find(u => u.email === email);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    currentUser = user;
    return {
      token: 'mock-jwt-token-' + user.id,
      user
    };
  },

  register: async (username, email, password) => {
    await delay();
    if (users.find(u => u.email === email)) {
      throw new Error('Email already exists');
    }
    const newUser = {
      id: 'user' + (users.length + 1),
      username,
      email,
      createdAt: new Date().toISOString(),
      buildsCount: 0,
      avatar: null
    };
    users.push(newUser);
    currentUser = newUser;
    return {
      token: 'mock-jwt-token-' + newUser.id,
      user: newUser
    };
  },

  logout: async () => {
    await delay(200);
    currentUser = null;
    return { success: true };
  },

  getCurrentUser: async () => {
    await delay(300);
    if (!currentUser) {
      throw new Error('Not authenticated');
    }
    return currentUser;
  }
};

// Build Service
export const mockBuildService = {
  getBuilds: async (filters = {}) => {
    await delay();
    let filteredBuilds = [...builds];

    // Apply filters
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filteredBuilds = filteredBuilds.filter(b =>
        b.name.toLowerCase().includes(searchLower) ||
        b.mainSkill.toLowerCase().includes(searchLower) ||
        b.author.toLowerCase().includes(searchLower)
      );
    }

    if (filters.class) {
      filteredBuilds = filteredBuilds.filter(b => b.class === filters.class);
    }

    if (filters.ascendancy) {
      filteredBuilds = filteredBuilds.filter(b => b.ascendancy === filters.ascendancy);
    }

    if (filters.minBudget !== undefined) {
      filteredBuilds = filteredBuilds.filter(b => b.budget >= filters.minBudget);
    }

    if (filters.maxBudget !== undefined) {
      filteredBuilds = filteredBuilds.filter(b => b.budget <= filters.maxBudget);
    }

    if (filters.tags && filters.tags.length > 0) {
      filteredBuilds = filteredBuilds.filter(b =>
        filters.tags.some(tag => b.tags.includes(tag))
      );
    }

    // Apply sorting
    if (filters.sort === 'recent') {
      filteredBuilds.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (filters.sort === 'rating') {
      filteredBuilds.sort((a, b) => b.rating.average - a.rating.average);
    } else if (filters.sort === 'dps') {
      filteredBuilds.sort((a, b) => b.offense.dps - a.offense.dps);
    } else if (filters.sort === 'budget-low') {
      filteredBuilds.sort((a, b) => a.budget - b.budget);
    } else if (filters.sort === 'budget-high') {
      filteredBuilds.sort((a, b) => b.budget - a.budget);
    } else {
      // Default: popular (by rating count)
      filteredBuilds.sort((a, b) => b.rating.count - a.rating.count);
    }

    // Apply pagination
    const page = filters.page || 1;
    const perPage = filters.perPage || 12;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const paginatedBuilds = filteredBuilds.slice(start, end);

    return {
      builds: paginatedBuilds,
      total: filteredBuilds.length,
      page,
      perPage,
      totalPages: Math.ceil(filteredBuilds.length / perPage)
    };
  },

  getBuildById: async (id) => {
    await delay();
    const build = builds.find(b => b.id === id);
    if (!build) {
      throw new Error('Build not found');
    }
    return build;
  },

  createBuild: async (buildData) => {
    await delay();
    if (!currentUser) {
      throw new Error('Not authenticated');
    }
    const newBuild = {
      ...buildData,
      id: 'build' + (builds.length + 1),
      author: currentUser.username,
      authorId: currentUser.id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      rating: { average: 0, count: 0 },
      isPublic: buildData.isPublic !== false
    };
    builds.push(newBuild);
    return newBuild;
  },

  updateBuild: async (id, buildData) => {
    await delay();
    const index = builds.findIndex(b => b.id === id);
    if (index === -1) {
      throw new Error('Build not found');
    }
    builds[index] = {
      ...builds[index],
      ...buildData,
      updatedAt: new Date().toISOString()
    };
    return builds[index];
  },

  deleteBuild: async (id) => {
    await delay();
    const index = builds.findIndex(b => b.id === id);
    if (index === -1) {
      throw new Error('Build not found');
    }
    builds.splice(index, 1);
    return { success: true };
  },

  importFromPOB: async (pobCode) => {
    await delay(800);
    // Simulate POB parsing
    return {
      name: 'Imported Build',
      class: 'ranger',
      level: 90,
      mainSkill: 'Lightning Arrow',
      description: 'Imported from Path of Building',
      budget: 10,
      defense: { life: 4000, energyShield: 0, armor: 3000, evasion: 20000, block: 0 },
      offense: { dps: 1500000, critChance: 50, critMultiplier: 300, attackSpeed: 2.0 },
      resistances: { fire: 75, cold: 75, lightning: 75, chaos: -20 },
      skills: [],
      items: {},
      passiveTree: pobCode,
      pobCode,
      tags: []
    };
  },

  exportToPOB: async (buildId) => {
    await delay(500);
    const build = builds.find(b => b.id === buildId);
    if (!build) {
      throw new Error('Build not found');
    }
    return build.pobCode || 'eNqVVt1u2zAM...';
  }
};

// Comments Service
export const mockCommentService = {
  getComments: async (buildId) => {
    await delay();
    return comments.filter(c => c.buildId === buildId);
  },

  addComment: async (buildId, content) => {
    await delay();
    if (!currentUser) {
      throw new Error('Not authenticated');
    }
    const newComment = {
      id: 'c' + (comments.length + 1),
      buildId,
      userId: currentUser.id,
      username: currentUser.username,
      content,
      createdAt: new Date().toISOString(),
      upvotes: 0,
      downvotes: 0,
      replies: []
    };
    comments.push(newComment);
    return newComment;
  },

  deleteComment: async (commentId) => {
    await delay();
    const index = comments.findIndex(c => c.id === commentId);
    if (index === -1) {
      throw new Error('Comment not found');
    }
    comments.splice(index, 1);
    return { success: true };
  }
};

// Rating Service
export const mockRatingService = {
  rateBuild: async (buildId, value) => {
    await delay();
    if (!currentUser) {
      throw new Error('Not authenticated');
    }
    const existingRating = ratings.find(r => r.buildId === buildId && r.userId === currentUser.id);
    if (existingRating) {
      existingRating.value = value;
    } else {
      ratings.push({ buildId, userId: currentUser.id, value });
    }
    
    // Update build rating
    const build = builds.find(b => b.id === buildId);
    if (build) {
      const buildRatings = ratings.filter(r => r.buildId === buildId);
      const sum = buildRatings.reduce((acc, r) => acc + r.value, 0);
      build.rating = {
        average: parseFloat((sum / buildRatings.length).toFixed(1)),
        count: buildRatings.length
      };
    }
    
    return { success: true };
  },

  getUserRating: async (buildId) => {
    await delay(200);
    if (!currentUser) return null;
    const rating = ratings.find(r => r.buildId === buildId && r.userId === currentUser.id);
    return rating ? rating.value : null;
  }
};

// User Service
export const mockUserService = {
  getUserProfile: async (userId) => {
    await delay();
    const user = users.find(u => u.id === userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  },

  getUserBuilds: async (userId) => {
    await delay();
    return builds.filter(b => b.authorId === userId);
  },

  updateProfile: async (userId, data) => {
    await delay();
    const user = users.find(u => u.id === userId);
    if (!user) {
      throw new Error('User not found');
    }
    Object.assign(user, data);
    if (currentUser && currentUser.id === userId) {
      Object.assign(currentUser, data);
    }
    return user;
  }
};

// MCP Service (stub for now)
export const mockMCPService = {
  getCharacter: async (name) => {
    await delay(600);
    return {
      name,
      class: 'ranger',
      level: 95,
      league: 'Settlers'
    };
  },

  getMarketData: async (item) => {
    await delay(600);
    return {
      item,
      price: 15.5,
      confidence: 'high',
      count: 234
    };
  },

  getLadderData: async (className) => {
    await delay(600);
    return {
      class: className,
      topBuilds: []
    };
  }
};
