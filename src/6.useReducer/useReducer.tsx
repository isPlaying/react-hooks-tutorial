import React, { useReducer, useRef, FormEvent } from 'react';
import { Row, Col, Button } from 'antd';
import './style.css';

interface IListItem {
  name?: string;
}

interface IAction extends IListItem {
  type: string;
  idx?: number;
}

export const SixthExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const myReducer = (
    state: Array<IListItem>,
    action: IAction
  ): Array<IListItem> => {
    switch (action.type) {
      case 'add':
        return [...state, { name: action.name }];
      case 'del':
        return state.filter((_, index) => index !== action.idx);
      default:
        return state;
    }
  };
  const [items, dispatch] = useReducer(myReducer, []);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef && inputRef.current) {
      if (!inputRef.current.value.trim()) return;
      dispatch({
        type: 'add',
        name: inputRef.current.value
      });
      inputRef.current.value = '';
    }
  };
  const handleDel = (idx: number) => {
    dispatch({
      type: 'del',
      idx
    });
  };
  return (
    <Row type="flex" justify="center">
      <Col className="gutter-row">
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} />
        </form>
        <ul>
          {items.map((item: IListItem, idx: number) => (
            <li key={idx} className="list-item">
              {item.name} <Button onClick={() => handleDel(idx)}>x</Button>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};
