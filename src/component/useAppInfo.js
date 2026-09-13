
// Custom hook — returns app info from localStorage
// Use this in any component to get dynamic app name, logo etc.

const useAppInfo = () => {
  const get = (key, fallback = '') => {
    try {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : fallback;
    } catch {
      return fallback;
    }
  };

  return {
    appName:    get('CompanyName', 'Ota Mobile'),
    appLogo:    get('CompanyLogo', ''),
    appEmail:   get('CompanyEmail', ''),
    shortInfo:  get('CompanyShortInfo', ''),
    baseUrl:    get('CompanyBaseUrl', ''),
    launchTitle: get('CompanyAppTitle', ''),
  };
};

export default useAppInfo;