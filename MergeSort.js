var data = [12, 11, 13, 4, 9, 44, 10, 56];

function merge(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;

  var L = new Array(n1);
  var R = new Array(n2);

  // copy data into temp array L[] and R[]
  for(let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }

  for(let i = 0; i < n2; i++) {
    R[i] = arr[m + 1 + i];
  }

  let i = 0, j = 0;
  let k = l; // this should be `l`, not `j`

  while(i < n1 && j < n2) { // this should be `j` not `r`
    if(L[i] <= R[j]) { // to maintain stable sort, use `<=` instead of `<`
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // copying remaining elements of L[] & R[] if there are any
  while(i < n1) {
    arr[k] = L[i]; // this should be `arr`, not `a`
    i++;
    k++;
  }

  while(j < n2) {
    arr[k] = R[j]; // this should be `arr`, not `a`
    j++;
    k++;
  }
}

function mergeSort(arr, l, r) {
  if(l >= r) {
    return;
  }
  let m = l + Math.floor((r - l) / 2); // use `Math.floor` for integer division
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

mergeSort(data, 0, data.length - 1);
console.log("after sort :", data);
