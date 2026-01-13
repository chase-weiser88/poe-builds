import { mockBuildService, mockCommentService, mockRatingService } from './mockService';

// Toggle this to switch between mock and real API
const USE_MOCK_API = true;

const buildService = {
  /**
   * Get list of builds with filters
   */
  getBuilds: async (filters = {}) => {
    if (USE_MOCK_API) {
      return await mockBuildService.getBuilds(filters);
    }
    // Real API implementation would go here
    throw new Error('Real API not implemented yet');
  },

  /**
   * Get single build by ID
   */
  getBuildById: async (id) => {
    if (USE_MOCK_API) {
      return await mockBuildService.getBuildById(id);
    }
    // Real API implementation would go here
    throw new Error('Real API not implemented yet');
  },

  /**
   * Create new build
   */
  createBuild: async (buildData) => {
    if (USE_MOCK_API) {
      return await mockBuildService.createBuild(buildData);
    }
    // Real API implementation would go here
    throw new Error('Real API not implemented yet');
  },

  /**
   * Update existing build
   */
  updateBuild: async (id, buildData) => {
    if (USE_MOCK_API) {
      return await mockBuildService.updateBuild(id, buildData);
    }
    // Real API implementation would go here
    throw new Error('Real API not implemented yet');
  },

  /**
   * Delete build
   */
  deleteBuild: async (id) => {
    if (USE_MOCK_API) {
      return await mockBuildService.deleteBuild(id);
    }
    // Real API implementation would go here
    throw new Error('Real API not implemented yet');
  },

  /**
   * Import build from POB code
   */
  importFromPOB: async (pobCode) => {
    if (USE_MOCK_API) {
      return await mockBuildService.importFromPOB(pobCode);
    }
    // Real API implementation would go here
    throw new Error('Real API not implemented yet');
  },

  /**
   * Export build to POB format
   */
  exportToPOB: async (buildId) => {
    if (USE_MOCK_API) {
      return await mockBuildService.exportToPOB(buildId);
    }
    // Real API implementation would go here
    throw new Error('Real API not implemented yet');
  },

  /**
   * Get comments for a build
   */
  getComments: async (buildId) => {
    if (USE_MOCK_API) {
      return await mockCommentService.getComments(buildId);
    }
    // Real API implementation would go here
    throw new Error('Real API not implemented yet');
  },

  /**
   * Add comment to build
   */
  addComment: async (buildId, content) => {
    if (USE_MOCK_API) {
      return await mockCommentService.addComment(buildId, content);
    }
    // Real API implementation would go here
    throw new Error('Real API not implemented yet');
  },

  /**
   * Delete comment
   */
  deleteComment: async (commentId) => {
    if (USE_MOCK_API) {
      return await mockCommentService.deleteComment(commentId);
    }
    // Real API implementation would go here
    throw new Error('Real API not implemented yet');
  },

  /**
   * Rate a build
   */
  rateBuild: async (buildId, value) => {
    if (USE_MOCK_API) {
      return await mockRatingService.rateBuild(buildId, value);
    }
    // Real API implementation would go here
    throw new Error('Real API not implemented yet');
  },

  /**
   * Get user's rating for a build
   */
  getUserRating: async (buildId) => {
    if (USE_MOCK_API) {
      return await mockRatingService.getUserRating(buildId);
    }
    // Real API implementation would go here
    throw new Error('Real API not implemented yet');
  }
};

export default buildService;
