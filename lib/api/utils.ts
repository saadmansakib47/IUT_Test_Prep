// Helper function to map subject codes to full names
export function getSubjectName(code: string): string {
  const subjectMap: { [key: string]: string } = {
    phy: 'Physics',
    chem: 'Chemistry',
    math: 'Mathematics',
    eng: 'English',
  };
  return subjectMap[code] || code;
}

// Helper function to format duration
export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours > 0) {
    return `${hours} hr${mins > 0 ? ` ${mins} min` : ''}`;
  }
  return `${mins} min`;
}
