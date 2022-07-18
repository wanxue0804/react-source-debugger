import React, { useState } from 'react';

export default function UpdateState () {
  const [num, setNum] = useState(0);

  const handleButton = () => {
    setNum(n => n+1);
    setNum(n => n+1);
    setNum(n => n+1);
    setNum(n => n+1);
    setNum(n => n+1);
    // setNum(num + 1);
    // setNum(num + 1);
    // setNum(num + 1);
    // setNum(num + 1);
    // setNum(num + 1);

    // 结论
    // setNum传入函数更改状态机可以以最新的状态更新 例如setNum5次 点击一下值就是5
    // 常规num+1的方式 多次setNum只会+1
  }


  return (
    <div>
      <button onClick={handleButton}>点击按钮{num}</button>
    </div>
  );
}