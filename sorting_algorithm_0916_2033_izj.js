// 代码生成时间: 2025-09-16 20:33:15
(function($) {
    "use strict";

    // Define the SortingAlgorithm object
    var SortingAlgorithm = {

        /**
         * Bubble Sort method.
         *
         * @param {Array} arr - The array to be sorted.
         * @returns {Array} - The sorted array.
         */
        bubbleSort: function(arr) {
            if (!Array.isArray(arr)) {
                throw new Error("Input must be an array");
            }
            let len = arr.length, swapped;
            do {
                swapped = false;
                for (let i = 0; i < len - 1; i++) {
                    if (arr[i] > arr[i + 1]) {
                        // Swap elements
                        let temp = arr[i];
                        arr[i] = arr[i + 1];
                        arr[i + 1] = temp;
                        swapped = true;
                    }
                }
            } while (swapped);
            return arr;
        },

        /**
         * Quick Sort method.
         *
         * @param {Array} arr - The array to be sorted.
         * @returns {Array} - The sorted array.
         */
        quickSort: function(arr) {
            if (!Array.isArray(arr)) {
                throw new Error("Input must be an array");
            }
            if (arr.length <= 1) {
                return arr;
            }
            let pivotIndex = Math.floor(arr.length / 2);
            let pivot = arr.splice(pivotIndex, 1)[0];
            let left = [];
            let right = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] < pivot) {
                    left.push(arr[i]);
                } else {
                    right.push(arr[i]);
                }
            }
            return this.quickSort(left).concat([pivot], this.quickSort(right));
        },

        /**
         * Insertion Sort method.
         *
         * @param {Array} arr - The array to be sorted.
         * @returns {Array} - The sorted array.
         */
        insertionSort: function(arr) {
            if (!Array.isArray(arr)) {
                throw new Error("Input must be an array");
            }
            for (let i = 1; i < arr.length; i++) {
                let key = arr[i];
                let j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j--;
                }
                arr[j + 1] = key;
            }
            return arr;
        },

        /**
         * Selection Sort method.
         *
         * @param {Array} arr - The array to be sorted.
         * @returns {Array} - The sorted array.
         */
        selectionSort: function(arr) {
            if (!Array.isArray(arr)) {
                throw new Error("Input must be an array");
            }
            for (let i = 0; i < arr.length - 1; i++) {
                let minIndex = i;
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[j] < arr[minIndex]) {
                        minIndex = j;
                    }
                }
                if (minIndex !== i) {
                    let temp = arr[i];
                    arr[i] = arr[minIndex];
                    arr[minIndex] = temp;
                }
            }
            return arr;
        }
    };

    // Expose the SortingAlgorithm object to the global scope
    window.SortingAlgorithm = SortingAlgorithm;

})(jQuery);
