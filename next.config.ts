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
    ];
  },
};

export default nextConfig;
