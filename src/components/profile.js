import React from 'react';
import { Link } from 'react-router-dom';


const Profile = (props) => {
    console.log(props)
  return (
    <>
      <Link to={{
          pathname:`${props.match.url}/posts`
      }}>
        posts of profile
      </Link>
    </>
  );
}

export default Profile;
