import React from "react";

const InputKafic = (props) => {
  return (
    <>
      <p>{props.kafic}</p>
      <button>pozitivno</button>
      <button>negativno</button>
      <button>neutralno</button>
      <p>ukupan broj glasova: {props.glasovi}</p>
      <p>% pozitivnih ocena:{props.procenat}</p>
    </>
  );
};

export default InputKafic;
