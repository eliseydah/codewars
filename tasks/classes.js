class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    return this.collection.length;
    // returns the number of items within the entire collection
  }
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
    // returns the number of pages
  }
  pageItemCount(pageIndex) {
    let notFullPage = this.collection.length % this.itemsPerPage;
    if (pageIndex > this.pageCount() - 1 || pageIndex < 0) {
      return -1;
    }
    if (pageIndex === this.pageCount() - 1 && notFullPage) {
      return notFullPage;
    } else {
      return this.itemsPerPage;
    }
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
  }
  pageIndex(itemIndex) {
    if (itemIndex >= this.collection.length || itemIndex < 0) {
      return -1;
    } else {
      let counter = 0;
      for (let i = 0; i < this.collection.length; i += this.itemsPerPage) {
        if (i <= itemIndex && itemIndex < i + this.itemsPerPage) {
          return counter;
        }
        counter++;
      }
    }
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
  }
}
let foo = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
console.log(
  foo.itemCount(),
  foo.pageCount(),
  foo.pageItemCount(2),
  foo.pageIndex(-1)
);

// assert.deepEqual(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
// assert.deepEqual(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
// assert.deepEqual(sumDigPow(10, 100),  [89])
// assert.deepEqual(sumDigPow(90, 100), [])

//  let hundreds = Math.floor(i / 100);
//       let tens = Math.floor((i % 100) / 10); // Извлекаем десятки
//       let ones = i % 10; // Извлекаем единицы
//       let number =
//         Math.pow(hundreds, 1) + Math.pow(tens, 2) + Math.pow(ones, 3);
//       if (i === number) {
//         newArray.push(number);
//       }
