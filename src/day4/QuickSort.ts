export default function quick_sort(arr: number[]): void {
    const partition = (arr: number[], lo: number, hi: number): number => {
        const pivot = arr[hi];
        let idx = lo - 1;
        for (let i = lo; i < hi; ++i) {
            if (arr[i] <= pivot) {
                idx++;
                const temp = arr[i];
                arr[i] = arr[idx];
                arr[idx] = temp;
            }
        }
        idx++;
        arr[hi] = arr[idx];
        arr[idx] = pivot;
        return idx;
    };

    const qs = (arr: number[], lo: number, hi: number): void => {
        if (lo >= hi) {
            return;
        }
        let idx = partition(arr, lo, hi);
        qs(arr, lo, idx - 1);
        qs(arr, idx + 1, hi);
    };

    qs(arr, 0, arr.length - 1);
}
