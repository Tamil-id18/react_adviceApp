import PropTypes from "prop-types";
const userData = [
        {
            name:"Jessica",
            city:"New York",
            description:"Front-End-Developer",
            skills:["UI / UX","Front end Development","HTML","CSS","Javascript","React","Node"],
            online:true,
            profile:"Images/user-1.png" 
        },
        {
            name:"James Anderson",
            city:"Paris",
            description:"Front-End-Developer",
            skills:["UI / UX","Front end Development","HTML","CSS","Javascript","React","Node"],
            online:true,
            profile:"Images/user-2.png" 
        },
        {
            name:"Sam Curran",
            city:"Berlin",
            description:"Front-End-Developer",
            skills:["UI / UX","Front end Development","HTML","CSS","Javascript","React","Node"],
            online:false,
            profile:"Images/user-3.png" 
        }
    ]

function User (props){
return(
    <div className="card-container">
        <span className={props.online ? "pro online" : "pro offline"}>
            {props.online ? "Online":"Offline"}</span>
        <img src={props.profile} className="img" alt="user-1" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Messages</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill,index) =>(
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    </div>
)
}

const UserCard = () => {
  return <>
  {userData.map((user,index) =>(
    <User  key={index} name={user.name}
    city={user.city}
    description={user.description}
    online={user.online}
    profile={user.profile}
    skills={user.skills}
     />
  ))}
  </>
  
  
    
  
}

export default UserCard;
// {
//     <User name="Jessica" city="New York" description="Front-End-Developer"
//   skills={["UI / UX","Front end Development","HTML","CSS","Javascript","React","Node"]}
//   online={true} profile="Images/user-2.png"/>;
// }
User.PropTypes ={
    name:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    online:PropTypes.bool.isRequired,
    profile:PropTypes.string.isRequired

};

