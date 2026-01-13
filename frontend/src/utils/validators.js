import { z } from 'zod';
import { VALIDATION_RULES } from './constants';

/**
 * Validate email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 */
export const isStrongPassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

/**
 * Login Schema
 */
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required')
});

/**
 * Signup Schema
 */
export const signupSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword']
});

/**
 * Build Form Schema
 */
export const buildFormSchema = z.object({
  name: z.string()
    .min(VALIDATION_RULES.BUILD_NAME_MIN_LENGTH, `Build name must be at least ${VALIDATION_RULES.BUILD_NAME_MIN_LENGTH} characters`)
    .max(VALIDATION_RULES.BUILD_NAME_MAX_LENGTH, `Build name must be at most ${VALIDATION_RULES.BUILD_NAME_MAX_LENGTH} characters`),
  class: z.string().min(1, 'Class is required'),
  ascendancy: z.string().optional(),
  level: z.number()
    .min(VALIDATION_RULES.MIN_LEVEL, `Level must be at least ${VALIDATION_RULES.MIN_LEVEL}`)
    .max(VALIDATION_RULES.MAX_LEVEL, `Level must be at most ${VALIDATION_RULES.MAX_LEVEL}`),
  mainSkill: z.string().min(1, 'Main skill is required'),
  description: z.string()
    .min(VALIDATION_RULES.DESCRIPTION_MIN_LENGTH, `Description must be at least ${VALIDATION_RULES.DESCRIPTION_MIN_LENGTH} characters`)
    .max(VALIDATION_RULES.DESCRIPTION_MAX_LENGTH, `Description must be at most ${VALIDATION_RULES.DESCRIPTION_MAX_LENGTH} characters`),
  budget: z.number().min(0, 'Budget must be positive'),
  version: z.string().optional(),
  tags: z.array(z.string()).optional(),
  isPublic: z.boolean().optional()
});

/**
 * Comment Schema
 */
export const commentSchema = z.object({
  content: z.string().min(1, 'Comment cannot be empty').max(1000, 'Comment is too long')
});

/**
 * Rating Schema
 */
export const ratingSchema = z.object({
  value: z.number().min(1).max(5)
});

/**
 * POB Code validator
 */
export const isValidPOBCode = (code) => {
  if (!code || typeof code !== 'string') return false;
  // Basic validation - POB codes are base64 encoded
  const pobRegex = /^[A-Za-z0-9+/=]+$/;
  return pobRegex.test(code) && code.length > 50;
};

/**
 * Validate build data completeness
 */
export const validateBuildCompleteness = (build) => {
  const errors = [];
  
  if (!build.class) errors.push('Class is required');
  if (!build.mainSkill) errors.push('Main skill is required');
  if (!build.defense || !build.defense.life) errors.push('Defense stats are required');
  if (!build.offense || !build.offense.dps) errors.push('Offense stats are required');
  if (!build.resistances) errors.push('Resistances are required');
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Sanitize user input
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input.trim().replace(/[<>]/g, '');
};
