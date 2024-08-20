/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "mobisoftinfotech.com",
      "images.pexels.com",
      "flowbite.com",
      "pics.craiyon.com",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/Login",
        destination: "/pages/Auth/Login",
      },
      {
        source: "/Register",
        destination: "/pages/Auth/Register",
      },
      {
        source: "/Home",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;
