declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}

declare module '*.jpg' {
  const jpgUrl: string;
  const jpgComponent: any;
  export default jpgUrl;
  export { jpgComponent as ReactComponent };
}
