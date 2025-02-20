import React from "react";

const Profile = () => {
  return (
    <div>
      <h1>Profile Card Challenges</h1>
      <ProfileCard
        name="Jitixa"
        age={30}
        greeting={
          <div>
            <strong>Heelo Jay ! How are you?</strong>
          </div>
        }
      >
        <p>Hobbies : Writing and dancing</p>
        <button>Contact Me</button>
      </ProfileCard>
      <ProfileCard
        name="Punita"
        age={29}
        greeting={
          <div>
            <strong>Heelo Punita ! How are you?</strong>
          </div>
        }
      >
        <p>Hobbies : Writing and dancing</p>
        <button>Contact Me</button>
      </ProfileCard>
    </div>
  );
};

export default Profile;

// function ProfileCard(props) {
//   return (
//     <>
//       <h2>Name : {props.name}</h2>
//       <h3>Age : {props.age}</h3>
//       <p>Greeting : {props.greeting}</p>
//       <div>{props.children}</div>
//     </>
//   );
// }

// // using destructure
// function ProfileCard(props) {
//   const { name, age, greeting, children } = props;
//   return (
//     <>
//       <h2>Name : {name}</h2>
//       <h3>Age : {age}</h3>
//       <p>Greeting : {greeting}</p>
//       <div>{children}</div>
//     </>
//   );
// }

// as pass parameter

function ProfileCard({ name, age, greeting, children }) {
  return (
    <>
      <h2>Name : {name}</h2>
      <h3>Age : {age}</h3>
      <p>Greeting : {greeting}</p>
      <div>{children}</div>
    </>
  );
}
