import React from 'react'

const Users =()=> {
  const [users,setUsers]= React.useState([])




  React.useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=> 
      response.json()
      
      )
      .then(melumat=>
        setUsers(melumat) )

      .catch(err => console.log(err))
  },[])


  const add = (data)=> {
    fetch("https://jsonplaceholder.typicode.com/posts" , {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then( res => console.log(res))
    .then(data => console.log(data))
    .catch(err=> console.log(err))

    

  }
  add({
    userId: "123kjckjckjck",
    id: "11111111111111",
    title: "fahovo",
    body: "mxmxmxm"
  })


  return (

    <div> 
    <ul>
      {users.map((item,key)=>(
        <li key={key}>
          {item.name}
        </li>
      )
      )}
    </ul>
    </div>
  )
}

export default Users