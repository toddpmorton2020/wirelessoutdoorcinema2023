import React from "react"

const SturdyIcon = ({ className = "", ...props }) => {
  return (
    <>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 77.6 54.4"
        className={className}
        {...props}

      >
        <path
          d="m76.7,39.4h-14.3v-12.3c0-.5-.4-.9-.9-.9h-14.3v-12.2c0-.5-.4-.9-.9-.9h-14.3V.9c0-.5-.4-.9-.9-.9H.9c-.5,0-.9.4-.9.9v52.6c0,.5.4.9.9.9h75.8c.5,0,.9-.4.9-.9v-13.1c0-.5-.4-.9-.9-.9h0Zm-61.5,1.8v11.3H1.8v-11.3s13.4,0,13.4,0Zm60.7,0v11.3h-28.5v-11.3h28.5Zm-15.2-13.1v11.4h-28.5v-11.4h28.5ZM1.8,13.1V1.8h28.5v11.4H1.8Zm15.1,13.1v-11.4h28.5v11.4s-28.5,0-28.5,0Zm-15.1,0v-11.4h13.4v11.4H1.8Zm43.7,14.9v11.3h-28.5v-11.3h28.5Zm-15.1-13.1v11.4H1.8v-11.4h28.6Z"
          style={{ fill: "#fff" }}
        />
      </svg>
    </>
  )
}

export default SturdyIcon
