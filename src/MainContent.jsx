import React from 'react'
import Content from './Collections/Content'
import { useDispatch, useSelector } from 'react-redux'
import { RECEIVED_COLLECTIONS,ADD_COLLECTION } from './constants'


const MainContent = () => {
  const dispatch = useDispatch()
  const collections = useSelector(state => state.collections)
  const addCollection = () => {
    dispatch({
      type:ADD_COLLECTION,
      data:{
        id:Math.random(),
        title: "My collection",
        content: "This is a paragraph with some content describing the collection. You can add more text here to describe the collection in detail."
      }
    })
  }
  return (
    <main className="col-md-10">
      <h2>My Collections</h2>
      <p>Introducing collections the abb jkfdfdf your way.</p>
      <div className="text-center">Showing {collections.length} results</div>
      <hr />
      <div className="extra-content">
        {collections.map((collection) => {
          return <Content data={collection} key={collection.id}/>
        })}

       
          <div className="plus-container">
            <div className='plus-icon-container' onClick={addCollection}>
            <i className="plus-icon" >+</i>
            </div>
            
          </div>
        

      </div>

    </main>
  )
}

export default MainContent