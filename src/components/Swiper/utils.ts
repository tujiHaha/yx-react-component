export type TDirectionX = 'left' | 'right';

// 移动边界
export function moveBoundary(
  directionX: TDirectionX,
  activePageIndex: number,
  allPageLen: number
): boolean {
  // 最左不能向右移动
  if (directionX === 'right' && activePageIndex === 0) {
    return false;
  }
  // 最右不能向左移动
  if (directionX === 'left' && activePageIndex + 1 === allPageLen) {
    return false;
  }
  return true;
}

// 移动了多少页 每次移动最多只能一页
export function getMovePageCount(moveDis: number, pageWidth: number): number {
  const IDS_BOUNDARY = 10;
  const moveDisAbs = Math.abs(moveDis);
  const minDis = Math.min(moveDisAbs, pageWidth);
  if (minDis > IDS_BOUNDARY) {
    const pageCount = Math.ceil(minDis / pageWidth);
    return moveDis > 0 ? -pageCount : pageCount;
  }
  return 0;
}
