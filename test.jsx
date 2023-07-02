import * as React from "react";
import "./styles.css";

export default function App() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users?page=2");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  return (
    <div className="App">
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div>
                   
                   <p><strong>User Id : </strong>{user.id}</p>
                   <strong>Avatar : </strong> <img key={user.avatar} src={user.avatar} />
                <p>
                  <strong> First Name : {user.first_name}</strong>
                </p>
            
              </div>
            );
          })}
      </div>
    </div>
  );
}
