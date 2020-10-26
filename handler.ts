"use strict";

const reverseString = (string) => {
  const charArray = string.split("");
  const reversedArray = charArray.reverse();
  const joinedString = reversedArray.join("");
  return joinedString;
};

const reverseNames = (people) => {
  const reversed = people.map((person) => reverseString(person));
  return reversed;
};

module.exports.hello = async (event) => {
  const people = ["Joao", "Marcos", "Lucas"];

  const peopleWithReversedNames = reverseNames(people);

  return {
    statusCode: 200,
    body: JSON.stringify(peopleWithReversedNames),
  };
};
