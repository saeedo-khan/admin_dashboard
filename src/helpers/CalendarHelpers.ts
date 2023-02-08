export function inElement(point: { x: number, y: number }, element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const bottom = rect.bottom + window.scrollY;
    const left = rect.left + window.scrollX;
    const right = rect.right + window.scrollX;
  
    return point.x >= left && point.x <= right && point.y >= top && point.y <= bottom;
}