import React, { useEffect, useState } from 'react'



function ApiFetch() {
    function getData(){
        fetch('https://reqres.in/api/users?page=2')
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data)
            setname(data.data[0].first_name)
            console.log(data.data[0].avatar)
            setImage(data.data[0].avatar)
        })
    }
    const [name, setname] = useState("")
    const [image, setImage] = useState("")
    useEffect(()=>{
        getData();
    },[])
  return (
    <>
    <div>ApiFetch</div>
    <h2>{`${name}`}</h2>
    <img src={`${image}`} alt="" />
    </>
  )
}

export default ApiFetch