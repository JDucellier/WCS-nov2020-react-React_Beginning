/*********************************/
/******** Code I 've wrote *******/
/*********************************/
/*
const user = {
  name: 'jean',
  avatar: 'https://avatars3.githubusercontent.com/u/23262432?s=460&u=52e8017d3879351e60d44d74cbcf0dab0873dde6&v=4',
  online: true
};

const element = (
  <div className="person-item">
    <img src={user.avatar} className="avatar"/>
    <div>
      <h4>{user.name}</h4>
      <p>{user.online ? 'Online':'Offline'}</p>
    </div>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

/****************************************/
/* Code build for Browser Understanding */
/****************************************/
const user = {
  name: 'jean',
  avatar: 'https://avatars3.githubusercontent.com/u/23262432?s=460&u=52e8017d3879351e60d44d74cbcf0dab0873dde6&v=4',
  online: true 
};


const element =
React.createElement("div", { className: "person-item" },
React.createElement("img", { src: user.avatar, className: "avatar" }),
React.createElement("div", null,
React.createElement("h4", null, user.name),
React.createElement("p", null, user.online ? 'Online' : 'Offline')));




ReactDOM.render(
element,
document.getElementById('root'));