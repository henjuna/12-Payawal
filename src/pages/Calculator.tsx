import { Card, Container, Stack } from "react-bootstrap";
import { Buttons } from "../component/Buttons";
import { useState } from "react";
import { CalculatorBtn } from "../component/CalculatorBtn";

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [numIsTrue, setNumIsTrue] = useState<boolean>(false);
  const [opeIsTrue, setOpeIsTrue] = useState<boolean>(false);
  const [timesCounter, setTimesCounter] = useState<number>(0);
  const [isResult, setIsResult] = useState<boolean>(false);
  const handleData = (data: string): void => {
    const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const ope = ["+", "-", "*", "/"];

    if (data === "=") { // output showing
      try { // error handling
        const lastChar = displayValue.charAt(displayValue.length - 1);
        if (ope.includes(lastChar)) {
          const newValue = displayValue.slice(0, displayValue.length - 1);
          setDisplayValue(eval(newValue));
        } else {
          setDisplayValue(eval(displayValue));
        }
        setIsResult(true); // setting of booleans to starting state
        setNumIsTrue(true);
        setOpeIsTrue(false);
        setTimesCounter(0);
      } catch (error) {
        setDisplayValue('Error');
      }
    }

    if ( // Starting another input
      (((displayValue == "0" || displayValue == "Error") && num.includes(data)) ||
        (isResult && num.includes(data))) &&
      data != "0"
    ) {
      setDisplayValue(data);
      setNumIsTrue(true);
      setIsResult(false);
    } else {
      if (data == "C") { // Clearing Input
        setDisplayValue("0");
        setNumIsTrue(false);
        setOpeIsTrue(false);
        setIsResult(false);
        setTimesCounter(0);
      } else if ( // Restricting Leading Zero
        data == "0" &&
        ope.includes(displayValue.charAt(displayValue.length - 1))
      ) {
        setDisplayValue(displayValue);
      } else if (numIsTrue) { // Checking if a number is inputted before placing an operator
        if (ope.includes(data) && !opeIsTrue) {
          if (data != "*") { // not a star
            if (timesCounter != 1) {
              setDisplayValue(displayValue + data);
              setOpeIsTrue(true);
              setTimesCounter(0);
            } else {
              setDisplayValue(displayValue);
            }
          } else if (timesCounter === 0) { // if star, count star
            setDisplayValue(displayValue + data);
            setTimesCounter(1);
          } else if (timesCounter === 1) { // max star input is 2 for power function
            setDisplayValue(displayValue + data);
            setTimesCounter(2);
            setOpeIsTrue(true);
          }
        } else if (num.includes(data)) { // if input is number
          setDisplayValue(displayValue + data);
          setOpeIsTrue(false);
          setTimesCounter(0);
        }
        if (isResult) { // setting result to false when a operator is placed
          setIsResult(false);
        }
      }
    }
  };

  return (
    <Container fluid>
      <div className="calculator-header">
        <h1>CALCULATOR</h1>
      </div>
      <div className="calculator-page">
        <div className="calculator-main">
          <Stack gap={3}>
            <div className="result">
              <Card body className="resultbox">
                {displayValue}
              </Card>
            </div>
            <div className="calcbtn">
              <CalculatorBtn
                color="outline-dark"
                value="7"
                dataFromButton={handleData}
              />
              <CalculatorBtn
                color="outline-dark"
                value="8"
                dataFromButton={handleData}
              />
              <CalculatorBtn
                color="outline-dark"
                value="9"
                dataFromButton={handleData}
              />
              <CalculatorBtn
                color="outline-danger"
                value="C"
                dataFromButton={handleData}
              />
            </div>
            <div className="calcbtn">
              <CalculatorBtn
                color="outline-dark"
                value="4"
                dataFromButton={handleData}
              />
              <CalculatorBtn
                color="outline-dark"
                value="5"
                dataFromButton={handleData}
              />
              <CalculatorBtn
                color="outline-dark"
                value="6"
                dataFromButton={handleData}
              />
              <CalculatorBtn
                color="outline-primary"
                value="+"
                dataFromButton={handleData}
              />
            </div>
            <div className="calcbtn">
              <CalculatorBtn
                color="outline-dark"
                value="1"
                dataFromButton={handleData}
              />
              <CalculatorBtn
                color="outline-dark"
                value="2"
                dataFromButton={handleData}
              />
              <CalculatorBtn
                color="outline-dark"
                value="3"
                dataFromButton={handleData}
              />
              <CalculatorBtn
                color="outline-primary"
                value="-"
                dataFromButton={handleData}
              />
            </div>
            <div className="calcbtn">
              <CalculatorBtn
                color="outline-dark"
                value="0"
                dataFromButton={handleData}
              />
              <CalculatorBtn
                color="outline-primary"
                value="/"
                dataFromButton={handleData}
              />
              <CalculatorBtn
                color="outline-primary"
                value="*"
                dataFromButton={handleData}
              />
              <CalculatorBtn
                color="outline-primary"
                value="="
                dataFromButton={handleData}
              />
            </div>
          </Stack>
        </div>
      </div>
      <div className="home-Btn">
        <Buttons label="Back to Home" to="/" cssscript={"hobbyBtn"} />
      </div>
    </Container>
  );
}
