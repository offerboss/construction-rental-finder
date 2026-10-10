import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old planned slug for the compact-machine comparison guide.
      {
        source: "/resources/mini-excavator-vs-skid-steer",
        destination: "/resources/skid-steer-vs-mini-excavator",
        permanent: true,
      },
      // The old front-end-only listing form was replaced by the featured
      // placement application (GHL form) on /for-rental-companies.
      {
        source: "/list-your-business",
        destination: "/for-rental-companies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
