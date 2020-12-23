import React, { useState, useEffect } from 'react';
import './App.scss';
import character from './assets/character.svg';
import questions from './questions.json';

function App() {
  const [sentence, setSentence] = useState(questions[0].sentence);
  const [blocks, setBlocks] = useState(questions[0].blocks);
  const [useBlocks, setUseBlocks] = useState([{id: 1, text: 'Hello'}, {id: 2, text: 'World!!!'}]);

  useEffect(() => {
    console.log(sentence);
    console.log(blocks);
  }, [])

  return (
    <div className="app-container">
      <h1 className="app-header">Переведите это предложение</h1>
      <div className="sentence-contaier">
        <img src={character} alt="Инопришеленец" className="app-character" />
        <div className="sentence">
          {sentence.map(s => (
            <span
              className="sentence-item"
              key={s.id}
            >
              {s.text}
            </span>
          ))}
        </div>
      </div>
      <div className="answer-container">
        <div className="use-blocks">
          {useBlocks.map(u => (
            <div
              key={u.id}
              className="use-blocks-item"
            >
              {u.text}
            </div>
          ))}
        </div>
        <div className="block-container">
          {blocks.map(b => (
            <div
              key={b.id}
              className="block-item"
            >
              {b.text}
            </div>
          ))}
        </div>
      </div>
      <div className="check-button">Проверить</div>
    </div>
  );
}

export default App;