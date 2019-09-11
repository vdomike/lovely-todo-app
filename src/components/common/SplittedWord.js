import React from 'react';

const SplittedWord = ({ word }) => {
  const splittedWord = word.split('');
  return splittedWord.map((char, index) => {
    return char !== ' ' ? (
      <span key={index}>{char}</span>
    ) : (
      <span key={index}>&nbsp;</span>
    );
  });
};

export default SplittedWord;
