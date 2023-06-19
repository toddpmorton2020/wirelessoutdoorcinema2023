import React from "react"

const WarnIcon = ({ className = "", ...props }) => {
  return (
    <>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 53.5 47"
        className={className}
        {...props}

      >
        <g id="NewGroupe1">
          <g id="NewGroup2-4">
            <path
              d="m2.1,44L26.2,2.3h0c.2-.3.5-.3.6-.3s.4,0,.6.3l24.1,41.7c.2.3,0,.6,0,.7,0,.1-.2.3-.6.3H2.7c-.3,0-.5-.2-.6-.3,0-.1-.2-.4,0-.7h0Zm.6,3h48.2c1,0,1.8-.5,2.3-1.3.5-.8.5-1.8,0-2.7L29.1,1.3c-.5-.8-1.3-1.3-2.3-1.3s-1.8.5-2.3,1.3L.4,43c-.5.8-.5,1.8,0,2.7.5.8,1.3,1.3,2.3,1.3h0Z"
              style={{ fill: "#fed332" }}
            />
          </g>
        </g>
        <text
          transform="translate(20.8 38.9)"
          style={{
            fill: "#fff",
            fontFamily: 'ArialRoundedMTBold, "Arial Rounded MT Bold"',
            fontSize: 35,
          }}
        >
          <tspan x={0} y={0}>
            !
          </tspan>
        </text>
      </svg>
    </>
  )
}

export default WarnIcon
