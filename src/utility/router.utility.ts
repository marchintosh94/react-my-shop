
export const isActive = (obj: { isActive: boolean }, activeClass?: string, stdClass?: string) => {
  return obj.isActive? (activeClass ?? '')  : (stdClass ?? '')
}