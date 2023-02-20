import React from 'react'

const Form =()=> {
    const [name,setName]=React.useState("");
    const [surname,setSurname]=React.useState("");
    const [file,setFile]=React.useState()



    // const add = (data)=> {

    //     fetch("https://jsonplaceholder.typicode.com/posts" , {
    //       method: "POST",
    //       body: JSON.stringify(data)
    //     })
    //     .then( res => console.log(res))
    //     .then(data => console.log(data))
    //     .catch(err=> console.log(err))
    
        
    console.log()
      
    //   add({
    //     name,
    //     surname,
    //     file
    //   })
    const handleSubmit = (e) => {
        e.prevent.Default();
        const data ={
            name,
            file,
            surname,
        }
        const formData = new FormData()
        formData.append("name", name)
        formData.append("surname", surname)
        formData.append("file", file)

        
        fetch("https://jsonplaceholder.typicode.com/posts" , 
        {
            method: "POST",
            body: formData
        }
        
        )
        




    } 










  return (

    <div>
        <form onSubmit={handleSubmit}>
            <div className='form-control bg-primary mt-2 w-25'>
                <label className='mt-1 text-white' onChange={(e)=> setName(e.target.value)}>Name</label>
                <input  type='text' className='form-control'/>
                <label className='mt-1 text-white'  onChange={(e)=> setSurname(e.target.value)}> Surname</label>
                <input  type='text' className='form-control'/>
                <label className='mt-1 text-white' onChange={(e)=> setFile(e.target.file)}> File</label>
                <input  type='file' className='form-control'/>
                <button className=' btn btn-warning mt-1 w-100' type='submit'>Add</button>

            </div>



        </form>
    </div>
  )}


export default Form