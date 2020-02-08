import React, { useRef } from 'react';
import { Form, Row, Col, Button } from 'antd';
import 'antd/es/input/style/css'; // 加载 CSS
import 'antd/es/form/style/css'; // 加载 CSS

export const FifthExample: React.FC<{}> = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  return (
    <Row type="flex" justify="center">
      <Col className="gutter-row">
        <Form>
          <input id="firstName" ref={firstNameRef} placeholder="firstName" />
          <input id="lastName" ref={lastNameRef} placeholder="lastName" />
          <Button
            type="primary"
            onClick={() => {
              if (firstNameRef && firstNameRef.current) {
                firstNameRef.current.focus();
                firstNameRef.current.value = 'John';
              }
              if (lastNameRef && lastNameRef.current) {
                lastNameRef.current.value = 'Doe';
              }
            }}
          >
            一键填充
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
