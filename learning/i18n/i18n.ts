// next.config.ts
import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts'); // 👈 tell the plugin where it is

const nextConfig: NextConfig = {
    images: {unoptimized: true},
    eslint: {ignoreDuringBuilds: true}
};

export default withNextIntl(nextConfig);
