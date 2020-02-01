import { useEffect, useState } from 'react';
interface IFetch {
  data: string | null;
  loading: boolean;
}
export const useFetch = (url: string) => {
  // Data fetching
  const [state, setState] = useState<IFetch>({ data: null, loading: false });
  useEffect(() => {
    setState(c => ({ data: c.data, loading: false }));
    fetch(url)
      .then(res => res.text())
      .then((resp: string) => {
        setState({ data: resp, loading: false });
      });
  }, [url]);
  return state;
};
