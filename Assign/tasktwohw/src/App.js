import React , {useState} from 'react'
import List from './List'

function App() {
  const [name, setname] = useState('');
  const [list, setlist] = useState([]);
  const [isediting, setisEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  // const [alert, setAlert] = useState({show:false,msg:'',type:''});

  const handleDelete = (id) => {
    setlist(list.filter((item) => item.id !== id))
  }

  const handleEdit = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setisEditing(true)
    setEditId(id)
    setname(specificItem.title)
  }

  const clearItems = () => {
    setlist([]);
  }

  const hadnleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    if(!name){
      alert('Enter an item')
    }
    else if(name && isediting){
      // edit functionality
      setlist(list.map((item) => {

        if(item.id === editId){
          return {...item,title:name}
        }
        return item
      }))
      setisEditing(false)
      setEditId(null)
      setname('')
    }
    else{
      const newItems = {id: new Date().getTime().toString(),title : name};
      setlist([...list,newItems]);
      setname('');
    }
  }

  return (
    <section>
      <form className='todo form' onSubmit={hadnleSubmit}>
        <h3> Todo-List</h3>
        <div className="formdesign">
          <input type="tex"placeholder='To-do items' value={name} onChange={(e) => setname(e.target.value)}/>
          <button type="submit">{isediting?'edit' : 'submit'}</button>
        </div>
      </form>
      <div className='todo-container'>
        <List items = {list} handleDelete = {handleDelete} handleEdit = {handleEdit}/>
        <button className='clear' onClick={clearItems}>clear Items</button>
      </div>
    </section>
  )
}

export default App