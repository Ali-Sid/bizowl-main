// ServiceBox.jsx
import React from 'react';

const ServiceBox = ({ service }) => {
  return (
    <li
      style={{
        listStyle: "none",
        padding: "5px",
        flexBasis: "auto",
        flexGrow: 1,
        margin: "10px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        display: "flex", // Ensure the li itself is a flex container
        flexDirection: "column", // Stack children vertically
        alignItems: "center", // Center-align children horizontally
        textAlign: "center",
        position: "relative",
      }}
      key={service.id}
    >
      <div
        className="d-flex"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100px",
        }}
      >
        {/* Card structure */}
        <div
          className="card"
          style={{
            height: "6rem",
            width: "3rem",
            border: "0.2rem solid",
            borderColor: "white",
          }}
        >
          <div
            className="card-body"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className="d-flex justify-content-center"
              style={{
                border: "2px solid",
                borderColor: service.borderColor,
                borderRadius: "0.5rem",
                padding: "0.5rem",
                width: "100%",
                height: "50px",
                fontSize: "large",
                backgroundColor: "#F7FCFB",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Safely map over service.letters */}
              {(service.letters || []).map((letter) => (
                <div key={letter.id}>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "2rem",
                      color: letter.color1,
                    }}
                  >
                    {letter.letter1}
                  </span>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "2rem",
                      color: letter.color2,
                    }}
                  >
                    {letter.letter2}
                  </span>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "2rem",
                      color: letter.color3,
                    }}
                  >
                    {letter.letter3}
                  </span>
                </div>
              ))}
            </div>
            <p style={{ color: "#407BFF", fontSize: "small" }}>Portfolio</p>
          </div>
        </div>
        {/* Additional card structure and content */}
      </div>
    </li>
  );
};

export default ServiceBox;