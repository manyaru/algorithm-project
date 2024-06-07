function analyzeSentence(sentence) {

    let charCount = 0;
    let wordCount = 0;
    let vowelCount = 0;
  
    const vowels = new Set('aeiouAEIOU');
  

    for (let char of sentence) {
      charCount++; 
  
    
      if (vowels.has(char)) {
        vowelCount++;
      }
  
    
      if (char === ' ') {
        wordCount++;
      }
    }
  
    
    wordCount++;
  

    console.log(`Length of the sentence: ${charCount}`);
    console.log(`Number of words in the sentence: ${wordCount}`);
    console.log(`Number of vowels in the sentence: ${vowelCount}`);
  }
  
  
  const sentence = prompt("Enter a sentence: ");
  analyzeSentence(sentence);