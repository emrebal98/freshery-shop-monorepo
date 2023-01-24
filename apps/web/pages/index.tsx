import type { User } from 'database';
import { useState } from 'react';
import { Button } from 'ui';

function Web() {
  const [users, setUsers] = useState<User>();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const response = await fetch('http://localhost:3333/api/v1/users');
    const data: User = await response.json();
    setUsers(data);
    setLoading(false);
  };

  return (
    <div>
      <h1>Web</h1>
      <Button onClick={handleClick}>Get Users</Button>
      <p>
        {/* eslint-disable-next-line no-nested-ternary */}
        {loading
          ? 'Loading...'
          : users
          ? JSON.stringify(users, null, 2)
          : 'Click to fetch users'}
      </p>
    </div>
  );
}

export default Web;
