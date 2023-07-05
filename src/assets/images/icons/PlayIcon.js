import React from "react"

const PlayIcon = ({ className = "" }) => {
  return (
    <>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20.1 20.1"
        className={className}
      >
        <path
          d="m10,20.1C4.5,20.1,0,15.6,0,10S4.5,0,10,0s10,4.5,10,10-4.5,10-10,10Zm0-19.1C5.1,1,1,5.1,1,10s4.1,9,9,9,9-4.1,9-9S15,1,10,1Z"
          style={{ fill: "#3b82f6" }}
        />
        <path
          d="m7.8,6.3s0,0,0,0c0,0,0,0,0,.2v7.1c0,0,0,.1,0,.2,0,0,.1,0,.2,0l6.2-3.6c0,0,0,0,0-.2s0-.1,0-.2l-6.2-3.5s0,0,0,0Z"
          style={{ fill: "#3b82f6" }}
        />
      </svg>
    </>
  )
}

export default PlayIcon
