import React, {useEffect, useState} from 'react'

const Page1 = () => {

    const [data, setData] = useState([]);

    // GET DATA FROM API
    useEffect( ()=>{

        fetch("https://reqres.in/api/users?page=2").then( (result)=> {
            result.json().then( (res)=>{
                // console.warn(res);
                setData(res.data)
            })
        })

    },[])


    console.warn(data);

    return(
        <>
        <h1>Page 1 working</h1>
        <table border="1">
            <tr>
                <th>Avatar</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
            {
                data.map( (item)=>
                    <tr>
                        <td><img src={item.avatar} /></td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                    </tr>
                )
            }
        </table>

    </>
    )
}

export default Page1;