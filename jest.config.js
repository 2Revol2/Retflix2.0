import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

const config = {
  testEnvironment: "jsdom",
  clearMocks: true,
  coverageProvider: "v8",
  transform: {
    ...tsJestTransformCfg,
  },
};

export default config;
