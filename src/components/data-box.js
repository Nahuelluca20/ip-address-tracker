import React from "react";
import styled from "styled-components";

const DataboxStyled = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #fff;
  color: #000;
  border-radius: 12px;
  height: 350px;
  text-align: center;
  position: absolute;
  margin: 0 20px;
  left: 0;
  right: 0;
  top: 200px;
  span {
    font-size: 12px;
    color: #969696;
    font-weight: 700;
    letter-spacing: 2px;
  }
  h3 {
    margin: 5px 0 5px 0;
  }
  .box {
    div {
      margin: 30px 0;
    }
  }
  @media screen and (min-width: 1024px) {
    height: 200px;
    margin: 0 100px;
    .box {
      display: grid;
      column-gap: 20px;
      grid-template-columns: repeat(4, 220px);
      div {
        text-align: left;
      }
    }
    
  }
`

export default function dataBox({ ip, isp, city, region, timezone, country }) {
  return (
    <DataboxStyled>
      <div className="box">
        <div>
          <span>IP ADDRESS</span>
          <h3>{ip}</h3>
        </div>
        <div>
          <span>LOCATION</span>
          <h3>{city}, {region}, {country}</h3>
        </div>
        <div>
          <span>TIMEZONE</span>
          <h3>{timezone}</h3>
        </div>
        <div>
          <span>ISP</span>
          <h3>{isp}</h3>
        </div>
      </div>
    </DataboxStyled>
  );
}
