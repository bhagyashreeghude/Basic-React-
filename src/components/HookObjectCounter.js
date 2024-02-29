import React, { useState } from "react";

const HookObjectCounter = () => {
  const [name, setName] = useState({ fname: " ", lname: " " });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.fname}
          onChange={(e) => setName({ ...name, fname: e.target.value })}
        />
        <input
          type="text"
          value={name.lname}
          onChange={(e) => setName({ ...name, lname: e.target.value })}
        />
        <h2> your first name : {name.fname}</h2>
        <h2> your last name : {name.lname}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
};

export default HookObjectCounter;
