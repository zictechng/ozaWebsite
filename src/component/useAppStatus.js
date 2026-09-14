
import { useState, useEffect } from 'react';
import client from './client';

const cache = { data: null, fetchedAt: null };
const CACHE_TTL = 60 * 1000;

export default function useAppStatus() {
  const [status, setStatus] = useState({
    loading: true,
    platformDown: false,
    loginBlocked: false,
    signupBlocked: false,
    message: '',
  });

  useEffect(() => {
    const now = Date.now();
    if (cache.data && cache.fetchedAt && now - cache.fetchedAt < CACHE_TTL) {
      setStatus({ loading: false, ...cache.data });
      return;
    }
    client.get('/api/app_status_check')
      .then(res => {
        if (res.data?.msg === '200') {
          const result = {
            platformDown: res.data.app_operation_status === true,
            loginBlocked: res.data.app_stop_login_status === true,
            signupBlocked: res.data.app_new_signup_status === false,
            message: res.data.app_mode_message || '',
          };
          cache.data = result;
          cache.fetchedAt = now;
          setStatus({ loading: false, ...result });
        }
      })
      .catch(() => setStatus(prev => ({ ...prev, loading: false })));
  }, []);

  return status;
}
