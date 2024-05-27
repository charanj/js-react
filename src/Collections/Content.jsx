import React from 'react'

const Content = (props) => {
  const {data} = props
  return (
    <div>
      <div className=" flex-item container mt-3">
        <div className="row align-items-center mb-3">
          <div className="col-auto">
            <button className="btn btn-primary">Download data</button>
          </div>
          <div className="col d-flex justify-content-end align-items-center">
            <span className="me-2">87</span>
            <i className="bi bi-download ms-2"></i>
            <i className="bi bi-trash ms-2"></i>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4>{data.title}</h4>
            <p>{data.content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content