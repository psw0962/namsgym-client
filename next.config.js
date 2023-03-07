/** @type {import('next').NextConfig} */
const withInterceptStdout = require('next-intercept-stdout');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const nextConfig = {
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
  },
  images: {
    domains: [],
  },
  rules: [
    {
      test: /\.(mp3|ogg)$/,
      loader: 'file-loader',
      options: {
        name: 'public/sounds/[name].[ext]?[hash]',
      },
    },
  ],
};

const bulidConfig = () => {
  const plugins = [withPWA];
  const config = plugins.reduce((acc, plugin) => plugin(acc), {
    ...nextConfig,
  });

  return config;
};

module.exports = withInterceptStdout(bulidConfig, text =>
  text.includes('Duplicate atom key') ? '' : text,
);
