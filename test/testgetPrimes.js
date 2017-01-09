(function(){
  'use strict';
  var getPrimes = require("../app/librarygetPrimes.js");
  
  

   describe('Prime Numbers in a List: ', function () {

    describe('Return the prime number in the list in a new list follows `[]`', function () {

      it("should return [2, 3] for 3", function() {
       expect(getPrimes(3)).toEqual([2, 3]);
      });

      it("should return [2, 3, 5] for 5", function() {
       expect(getPrimes(5)).toEqual([2, 3, 5]);
      });

      it("should return [2, 3, 5, 7] for 7", function() {
       expect(getPrimes(7)).toEqual([2, 3, 5, 7]);
      });
      it("should return [2, 3, 5, 7, 11] for 11", function() {
       expect(getPrimes(11)).toEqual([2, 3, 5, 7, 11]);
      });
      it("should return [2, 3, 5, 7, 11, 13] for 13", function() {
       expect(getPrimes(13)).toEqual([2, 3, 5, 7, 11, 13]);
      });
      it("should return [2, 3, 5, 7, 11, 13, 17] for 17", function() {
       expect(getPrimes(17)).toEqual([2, 3, 5, 7, 11, 13, 17]);
      });

      it("should return [2, 3, 5, 7, 11, 13, 17, 19] for 19", function() {
       expect(getPrimes(19)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
      });

      it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23] for 23", function() {
       expect(getPrimes(23)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23]);
      });
      it("should return [[2, 3, 5, 7, 11, 13, 17, 19, 23, 29] for 29", function() {
       expect(getPrimes(29)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
      });
      it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31] for 31", function() {
       expect(getPrimes(31)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
      });
    });
 });
}());