import React from 'react'

function List({items,handleDelete,handleEdit}) {
  return (
    <div >
        {items.map((item) => {
            const {id,title} = item
            return (
            <article key={id}>
                <p>{title}</p>
                <div className='btn'>
                    <button type="button" className='editbtn' onClick={() => handleEdit(id)}>Edit</button>
                    <button type="button" className='delbtn' onClick={() => handleDelete(id)}>Delete</button>
                </div>
            </article>
            )
        })}
    </div>
  )
}

export default List