import type { AppProps, NextWebVitalsMetric } from 'next/app'

import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../../next-i18next.config.js';

import '../styles/globals.scss'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp, nextI18NextConfig)
