import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div style={containerStyle}>
      <PostComment />
      <PostComment />
      <PostComment />
    </div>
  )
}

// ✅ Container styling: center content and stack vertically
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // justifyContent: 'center',
  minHeight: '100vh', // full screen height
  backgroundColor: '#f8f8f8',
  gap: 20, // space between posts
  padding: 20
}

const cardStyle = {
  width: 300,
  backgroundColor: "#ffffff",
  borderRadius: 10,
  border: "1px solid #ccc",
  padding: 16,
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  fontFamily: "Arial, sans-serif"
}

function PostComment() {
  return (
    <div style={cardStyle}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <img
          src="https://imgs.search.brave.com/6UqCRW1l9jrXtFqTN3WWDqeHHdFDR5Bqj7LMSt2sby8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWF0Y2hhcmVzaWRl/bnQuY29tL2Fzc2V0/cy9uZXdfbWFpbi9i/bHVlLXVuaS03YTA3/ZTEzNTFkZmM0ODE0/ZDEzNzkyM2ZmYzll/ODNkZDg1YmJiNjZk/ZGJhNjgzMDgxODJh/ZWYyNDJiM2JlZDY3/LnBuZw"
          alt="Profile"
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            objectFit: "cover"
          }}
        />
        <div style={{ marginLeft: 12 }}>
          <div style={{ fontWeight: "bold", fontSize: 14 }}>Hithx</div>
          <div style={{ fontSize: 12, color: "gray" }}>Follower 12M</div>
        </div>
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.5 }}>
        Wanna check the post and earn money? Know how... in my DM.
      </div>
    </div>
  )
}

export default App
