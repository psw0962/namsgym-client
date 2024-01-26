/** @type {import('next').NextConfig} */
const withInterceptStdout = require('next-intercept-stdout');

const nextConfig = {
  reactStrictMode: true,
  siteUrl: 'https://www.namsgym.com',
  images: {
    domains: [],
  },
};

module.exports = withInterceptStdout(nextConfig, text =>
  text.includes('Duplicate atom key') ? '' : text,
);

// 웹팩 설정 추가
module.exports = withInterceptStdout(
  {
    reactStrictMode: true,
    images: {
      domains: [],
    },
    webpack(config, options) {
      config.module.rules.push({
        test: /\.mp3$/,
        use: {
          loader: 'file-loader',
        },
      });
      return config;
    },
  },
  text => (text.includes('Duplicate atom key') ? '' : text),
);
