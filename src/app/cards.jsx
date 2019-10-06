import React from 'react'
import ReactDOM from 'react-dom'

// eslint-disable-next-line react/prop-types
const Index2 = ({ zero, one, two, three }) => (
  <div className="col-md-6">
    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static">
        <strong className="d-inline-block mb-2 text-primary">{zero}</strong>
        <h3 className="mb-0">{one}</h3>
        <div className="mb-2 text-muted">{two}</div>
        <p className="card-text mb-auto">{three}</p>
        <a href="#" className="stretched-link">繼續閱讀...</a>
      </div>
      <div className="col-auto d-none d-lg-block">
        <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
      </div>
    </div>
  </div>
)

const Index = () => {
  return (
    <div className="row">
      <Index2 zero="最新案件" one="資管系作業一" two="三月二號" three="這是內容啊啊啊啊啊"/>
      <Index2 zero="最佳案件" one="資管系作業二" two="九月二號" three="這是內容啊啊啊啊啊"/>
    </div>
  )
}
ReactDOM.render(<Index />, document.querySelector('#rowcard'))
