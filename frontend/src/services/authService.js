import { mockAuthService } from './mockService';
import { STORAGE_KEYS } from '../utils/constants';

// Toggle this to switch between mock and real API
const USE_MOCK_API = true;

const authService = {
  /**
   * Login user
   */
  login: async (email, password) => {
    if (USE_MOCK_API) {
      const result = await mockAuthService.login(email, password);
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, result.token);
      localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(result.user));
      return result;
    }
    // Real API implementation would go here
    throw new Error('Real API not implemented yet');
  },

  /**
   * Register new user
   */
  register: async (username, email, password) => {
    if (USE_MOCK_API) {
      const result = await mockAuthService.register(username, email, password);
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, result.token);
      localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(result.user));
      return result;
    }
    // Real API implementation would go here
    throw new Error('Real API not implemented yet');
  },

  /**
   * Logout user
   */
  logout: async () => {
    if (USE_MOCK_API) {
      await mockAuthService.logout();
      localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
      localStorage.removeItem(STORAGE_KEYS.USER_DATA);
      return { success: true };
    }
    // Real API implementation would go here
    throw new Error('Real API not implemented yet');
  },

  /**
   * Get current user
   */
  getCurrentUser: async () => {
    const userData = localStorage.getItem(STORAGE_KEYS.USER_DATA);
    if (!userData) {
      throw new Error('Not authenticated');
    }
    return JSON.parse(userData);
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated: () => {
    return !!localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  /**
   * Get auth token
   */
  getToken: () => {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  }
};

export default authService;
