declare function require(string: string): any;

declare module '*.yml' {
  const content: any;
  export default content;
}