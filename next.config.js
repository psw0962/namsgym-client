/** @type {import('next').NextConfig} */
const withInterceptStdout = require('next-intercept-stdout');
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

// intercept: recoil warning 무시 및 reactStrictMode
const intercept = withInterceptStdout(
  {
    reactStrictMode: true,
    // images: {
    //   domains: [],
    // },
  },

  text => (text.includes('Duplicate atom key') ? '' : text),
);

// pwa
const customWithPWA = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
});

// export
module.exports = withPlugins([intercept, customWithPWA]);
