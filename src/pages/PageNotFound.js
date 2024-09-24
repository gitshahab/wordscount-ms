import PageNotFoundImg from '../assets/404-page-not-found.svg';
import { Link } from "react-router-dom";
import { useTitle } from '../hooks/useTitle';

export const PageNotFound = () => {
    useTitle("PageNotFound");
  return (
    <main className='min-h-screen'>
        <section>
            <div className='flex justify-center my-5'>
                <p data-testid="pnfText" className='text-xl text-gray-900 dark:text-gray-200'>Opps, Page not found!</p>
            </div>
            <div className='flex justify-center my-5'>
                <img className='size-4/5' src={PageNotFoundImg} alt="page not found" />
            </div>
            <div className='flex justify-center my-5'>
            <Link to="/">
                <button data-testid="pngButton" className='bg-blue-700 text-white font-semibold rounded-full border border-gray-950 dark:border-gray-200 px-4 py-2'><i className="bi bi-arrow-left"></i> Back To Home</button>
            </Link>
            </div>
        </section>
    </main>
  )
}
