export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    while (high > low) {
        let mid = low + Math.floor((high - low) / 2);

        if (haystack[mid] === needle) {
            return true;
        } else if (haystack[mid] < needle) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return false;
}
