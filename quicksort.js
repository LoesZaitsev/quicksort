/**
 * JavaScript Quicksort implementation
 * Pseudo code took from https://en.wikipedia.org/wiki/Quicksort
 **/
var Quicksort = function(array) {
	function quicksort(arr, lo, hi) {
		if( lo < hi ) {
			var p = partition(arr, lo, hi);
			quicksort(arr, lo, p - 1);
			quicksort(arr, p + 1, hi);
		} 
		return arr;
	}
	
	function partition(arr, lo, hi) {
		var pivot = arr[hi], i = lo;
		for( var j = lo; j < hi; j++ ) {
			if( arr[j] <= pivot ) {
				swap(arr, i, j);
				i = i + 1;              
			}
		}
		swap(arr, i, hi);
		return i;
	}
	
	function swap(arr, x, y) {
		var swapee = arr[x];
		arr[x] = arr[y];
		arr[y] = swapee;
	}
	
	function pivot(arr) {
      //No idea why setting pivot as middle don't work
	  //return (arr.length - (arr.length % 2)) / 2;
      return arr.length - 1;
	}
	
	return quicksort(array, 0, pivot(array));
};