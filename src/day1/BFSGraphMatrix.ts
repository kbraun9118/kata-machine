export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const previous: number[] = new Array(graph.length).fill(-1);
    const seen: boolean[] = new Array(graph.length).fill(false);

    seen[source] = true;
    const queue = [source];

    while (queue.length !== 0) {
        const current = queue.shift() as number;
        if (current === needle) {
            break;
        }

        const adjs = graph[current];
        for (let i = 0; i < adjs.length; i++) {
            if (adjs[i] === 0 || seen[i]) {
                continue;
            }

            previous[i] = current;
            seen[i] = true;
            queue.push(i);
        }
    }

    if (previous[needle] === -1) {
        return null;
    }

    const path = [needle];
    let current = needle;

    while (previous[current] !== -1) {
        path.push(previous[current]);
        current = previous[current];
    }

    return path.reverse();
}
