const fontSizeInterpolator = {
  input: [4, 5, 6, 7, 8, 10, 11, 13, 20],
  output: [145, 125, 100, 94, 82, 78, 64, 56, 44],
};

export default function customFontSize(word) {
  // returns custom font size based on length of word
  const wordLength = word.length;
  for (let a = 0; a < 9; a++) {
    if (wordLength < fontSizeInterpolator.input[a]) {
      return fontSizeInterpolator.output[a];
    }
  }
  return 50;
}
