import React, { useEffect, useState } from 'react';
import client from './component/client';
import RouterPage from './route/RouterPage';

function App() {
  const [appName, setAppName] = useState('');

  const getCompanyDetails = async () => {
    try {
      const res = await client.get('/api/company_name');
      if (res.data) {
        const name = res.data.app_name || 'Ota Mobile';
        const logo = res.data.app_logo || '';
        const baseUrl = res.data.app_baseurl || '';
        const shortInfo = res.data.app_short_name || '';
        const launchTitle = res.data.app_launch_title || '';
        const appEmail = res.data.app_email || '';

        // Store all in localStorage
        localStorage.setItem('CompanyName', JSON.stringify(name));
        localStorage.setItem('CompanyLogo', JSON.stringify(logo));
        localStorage.setItem('CompanyBaseUrl', JSON.stringify(baseUrl));
        localStorage.setItem('CompanyShortInfo', JSON.stringify(shortInfo));
        localStorage.setItem('CompanyAppTitle', JSON.stringify(launchTitle));
        localStorage.setItem('CompanyEmail', JSON.stringify(appEmail));

        // Update document title dynamically
        document.title = `${name} — Your friendly virtual funds partner`;

        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content',
            `${name} — The most reliable platform to sell PayPal, Payoneer and Bitcoin, buy airtime, data, pay bills and more in Nigeria.`
          );
        }

        setAppName(name);
      }
    } catch (error) {
      console.log('Company details error:', error.message);
      // Fallback to localStorage if API fails
      const cached = localStorage.getItem('CompanyName');
      if (cached) {
        const name = JSON.parse(cached);
        document.title = `${name} — Your friendly virtual funds partner`;
        setAppName(name);
      }
    }
  };

  useEffect(() => {
    getCompanyDetails();

    function fadeout() {
      const el = document.querySelector('.preloader');
      if (el) {
        el.style.opacity = '0';
        el.style.display = 'none';
      }
    }
    const timeoutID = window.setTimeout(fadeout, 2000);
    return () => window.clearTimeout(timeoutID);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <RouterPage appName={appName} />
    </div>
  );
}

export default App;