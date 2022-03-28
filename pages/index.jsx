import React, { useCallback, useEffect, useState } from "react";
import { Wrapper } from "../utils/globalComponents";
import { Button } from "antd";
import styled from "styled-components";

const CustomBtn = styled(Button)`
  width: 130px;
  min-width: 130px;
  margin: 15px;
  height: 35px;
  border-radius: 5px;
`;

const TimeP = styled.p`
  font-size: 38px;
  font-weight: bold;
`;

const App = () => {
  const interValue = 33;
  const [sec, setSec] = useState("0");
  const [nanoSec, setNanoSec] = useState("0");
  const [startFlag, setStartFlag] = useState(false);
  const [toStop, setToStop] = useState(false);

  let timeIng;

  const startAction = useCallback(() => {
    timeIng = setInterval(() => {
      setNanoSec((prev) => {
        return parseInt(prev) + interValue / 10;
      });
    }, interValue);
    setStartFlag(true);
  }, [sec, nanoSec, toStop]);

  const stopAction = useCallback(() => {
    setToStop(true);
    console.log(timeIng);
  }, [toStop]);

  useEffect(() => {
    if (parseInt(nanoSec) >= 99) {
      setNanoSec("00");
      setSec((prev) => {
        return parseInt(prev) + 1;
      });
    }
  }, [nanoSec]);

  return (
    <Wrapper hight="100vh">
      {/** 타입 뷰*/}
      <Wrapper hight="35vh">
        <TimeP>
          {parseInt(sec) <= 9 ? `0${sec}` : sec} :
          {parseInt(nanoSec) <= 9
            ? `0${Math.floor(nanoSec)}`
            : Math.floor(nanoSec)}
        </TimeP>
      </Wrapper>
      {/** 버튼 뷰*/}
      <Wrapper hight="20vh" direction="row" wrap="true">
        <CustomBtn loading={startFlag} onClick={startAction} type="primary">
          START
        </CustomBtn>
        <CustomBtn type="primary">RECODE</CustomBtn>
        <CustomBtn onClick={stopAction} type="danger">
          STOP
        </CustomBtn>
        <CustomBtn type="default">RESET</CustomBtn>
      </Wrapper>
      {/** 레코드 뷰*/}
      <Wrapper hight="45vh"></Wrapper>
    </Wrapper>
  );
};

export default App;
