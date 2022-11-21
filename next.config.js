/** @type {import('next').NextConfig} */
const withInterceptStdout = require('next-intercept-stdout');

// const nextConfig = {
//   reactStrictMode: true,
// }
// module.exports = nextConfig

module.exports = withInterceptStdout(
  {
    reactStrictMode: true,
    // images: {
    //   domains: [],
    // },
  },

  (text) => (text.includes('Duplicate atom key') ? '' : text)
);
