export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const toSearch = [head];

  while (toSearch.length > 0) {
    let current = toSearch.shift() as BinaryNode<number>;
    if (current.value === needle) {
      return true;
    }

    if (current.left) {
      toSearch.push(current.left);
    }
    if (current.right) {
      toSearch.push(current.right);
    }
  }

  return false;
}
