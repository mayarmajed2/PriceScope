import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  // هذا هو المسار إلى ملف request.ts
  // الافتراضي هو ./src/i18n/request.ts
  // فلا داعي لذكره إذا كان بنفس هذا المسار.
});

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  experimental: {
    serverActions: {},
  },
};

export default withNextIntl(nextConfig);
