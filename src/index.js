const methods = require("./methods");
class ArrayFriend extends Array {}

ArrayFriend.prototype.shuffle = methods.shuffle;
ArrayFriend.prototype.removeDuplicates = methods.removeDuplicates;
ArrayFriend.prototype.batch = methods.batch;
ArrayFriend.prototype.copy = methods.copy;
ArrayFriend.prototype.deepCopy = methods.deepCopy;
ArrayFriend.prototype.countOf = methods.countOf;
ArrayFriend.prototype.countIf = methods.countIf;
ArrayFriend.prototype.onlyDuplicates = methods.onlyDuplicates;
ArrayFriend.prototype.last = methods.last;
ArrayFriend.prototype.random = methods.random;
ArrayFriend.prototype.randomIndex = methods.randomIndex;
ArrayFriend.prototype.removeNullValues = methods.removeNullValues;
ArrayFriend.prototype.removeFalseyValues = methods.removeFalseyValues;
ArrayFriend.prototype.partialMatch = methods.partialMatch;
ArrayFriend.prototype.partialMatchIndex = methods.partialMatchIndex;
ArrayFriend.prototype.isEmpty = methods.isEmpty;
ArrayFriend.prototype.insertAt = methods.insertAt;
ArrayFriend.prototype.ascending = methods.ascending;
ArrayFriend.prototype.descending = methods.descending;
ArrayFriend.prototype.sum = methods.sum;
ArrayFriend.prototype.difference = methods.difference;
ArrayFriend.prototype.product = methods.product;
ArrayFriend.prototype.quotient = methods.quotient;
ArrayFriend.prototype.average = methods.mean;
ArrayFriend.prototype.mean = methods.mean;
ArrayFriend.prototype.median = methods.median;
ArrayFriend.prototype.mode = methods.mode;
ArrayFriend.prototype.replace = methods.replace;
ArrayFriend.prototype.filterType = methods.filterType;
ArrayFriend.prototype.types = methods.types;
ArrayFriend.prototype.toStr = methods.toStr;
ArrayFriend.prototype.toNum = methods.toNum;
ArrayFriend.prototype.even = methods.even;
ArrayFriend.prototype.odd = methods.odd;
ArrayFriend.prototype.assert = methods.assert;
ArrayFriend.prototype.toObject = methods.toObject;

const arrayFriend = (...arr) => new ArrayFriend(...arr);

arrayFriend.protos = () => {
  Array.prototype.shuffle = methods.shuffle;
  Array.prototype.removeDuplicates = methods.removeDuplicates;
  Array.prototype.batch = methods.batch;
  Array.prototype.copy = methods.copy;
  Array.prototype.deepCopy = methods.deepCopy;
  Array.prototype.countOf = methods.countOf;
  Array.prototype.countIf = methods.countIf;
  Array.prototype.onlyDuplicates = methods.onlyDuplicates;
  Array.prototype.last = methods.last;
  Array.prototype.random = methods.random;
  Array.prototype.randomIndex = methods.randomIndex;
  Array.prototype.removeNullValues = methods.removeNullValues;
  Array.prototype.removeFalsyValues = methods.removeFalsyValues;
  Array.prototype.partialMatch = methods.partialMatch;
  Array.prototype.partialMatchIndex = methods.partialMatchIndex;
  Array.prototype.isEmpty = methods.isEmpty;
  Array.prototype.insertAt = methods.insertAt;
  Array.prototype.ascending = methods.ascending;
  Array.prototype.descending = methods.descending;
  Array.prototype.sum = methods.sum;
  Array.prototype.difference = methods.difference;
  Array.prototype.product = methods.product;
  Array.prototype.quotient = methods.quotient;
  Array.prototype.average = methods.average;
  Array.prototype.mean = methods.mean;
  Array.prototype.median = methods.median;
  Array.prototype.mode = methods.mode;
  Array.prototype.replace = methods.replace;
  Array.prototype.filterType = methods.filterType;
  Array.prototype.types = methods.types;
  Array.prototype.toStr = methods.toStr;
  Array.prototype.toNum = methods.toNum;
  Array.prototype.even = methods.even;
  Array.prototype.odd = methods.odd;
  Array.prototype.assert = methods.assert;
  Array.prototype.toObject = methods.toObject;
};

arrayFriend.withLength = (n = 0) => new ArrayFriend(...Array.apply(null, Array(n)));

module.exports = arrayFriend;
