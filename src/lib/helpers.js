export function truncateName(name) {
  const CUT_OFF = 24;

  if (name.length > CUT_OFF) {
    return name.slice(0, CUT_OFF).trim() + "...";
  }
  return name;
}
