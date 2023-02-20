import React from 'react'


const Test =()=> {
    const [test, setTest]= React.useState([])



    React.useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then( response=>
            response.json())

            .then(main=>
            setTest(main))
            .catch(err=>
                console.log(err))

        
    }, [])




  return (
    <div className="bg-dark mt-3 "> 
    <ul>
      {test.map((item,key)=>(
        <li className="border border-warning mt-1 bg-success text-white  " key={key}>
          {item.name}
        </li>
      )
      )}
    </ul>
    </div>
  )
}

export default Test