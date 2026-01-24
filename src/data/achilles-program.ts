// Re-export everything from the new programs file for backwards compatibility
export {
  achillesProgram,
  achillesTemplates,
  achillesStrengthStandards,
  calculateAdonisIndex,
  getAdonisRating,
  // Also export the other programs
  wolverineProgram,
  hopliteProgram,
  b3Program,
  allPrograms,
  getProgramById,
  getProgramsByGoal,
  getProgramsByDifficulty,
  getProgramsByEquipment,
  getProgramsByDaysPerWeek
} from './programs';
