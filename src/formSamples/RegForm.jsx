import {useState} from 'react';
//import './RegForm.css'

function RegForm() {
    const [user,setUser] = useState({
        name:"Rohit sharma",
        age:30,
        gender:"Male",
        isMarried:true,
        country:"India",
        bio:"Write something about you"
    })
    function changeHadler(e){
        const name= e.target.name;
        //console.log(name)
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUser({...user,[name]:value })
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
                <td>{user.isMarried ? "Married" : "Un Married"}</td>
            </tr>
            <tr>
                <td>Country</td>
                <td>{user.country}</td>
            </tr>
            <tr>
                <td>Bio</td>
                <td>{user.bio}</td>
            </tr>
        </tbody>
     </table>
     <form>
        <input type="text" placeholder='Full name' name='name' value={user.name}  onChange={changeHadler}/>
        <input type="number" placeholder='Age' name='age' value={user.age} onChange={changeHadler}/>
        <div className='gender'>
            <label htmlFor="male">
                <input type="radio" name='gender' id='male' checked={user.gender=="Male"} onChange={changeHadler} value="male"/>
                Male
            </label>
            <label htmlFor="female">
                <input type="radio" name='gender' id='female' checked={user.gender=="Female"} onChange={changeHadler} value="female"/>
                Female
            </label>
        </div>
        <label htmlFor="isMarried">
            <input type="checkbox" id='isMarried' name='isMarried'  checked={user.isMarried} onChange={changeHadler}/>
            IsMarried
        </label>
        <div className='select-div'>
            <label htmlFor="country">Select Your country :</label>
            <select name="country" id="country" value={user.country} onChange={changeHadler} >
                <option value="USA">USA</option>
                <option value="INDIA">INDIA</option>
                <option value="CANADA">CANADA</option>
                <option value="RUSSIA">RUSSIA</option>
            </select>
        </div>
        <textarea name="bio" id="bio" cols="30" rows="5" placeholder='write about you' value={user.bio} onChange={changeHadler} ></textarea>
     </form>
    </>
  );
}

export default RegForm;
