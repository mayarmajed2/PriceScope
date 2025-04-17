import '../globals.css';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {ReactNode} from 'react';
import {notFound} from 'next/navigation';
import Navbar from '../../components/Navbar';
import BackgroundEffect from '../../components/BackgroundEffect';




export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'ar'}];
}


interface Props {
  children: ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({ children, params }: Props) {
  // Await params to resolve the dynamic route parameters
  const { locale } = await params; // Fix: Await params
  const messages = await getMessages({ locale });
  
  if (!messages) notFound();

  return (
    <html lang={locale}>
      <body className="relative overflow-x-hidden">
      <BackgroundEffect />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar /> {/* ✅ هنا يظهر في كل الصفحات */}
          <main className="min-h-screen pt-16"> {/* يمكن تعديل pt-16 حسب ارتفاع الناف بار */}
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
  
}
