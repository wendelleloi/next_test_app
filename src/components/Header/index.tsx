// import fs from 'fs'
// import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.scss'

// import { useTranslation } from 'next-i18next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// interface locale {
//   locale: string
// }

// export const getStaticProps = async ({ locale }: locale) => ({
//   props: {
//     ...await serverSideTranslations(locale, ['common']),
//   },
// })

export function Header() {

  // const { t } = useTranslation('common');
  // const router = useRouter();
  
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.navContent}>
          <Image src="/images/logo.svg" alt="ig.news" width={100} height={33}/>
          <nav>
            {/* <Link href="">{t('who-we-are')}</Link> */}
            <Link href="/">Quem somos</Link>
            <Link href="/">Oportunidades</Link>
            <Link href="/">Nosso Blog</Link>
          </nav>
        </div>
        <div className={styles.buttonsContent}>
          <button className={styles.loginButton}>Entrar</button>
          <button className={styles.singInButton}>Começar agora</button>
        </div>
      </div>
    </header>
  )
}