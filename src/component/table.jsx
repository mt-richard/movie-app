import { useState } from 'react'
import data from './MOCK_DATA.json'


const Table =()=>{

// console.log(data)

const [search, setSearch] = useState('')
//  console.log(search)
    return(
        <div style={{width:"40rem", padding:"2rem" , border:"1px solid balck"}}>
        <div class="input-group">
            <input type="search" class="form-control" onChange={(e) => setSearch(e.target.value)} placeholder="Search content" />
        </div>

        <hr />
        <h4>List of Users</h4>
            <table class="table">
            <thead>
                <tr >
                    
                    <th>ID</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Table</th>
                </tr>
                </thead>
                <tbody>
                {data
                  .filter((item) => {
                    return search.toLowerCase() === ''
                      ? item
                      : item.first_name.includes(search) || item.gender.toLowerCase().includes(search) || item.last_name.toLowerCase().includes(search);
                })
                .map((item, id)=> 
                    <tr key={id}>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}
export default Table;