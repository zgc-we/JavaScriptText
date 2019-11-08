// -------------------javascript 快速排序手写---------------------- //
// 参考地址： https://juejin.im/post/5bc5ae876fb9a05d2b6de81d
function quickSort2(arr, begin, end) {
    if(begin > end) return;
    var leader = arr[begin];
    var left = begin;
    var right = end;
    while (left  < right){
        while (left < right) {
            if (arr[left] < leader){
                arr[left] = arr[right]
                left += 1;
                break;
            } else {
                right -= 1;
            }
        }
        while (left < right) {
            if (arr[left] > leader) {
                arr[right] = arr[left];
                right -= -1;
                break;
            } else {
                left += 1
            }
        }
    }
    arr[left] = leader;
    quickSort2(arr, begin, left - 1);
    quickSort2(arr, left + 1, end);
}

quickSort2(arr, 0, arr.length - 1);