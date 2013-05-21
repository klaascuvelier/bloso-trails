'use strict';

describe('service', function () {

    describe('bloso', function () {

        it('should be a service', inject(function ($bloso) {
            expect($bloso).not.toEqual(null);
        }));

        it('should fail', inject(function ($bloso) {
            expect(true).toEqual(false);
        }));

/*
        it('should have classes as items', inject(function($list) {

            // create fake class
            window.TestClass = function TestClass(data) {
                angular.extend(this, data)
            };

            // set some items
            $list.setItemClassName('TestClass');
            $list.setItems([{'a':'b'}, {'c':'d'}]);

            // get first Item and check class
            var item = $list.getItems()[0];


            expect(item.constructor.toString().substr(9, 9)).toEqual('TestClass');
        }));
*/

    });


});