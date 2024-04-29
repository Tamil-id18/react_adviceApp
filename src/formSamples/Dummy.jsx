import {useState} from 'react';
import './RegForm.css'




const Dummy = () => {
    const [user,setUser] = useState({
        name:"Ajinkya Rahane",
        age:32,
        gender:"Male",
        isMarried:true,
        country:"India",
        bio:"write something about you"
    });
    function changeHandler (e){
      const name = e.target.name;
      const value = e.target.type === "checked" ? e.target.checked : e.target.value;
      setUser({...user,[name] :value})
    }
  return (
    <>
     <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>{user.name}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <td>Marital Status</td>
                <td>{user.isMarried ? "Married": "Un Married"}</td>
            </tr>
            <tr>
                <td>country</td>
                <td>{user.country}</td>
            </tr>
            <tr>
                <td>Bio</td>
                <td>{user.bio}</td>
            </tr>
        </tbody>
        </table> 
        <form action="">
            <input type="text" placeholder='Enter your name' name='name' value={user.name} onChange={changeHandler} />
            <input type="number" placeholder='Enter your age' name='age' value={user.age} onChange={changeHandler} />
            <div className='gender'>
             <label htmlFor="male">
                <input type="radio" name='gender' id='male' value="male" checked={user.gender=="Male"} onChange={changeHandler} />
                <input type="radio" name='gender' id='female' value="female" checked={user.gender=="Female"} onChange={changeHandler} />
             </label>
            </div>
            <input type="checkbox" name='isMarried' id='isMarried' checked={user.isMarried} onChange={changeHandler}/>
            <div className='select-div'>
                <select name="country" id="country" value={user.country} onChange={changeHandler} >
                    <option value="USA">USA</option>
                    <option value="INDIA">INDIA</option>
                    <option value="UK">UK</option>
                    <option value="RUSSIA">RUSSIA</option>
                </select>
            </div>
            <textarea name="bio" id="bio" cols="30" rows="5" value={user.bio} onChange={changeHandler} />
        </form>
    </>
  );
}

export default Dummy;
