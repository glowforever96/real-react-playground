import { useEffect, useState } from 'react';

export default function useFetch<T>(
  url: string,
  { method, body }: { method: string; body?: XMLHttpRequestBodyInit }
) {
  const [result, setResult] = useState<T | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ok, setOk] = useState<boolean | undefined>();

  const [status, setStatus] = useState<number | undefined>();

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      setIsLoading(true);

      const response = await fetch(url, {
        method,
        body,
        signal: controller.signal
      });

      setOk(response.ok);
      setStatus(response.status);

      if (response.ok) {
        const apiResult = await response.json();
        setResult(apiResult);
      }

      setIsLoading(false);
    })();

    return () => {
      controller.abort();
    };
  }, [url, method, body]);

  return { ok, result, isLoading, status };
}
