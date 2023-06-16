// function remove(str) {
//     const unique = new Set();
//     let result = '';
  
//     for (let i = 0; i < str.length; i++) {
//       if (!unique.has(str[i])) {
//         unique.add(str[i]);
//         result += str[i];
//       }
//     }
  
//     return result;
//   }
//   const str = "abcadeecfb";
//   const result = remove(str);
//   console.log(result);
  ///
  ///
  function countAlphabetOccurrences(str) {
    const charCountMap = new Map();
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (charCountMap.has(char)) {
        charCountMap.set(char, charCountMap.get(char) + 1);
      } else {
        charCountMap.set(char, 1);
      }
    }
  
    // Print the count of each alphabet
    charCountMap.forEach((count, char) => {
      console.log(`${char}=${count}`);
    });
  }
  const str = "abcadeecfb";
  countAlphabetOccurrences(str);
  
  