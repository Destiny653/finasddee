import createNextIntlPlugin from 'next-intl/plugin';
import type {NextConfig} from 'next';

const withNextIntl = createNextIntlPlugin('./next-intl.config.mjs');

const nextConfig: NextConfig = {
  experimental: {
    turbo: {}, // Keep this for Turbopack
  },
};

export default withNextIntl(nextConfig);
