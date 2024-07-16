function merge(arr, beg, mid, end, maxele) {
     let i = beg;
        let j = mid + 1;
        let k = beg;
        while (i <= mid && j <= end) {
            
            if (arr[i] % maxele <= arr[j] % maxele) {
                arr[k] = arr[k] + (arr[i] % maxele) * maxele;
                k++;
                i++;
            } else {
                arr[k] = arr[k] + (arr[j] % maxele) * maxele;
                k++;
                j++;
            }
        }
        while (i <= mid) {
            arr[k] = arr[k] + (arr[i] % maxele) * maxele;
            k++;
            i++;
        }
        while (j <= end) {
            arr[k] = arr[k] + (arr[j] % maxele) * maxele;
            k++;
            j++;
        }
  
        // Obtaining actual values
        for (i = beg; i <= end; i++) {
            arr[i] = Math.floor(arr[i] / maxele);
        }
}

function mergeSortRec(arr, beg, end, maxele) {
    if(beg < end) {
        const mid = Math.floor((beg + end) / 2);
        mergeSortRec(arr, beg, mid, maxele);
        mergeSortRec(arr, mid + 1, end, maxele);
        merge(arr, beg, mid, end, maxele);
    }
};

function mergeSort(arr, beg, end) {
    const maxele = Math.max(...arr) + 1;
    mergeSortRec(arr, beg, end, maxele);
}

const unsortedArray = [999, 612, 589, 856, 56, 945, 243];
const len = unsortedArray.length;

mergeSort(unsortedArray, 0, len -1);
console.log("unsortedArray :", unsortedArray);
