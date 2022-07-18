import { Component } from 'react';

function AppFunc () {
  return (
    <p>函数式组建</p>
  );
}


export default class AppClass extends Component {
  render () {
    <p>class 组建</p>
  }
};

// console.log('AppFunc', AppFunc, AppFunc.prototype, '11111', AppFunc.prototype.isReactComponent);
// console.log('AppFunc标签', <AppFunc />);
// console.log('AppClass', AppClass, AppClass.prototype, '111', AppClass.prototype.isReactComponent);
// console.log('AppClass标签', <AppClass />);
// 可以通过AppClass.prototype.isReactComponent = {} 来区分函数式组建和class 组建
