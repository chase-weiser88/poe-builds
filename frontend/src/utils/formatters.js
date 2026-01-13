import { format, formatDistanceToNow } from 'date-fns';

/**
 * Format a number with commas
 */
export const formatNumber = (num) => {
  if (num === undefined || num === null) return '0';
  return num.toLocaleString();
};

/**
 * Format currency (Divine Orbs)
 */
export const formatCurrency = (amount) => {
  if (amount === undefined || amount === null) return '0 div';
  if (amount < 1) {
    return `${(amount * 100).toFixed(0)}c`; // Convert to chaos orbs
  }
  return `${amount.toFixed(1)} div`;
};

/**
 * Format date
 */
export const formatDate = (date) => {
  if (!date) return '';
  return format(new Date(date), 'MMM dd, yyyy');
};

/**
 * Format relative time
 */
export const formatRelativeTime = (date) => {
  if (!date) return '';
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

/**
 * Format percentage
 */
export const formatPercentage = (value) => {
  if (value === undefined || value === null) return '0%';
  return `${value.toFixed(1)}%`;
};

/**
 * Format DPS
 */
export const formatDPS = (dps) => {
  if (!dps) return '0';
  if (dps >= 1000000) {
    return `${(dps / 1000000).toFixed(2)}M`;
  }
  if (dps >= 1000) {
    return `${(dps / 1000).toFixed(1)}K`;
  }
  return formatNumber(dps);
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Get initials from name
 */
export const getInitials = (name) => {
  if (!name) return '';
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

/**
 * Get color for resistance value
 */
export const getResistanceColor = (value) => {
  if (value >= 75) return 'text-green-500';
  if (value >= 50) return 'text-yellow-500';
  if (value >= 25) return 'text-orange-500';
  return 'text-red-500';
};

/**
 * Generate random color for avatar
 */
export const getRandomColor = () => {
  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

/**
 * Calculate build rating average
 */
export const calculateAverageRating = (ratings) => {
  if (!ratings || ratings.length === 0) return 0;
  const sum = ratings.reduce((acc, rating) => acc + rating.value, 0);
  return (sum / ratings.length).toFixed(1);
};

/**
 * Get build difficulty badge
 */
export const getBuildDifficulty = (budget, level) => {
  if (budget < 5 && level < 70) return { text: 'Beginner', color: 'bg-green-500' };
  if (budget < 20 && level < 85) return { text: 'Intermediate', color: 'bg-yellow-500' };
  return { text: 'Advanced', color: 'bg-red-500' };
};

/**
 * Format class name
 */
export const formatClassName = (className, ascendancy) => {
  if (!className) return '';
  if (ascendancy) return `${ascendancy} (${className})`;
  return className;
};
