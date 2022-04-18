import { useEffect, useState } from 'react';
import axios from 'axios';

type Users = {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  }
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}[]


const baseUrl: string = 'https://jsonplaceholder.typicode.com/users'

function App() {
  const [users, setUsers] = useState<Users>([]);

  console.log(users)

  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="App">
      <ul>
        {users.map((user) => (
          <li>
            {user.id}: {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
