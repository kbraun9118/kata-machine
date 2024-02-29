export default function quick_sort(
    arr: number[],
    low: number = 0,
    hi: number = arr.length - 1,
): void {
    if (hi <= low) {
        return;
    }
    const p = partition(arr, low, hi);

    quick_sort(arr, low, p - 1);
    quick_sort(arr, p + 1, hi);
}

function partition(arr: number[], low: number, hi: number): number {
    let pivot = arr[hi];
    let pivot_index = low - 1;

    for (let i = low; i < hi; i++) {
        if (arr[i] <= pivot) {
            pivot_index++;
            const tmp = arr[pivot_index];
            arr[pivot_index] = arr[i];
            arr[i] = tmp;
        }
    }

    pivot_index++;
    arr[hi] = arr[pivot_index];
    arr[pivot_index] = pivot;

    return pivot_index;
}
