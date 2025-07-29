declare module 'react' {
  export = React;
  export as namespace React;
}

declare namespace React {
  interface JSX {
    IntrinsicElements: any;
  }
  
  function useState<T>(initialState: T): [T, (newState: T) => void];
  function useEffect(effect: () => void, deps?: any[]): void;
  function useRef<T>(initialValue: T): { current: T };
} 