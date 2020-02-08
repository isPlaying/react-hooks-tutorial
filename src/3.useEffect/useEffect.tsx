import React, { useState, ChangeEvent, useEffect } from 'react';
import { Form, Input, Row, Col, Button } from 'antd';
import 'antd/es/input/style/css'; // 加载 CSS
import 'antd/es/form/style/css'; // 加载 CSS
import { useFetch } from './useFetch';

interface IName {
  firstName: string;
  lastName: string;
}

export const ThirdExample: React.FC<{}> = () => {
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

  useEffect(() => {
    // If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument.
    // 去掉注释可看效果
    // console.log('render');
  }, [state.firstName]);

  useEffect(() => {
    // DOM mutations
    const onMouseMove = (e: MouseEvent) => {
      // 去掉注释可看效果
      // console.log(e);
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  });
  const [number, setNumber] = useState<number>(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${number}`);
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
          <Form.Item label="Increment">
            <Button
              type="primary"
              onClick={() => {
                setNumber(c => c + 1);
              }}
            >
              Increment
            </Button>
          </Form.Item>
          <div>count:{number}</div>
          <div>{loading ? 'loading' : data}</div>
        </Form>
      </Col>
    </Row>
  );
};
