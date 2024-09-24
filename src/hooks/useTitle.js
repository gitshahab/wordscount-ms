import { useEffect } from 'react';

export const useTitle = (title) => {
    useEffect(() => {
        document.title = title + " - wordscount-ms";
    }, [title]);
  return null;
}
