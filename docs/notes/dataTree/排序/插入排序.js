function insertSort(array) {
  if (array.length <= 1) {
    return array
  }
  /* 
    right: 表示有序序列的边界，即需要插入的值
  */
  for (let right = 1; right < array.length; right++) {
    /* 
      j 表示有序序列的最右边，依次向左移动开始比较
      target: 表示需要插入的值，也是有序序列的边界值
    */
    let target = right
    for (let j = right - 1; j >= 0; j--) {
      if (array[j] > array[target]) {
        [array[j], array[target]] = [array[target], array[j]]
        /* 改变索引的值，继续进行比较 */
        target = j
      }
    }
  }
  console.log(array);
}
insertSort([1, 34, 23, 6, 2])
// [ 1, 2, 6, 23, 34 ]