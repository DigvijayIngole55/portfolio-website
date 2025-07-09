export const getCurrentPacificTime = (): string => {
  const now = new Date();
  const pacificTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).format(now);
  return pacificTime;
};