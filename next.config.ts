import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['10.0.0.34'],
  reactCompiler: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
