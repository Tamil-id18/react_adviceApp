import {useState} from 'react';

const UserDetails = () => {
    const [user,setUser] = useState({
        fname:"Tamil",
        lname:"maran",
        age:22
    })
    

function handleChange(e){
    setUser({...user,[e.target.name]:e.target.value})
}
   
  return (
    <>
    <h2>
        {user.fname}{user.lname},{user.age}
        </h2>
        <form>
            <input type="text" placeholder='Enter user fname' name='fname' value={user.fname} onChange={handleChange}/>
            <input type="text" placeholder='Enter user lname' name='lname' value={user.lname} onChange={handleChange}/>
            <input type="text" placeholder='Enter user age' name='age' value={user.age} onChange={handleChange}/>
        </form>
    
    </>
  );
}

export default UserDetails;
