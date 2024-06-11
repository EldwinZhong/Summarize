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
      setBackendData(data)
    }
  )
}, [])

  return (
    <div>
      {backendData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <p>{backendData}</p>
      )}
    </div>
  )
}

export default App
