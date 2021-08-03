import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'



import styles from './home.module.scss'

import { Header } from '@/components/Header'
interface locale {
  locale: string
}

export const getStaticProps = async ({ locale }: locale) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

type CheckmarkComponetProps = {
  children: JSX.Element,
};

function CheckmarkComponet({ children }: CheckmarkComponetProps) {
  return (
    <div className={styles.checksContainer}>
      <div className={styles.checksContent}>
      <Image
        src="/images/home/checkmark.svg"
        alt="checkmark"
        width={20}
        height={20}
      />
        {children}
      </div>
    </div>
  )
}

export default function Home() {
  const { t } = useTranslation('common');
  const { locale, locales, defaultLocale, asPath } = useRouter();

  return (
    <>
      <Head>
        <title>Hurst Capital - Invista em Ativos Reais | Autorizados pela CVM</title>
      </Head>

      <Header/>

      <main className={styles.contentContainer}>
        <section className={styles.heroContainer}>
          <div>
            <div className={styles.heroTitle}>
              ATIVOS REAIS
            </div>
            <p className={styles.heroText}>
              <span className={styles.textMark}>
                Eleve seu portfólio <br/>
              </span>
              diversificando com ativos que rendem acima de 14% ao ano    
            </p>

            <CheckmarkComponet>
              <p>Investimentos fora da Bolsa de Valores.</p>
            </CheckmarkComponet>

            <CheckmarkComponet>
              <p>Somos líderes em Ativos Reais na América Latina.</p>
            </CheckmarkComponet>

            <CheckmarkComponet>
              <p>Mais de 3000 investidores ativos.</p>
            </CheckmarkComponet>

            <button className={styles.heroButton}>
              COMEÇAR AGORA
            </button>

          </div>
          <div>
            <Image
              src="/images/home/hero.webp"
              alt="hurst capital"
              width={452}
              height={568}
            />
          </div>
        </section>
        <p>{t('description')}</p>

        <Link
          locale={locale === 'en' ? 'pt' : 'en'}
          href={asPath}
          passHref={true}
        >
          <button>
            {t('change-locale')}
          </button>
        </Link>
       
      </main>
    </>
  )
}
