// 代码生成时间: 2025-09-20 16:20:45
(function($) {

    // Define a namespace for our data model
    var DataModel = {
        // Private variables for storing data
        _data: [],

        // Public API for adding data
        addData: function(data) {
            if (!data || typeof data !== 'object') {
                throw new Error('Invalid data type. Data must be an object.');
            }
            this._data.push(data);
            return this;
        },

        // Public API for retrieving data
        getData: function() {
            return this._data;
        },

        // Public API for updating data
        updateData: function(index, newData) {
            if (index < 0 || index >= this._data.length || typeof newData !== 'object') {
                throw new Error('Invalid index or data type. Index must be within bounds and data must be an object.');
            }
            this._data[index] = newData;
            return this;
        },

        // Public API for removing data
        removeData: function(index) {
            if (index < 0 || index >= this._data.length) {
                throw new Error('Invalid index. Index must be within bounds.');
            }
            this._data.splice(index, 1);
            return this;
        },

        // Public API for clearing all data
        clearData: function() {
            this._data = [];
            return this;
        }
    };

    // Expose the DataModel to the global scope
    window.DataModel = DataModel;

}(jQuery));
