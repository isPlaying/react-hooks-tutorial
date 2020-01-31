import React, { useState, ChangeEvent } from 'react';
import { Form, Input, Row, Col } from 'antd';
import 'antd/es/input/style/css'; // 加载 CSS
import 'antd/es/form/style/css'; // 加载 CSS
interface IName {
  firstName: string;
  lastName: string;
}
export const FirstExample: React.FC<{}> = () => {
  const [state, setState] = useState<IName>({
    firstName: '',
    lastName: ''
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setState({
      ...state,
      [id]: value
    });
  };
  return (
    <Row type="flex" justify="center">
      <Col className="gutter-row" span={12}>
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 6 }}>
          <Form.Item label="First Name">
            <Input
              id="firstName"
              value={state.firstName}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input
              id="lastName"
              value={state.lastName}
              onChange={handleChange}
            />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
