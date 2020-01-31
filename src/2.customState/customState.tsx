import React from 'react';
import { Form, Input, Row, Col } from 'antd';
import 'antd/es/input/style/css'; // 加载 CSS
import 'antd/es/form/style/css'; // 加载 CSS
import { useForm } from './useForm';

export const SecondExample: React.FC<{}> = () => {
  const [values, handleChange] = useForm({
    firstName: '',
    lastName: ''
  });

  return (
    <Row type="flex" justify="center">
      <Col className="gutter-row" span={12}>
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 6 }}>
          <Form.Item label="First Name">
            <Input
              id="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input
              id="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
