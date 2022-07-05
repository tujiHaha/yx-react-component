import { useEffect, useState } from 'react';

function resize() {
  console.log('----resize-----');
  window.location.reload();
}

function useGetClientWidth() {
  const [clientWidth, setClientWidth] = useState(1000);

  useEffect(() => {
    const width = document.body.clientWidth;
    setClientWidth(width);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resize, false);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return clientWidth;
}

export default useGetClientWidth;
