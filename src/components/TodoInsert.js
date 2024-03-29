import React, { useState } from "react";

function TodoInsert() {
  const [value, setValue] = useState("");
  const onChange = e => {
    setValue(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    // TODO: 커스텀 Hook 사용해서 새 항목 등록
    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoInsert;
