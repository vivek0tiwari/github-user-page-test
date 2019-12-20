import React from "react";
import logo from "./logo.svg";
const getDayDiff = (date) =>{
    const oldDate = new Date(date)
    const today = Date.now();
    const diff =today.getTime() - oldDate.getTime();
    return diff/(1000 * 3600 * 24);
}
const Repository = (props) =>{
const repos = props.repos.map((repo)=>{
    return(
<li key={repo.id} >
    <div className='repo-item'>
      <h2>{repo.name}</h2>
      <p className='fade-font-color'>{repo.description}</p>
      <div className='users-repository'>
        <p>{repo.language}</p>
        <p>{repo.license?repo.license.name:''}</p>
        <p>{repo.updated_at }</p>
      </div>
    </div>
  </li>
    )
})
  return (
    <div className="user-details">
    <div className='tab-container'>
      <ul className='tab-list fade-font-color'>
        <li>Overview</li>
        <li className='active-tab'>Repository</li>
        <li>Stars</li>
        <li>Followers</li>
        <li>Following</li>
      </ul>
      <div className='tab-content'>
        <ul className='users-repository'>
          {repos}
        </ul>
      </div>
    </div>
  </div>
  );
}
export default Repository;