import React, { useState } from 'react';
import styled from 'styled-components';

const tabItems = [
  {
    id: '1',
    name: 'Эквайринг',
  },
  {
    id: '2',
    name: 'Политика',
  },
  {
    id: '3',
    name: 'Сотрудники',
  },
  {
    id: '4',
    name: 'Остатки на счетах',
  },
  {
    id: '5',
    name: 'Профильные организации',
  },
];

const Tabs = styled.div`
  width: 100%;
  padding: 0 32px;
  border-bottom: 1px solid #D0D7DD;
`;

const TabItems = styled.div`
  display: flex;
  margin: 0 auto -1px;
`;

const Tab = styled.div`
  position: relative;
  flex-shrink: 0;
  height: 32px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 16px;
  border-radius: 8px 8px 0 0;
  border-bottom: ${(props) => (props.active ? '1px solid white' : '1px solid #D0D7DD')};
  border-top: 1px solid #D0D7DD;
  border-left: 1px solid #D0D7DD;
  border-right: 1px solid #D0D7DD;
  background: ${(props) => (props.active ? 'white' : '#F2F4F7')};
  color: #1F1F22;
  transition: 0.2s background-color ease-in-out;
  cursor: pointer;
  margin-left: -1px;
  white-space: nowrap;
  &:after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    height: 32px;
    border: 1px solid #FFDD64;
    pointer-events: none;
    border-radius: 8px 8px 0 0;
    transition: 0.2s opacity ease-in-out;
    opacity: 0;
    z-index: 2;
  }
  &:focus, &:focus-visible {
    outline: none;
    &:after {
      opacity: 1;
    }
  }
  &:hover {
    background: white;
  }
`;

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState('');
  return (
    <Tabs>
      <TabItems>
        {tabItems.map((item) => (
          <Tab key={item.id} onClick={() => setActiveTab(item.id)} active={item.id === activeTab} tabIndex="0">
            {item.name}
          </Tab>
        ))}
      </TabItems>
    </Tabs>
  );
};

export default TabsComponent;
