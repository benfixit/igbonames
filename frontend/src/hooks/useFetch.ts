import { useState, useEffect } from "react";

const useFetch = (url: string, options?: RequestInit) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: ""
    });

    useEffect(() => {
        (async () => {
          let response = await fetch(url, options);

          if(!response.ok) {
            setState({
              data: null,
              loading: false,
              error: 'An error occurred'
            });
          }

          let data = await response.json();
          setState({
            data,
            loading: false,
            error: ''
          });
        })();
      }, [url, options])
    
      return state;
}

export default useFetch;