import React, { useEffect, useState } from 'react';
import { Title } from './components/Title';
import DownImg from "../assets/down-joke.webp";

export const Joke = () => {
    const [ data, setData ] = useState("");

    
    const fetchJoke = async () => {
        try {
            const response = await fetch("https://api.chucknorris.io/jokes/random");
            const data = await response.json();
            setData(data.value);
        } catch(err) {
            throw new Error(`Something went wrong, please try again! ${err.message}`);
        }
    }

    useEffect(() => {
        fetchJoke();
    }, []);

  return (
    <main className='min-h-screen'>
        <section>
            <Title heading={"Joke's"} para={"Lighten Up with a Dose of Laughter: Jokes to Brighten Your Day!"}/>
        </section>
        <section className='flex justify-center items-center my-5 mx-5'>
            <img data-testid="jokeImg" className='size-24 dark:ring-2 ring-white dark:ring-white' src={DownImg} alt="joke" />
        </section>
        <section className='flex justify-center items-center my-5 mx-10'>
            <p data-testid="jokeText" className='font-semibold text-xl text-gray-900 dark:text-gray-200'>{data}</p>
        </section>
        <section className='flex justify-center items-center my-5'>
            <button data-testid="jokeButton" onClick={fetchJoke} className='rounded-full my-5 px-4 py-2 border border-gray-900 dark:border-gray-200 text-gray-100 bg-blue-700'>Another Joke</button>
        </section>
    </main>
  )
}
