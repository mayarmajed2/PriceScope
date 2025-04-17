import {getRequestConfig} from 'next-intl/server';
import type {RequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}): Promise<RequestConfig> => {
  const currentLocale = locale ?? 'en';

  return {
    messages: (await import(`../messages/${currentLocale}.json`)).default,
    locale: currentLocale
  };
});
