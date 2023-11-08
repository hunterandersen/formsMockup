import React from "react";
import { useState } from "react";

export default function ModelPicker({
  updateModelData,
  updateIsValid,
  isCurrentlyValid,
}) {
  const [thing1, setThing1] = useState("");
  const [thing2, setThing2] = useState("");
  const [thing3, setThing3] = useState("");
  const [thing4, setThing4] = useState("");

  function validate() {
    return thing1 && thing2 && thing3 && thing4;
  }

  function check() {
    const isDataValid = validate();
    if (isDataValid != isCurrentlyValid) {
      updateIsValid(isDataValid);
      updateModelData({
        thing1,
        thing2,
        thing3,
        thing4,
      });
    }
  }

  return (
    <div>
      <form>
        <label htmlFor="thing1">Thing 1</label>
        <input
          type="text"
          id="thing1"
          onChange={(e) => {
            setThing1(e.target.value);
            check();
          }}
        />
        <label htmlFor="thing2">Thing 2</label>
        <input
          type="text"
          id="thing2"
          onChange={(e) => {
            setThing2(e.target.value);
            check();
          }}
        />
        <label htmlFor="thing3">Thing 3</label>
        <input
          type="text"
          id="thing3"
          onChange={(e) => {
            setThing3(e.target.value);
            check();
          }}
        />
        <label htmlFor="thing4">Thing 4</label>
        <input
          type="text"
          id="thing4"
          onChange={(e) => {
            setThing4(e.target.value);
            check();
          }}
        />
      </form>
    </div>
  );
}
