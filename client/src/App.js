import React, { useEffect, useState } from 'react'

function App() {

  const[ backendData, setBackendData] = useState( [{}] )

  useEffect(() => {
      const apiUrl = process.env.REACT_APP_API_BASE_URL;
      fetch(apiUrl).then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
        setBackendData(data.users)
      }
    )
  }, [])

  return (
    <div>
      {backendData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        backendData.map((user, index) => (
          <div key={index}>
            <p>ID: {user.id}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Created At: {new Date(user.created_at).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App
