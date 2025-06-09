import { useRef } from "react";

export const UseRef_fn = () => {
  const mysref = useRef(0);
  
  function onFocusfn() {
    mysref.current.focus();
  }

  return (
    <>
      <input type="text" ref={mysref} />
      <button onClick={onFocusfn}>Click me</button>
    </>
  );
};
