import React, { useState } from "react";

const MyComponent = () => {
  const [list, setList] = useState([]);

  function handleAddItem() {
    let item = document.getElementById("inputValue").value;
    setList((l) => [...l, item]);
    document.getElementById("inputValue").value = "";
  }

  function handleDel(index) {
    setList((l) => l.filter((_, i) => i !== index));
  }
  function handleUp(index) {
    if (index === 0) return;
    let itemDel = list.splice(index, 1);
    list.splice(index - 1, 0, itemDel[0]);
    setList((l) => [...l]);
  }
  function handleDown(index) {
    if (index === list.length) return;
    let itemDel = list.splice(index, 1);
    list.splice(index + 1, 0, itemDel[0]);
    setList((l) => [...l]);
  }

  return (
    <div className="container">
      <h1>To-Do-List</h1>
      <br />
      <div className="add-item">
        <input id="inputValue" type="text" placeholder="Enter to-do" />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <br />
      <ul className="drop-list">
        {list.map((item, index) => {
          return (
            <li className="list-item fade-in" key={index}>
              <p className="to-do">{item}</p>
              <div>
                <button className="del-btn" onClick={() => handleDel(index)}>
                  Delete
                </button>
                <button className="up-btn" onClick={() => handleUp(index)}>
                  👆
                </button>
                <button className="down-btn" onClick={() => handleDown(index)}>
                  👇
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyComponent;
