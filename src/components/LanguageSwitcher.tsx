'use client';

import {Link} from '@/navigation'; // ✅ الصحيح
import {useLocale} from 'next-intl';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const nextLocale = locale === 'en' ? 'ar' : 'en';

  return (
    <Link href="/" locale={nextLocale} className="underline text-blue-600">
      {nextLocale.toUpperCase()}
    </Link>
  );
}
