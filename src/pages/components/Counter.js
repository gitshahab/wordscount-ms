import { useState } from 'react';

export const Counter = () => {
  const [ text, setText ] = useState("");
  const [ word, setWord ] = useState(0);
  const [ char, setChar ] = useState(0);

  function handleChange(e){
    const inputText = e.target.value;
    setText(inputText);

    const charCount = inputText.length;
    setChar(charCount);
    
    const wordCount = inputText.trim().split(/\s+/).filter(Boolean).length;
    setWord(wordCount);
  }

  function handleClick(){
    setText("");
    setChar(0);
    setWord(0);
  }

  return (
    <main>
    <section>
      <div className='flex justify-center'>
          <textarea data-testid="counterTextarea" onChange={handleChange} value={text} type="text" className='dark:bg-gray-700 px-2 py-2 h-80 md:h-40 w-full mx-4 md:mx-12 border border-gray-900 dark:border-gray-100 outline-stone-500 text-gray-900 dark:text-gray-200' placeholder='Paste or Type your Text' />
      </div>
    </section>
    <section>
      <div className='flex justify-center items-center'>
      <button data-testid="counterButton" onClick={handleClick} className={`${char !== 0 ? `bg-red-400` : ""} my-5 px-2 py-1 font-semibold text-gray-900 dark:text-gray-100 border border-gray-900 dark:border-gray-100 rounded-lg`}>Clear</button>
      </div>
      <div className='flex justify-between items-center'>
        <span data-testid="counterChar" className='mx-2 md:mx-10 my-2 mb-10 px-2 py-1 font-semibold bg-blue-400 text-gray-900 dark:text-gray-100 border border-gray-900 dark:border-gray-100 rounded-lg'>Characters: {char}</span>
        <span data-testid="counterWord" className='mx-2 md:mx-10 my-2 mb-10 px-2 py-1 font-semibold bg-blue-400 text-gray-900 dark:text-gray-100 border border-gray-900 dark:border-gray-100 rounded-lg'>Words: {word}</span>
      </div>
    </section>
    </main>
  )
}
