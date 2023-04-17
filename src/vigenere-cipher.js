const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

function isUpperletter(letter) {
  let char = letter.charCodeAt();
  return char >= 65 && char <= 90;
}

function isLowerLetter(letter) {
  let char = letter.charCodeAt();
  return char >= 97 && char <= 122;
}

class VigenereCipheringMachine {
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    if (this === reverseMachine) {
      message = message.split("").reverse().join("");
    }
    let codeStr = "";
    for (let i = 0, j = 0; i < message.length; i++) {
      let currentLetter = message[i];

      if (isUpperletter(currentLetter)) {
        let upperLetter =
          (currentLetter.charCodeAt() -
            65 +
            (key[j % key.length].toUpperCase().charCodeAt() - 65)) %
          26;
        codeStr += String.fromCharCode(upperLetter + 65);
        j++;
      } else if (isLowerLetter(currentLetter)) {
        let lowerLetter =
          (currentLetter.charCodeAt() -
            97 +
            (key[j % key.length].toLowerCase().charCodeAt() - 97)) %
          26;
        codeStr += String.fromCharCode(lowerLetter + 97);
        j++;
      } else {
        codeStr += currentLetter;
      }
    }

    return codeStr.toUpperCase();
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    if (this === reverseMachine) {
      message = message.split("").reverse().join("");
    }

    let result = [];
    let keyArray = filterKey(key);
    for (let i = 0; i < keyArray.length; i++) {
      keyArray[i] = (26 - keyArray[i]) % 26;
    }

    function filterKey(key) {
      for (const ch of key) {
        const cc = ch.codePointAt(0);
        result.push((cc - 65) % 32);
      }
      return result;
    }

    let codeStr = "";
    let j = 0;
    for (const letterMes of message) {
      if (isUpperletter(letterMes)) {
        const cc = letterMes.codePointAt(0);
        codeStr += String.fromCodePoint(
          ((cc - 65 + keyArray[j % keyArray.length]) % 26) + 65
        );
        j++;
      } else if (isLowerLetter(letterMes)) {
        const cc = letterMes.codePointAt(0);
        codeStr += String.fromCodePoint(
          ((cc - 97 + keyArray[j % keyArray.length]) % 26) + 97
        );
        j++;
      } else {
        codeStr += letterMes;
      }
    }
    if (this === reverseMachine) {
      return codeStr.split("").reverse().join("");
    }
    return codeStr;
  }
}

module.exports = {
  VigenereCipheringMachine,
};

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);
console.log(reverseMachine.decrypt("AEIHQX SX DLLU!", "alphonse"));
console.log(reverseMachine.decrypt("AEIHQX SX DLLU!", "alphonse"));
