export default function quick_sort(
    arr: number[],
    low: number = 0,
    hi: number = arr.length,
): void {
    if (hi <= low) {
        return;
    }
    const p = partition(arr, low, hi);

    quick_sort(arr, low, p);
    quick_sort(arr, p + 1, hi);
}

function partition(arr: number[], low: number, hi: number): number {
    let pivot = arr[hi - 1];
    let pivot_index = low;

    for (let i = low; i < hi - 1; i++) {
        if (arr[i] <= pivot) {
            const tmp = arr[pivot_index];
            arr[pivot_index] = arr[i];
            arr[i] = tmp;
            pivot_index++;
        }
    }

    pivot_index++;
    const tmp = arr[pivot_index];
    arr[pivot_index] = arr[hi - 1];
    arr[hi - 1] = tmp;

    return pivot_index;
}
