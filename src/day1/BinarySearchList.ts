export default function binary_fn(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length - 1;

    do {
        let mid = Math.floor(low + (high - low) / 2);
        if (haystack[mid] === needle) return true;
        if (haystack[mid] > needle) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    } while (low < high);
    return false;
}
