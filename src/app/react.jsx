import React from 'react'
import ReactDOM from 'react-dom'
import APPs from './counter'
// eslint-disable-next-line react/prop-types
// const kilin = ({ kiw }) => <div className="oyoy">yoyo kilin{kiw}</div>

// eslint-disable-next-line react/prop-types
const Title1 = ({ miiia, kiiiin }) => <div className="YOYO" >{miiia} with {kiiiin}</div>
// eslint-disable-next-line react/prop-types
const Title = ({ text }) => <div className="YOYO" >{text}</div>
const kilinlist = [
  'kilin', 'mia'
]
const Index2 = () => {
  return <Title text={'猜猜看啊'} />
}
const Index = () => {
  return (
    <div>
      {kilinlist.map((el, inx) => {
      // eslint-disable-next-line react/jsx-no-undef
        // eslint-disable-next-line react/jsx-key
        return <Title1 miiia={el} kiiiin={inx} />
      })}
      <Index2 />
      <APPs />
    </div>
  )
}

/*
ReactDOM.render(<Index2 />, document.querySelector('#root'))
*/
ReactDOM.render(<Index />, document.querySelector('#root'))
