import 'next-i18next';

import en from './public/locales/en';
import pt from './public/locales/pt';

declare module 'next-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'pt';
    resources: {
      en: typeof en;
      pt: typeof pt;
    };
  };
};