// This declaration file helps TypeScript understand how to handle imports of .json files.
// It's a robust way to ensure JSON modules are recognized, especially when the
// "resolveJsonModule" setting in tsconfig.json doesn't work as expected in some environments.

declare module '*.json' {
  const value: any;
  export default value;
}
