'use client';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations();

  return (
    <main className="p-6 text-center">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p className="mt-2">{t('gold')} | {t('currency')} | {t('products')}</p>
    </main>
  );
}
