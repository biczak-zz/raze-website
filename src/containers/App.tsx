import React, { useState } from 'react';
import TopNav from '@Components/TopNav';

const App = (): JSX.Element => {
  const [page, setPage] = useState<number>(0);

  const pages = [
    {
      label: 'City News',
      href: '/news',
      value: 0,
    },
    {
      label: 'Citizen Creations',
      href: '/creations',
      value: 1,
    },
    {
      label: 'City Features',
      href: '/feautres',
      value: 2,
    },
  ];

  const changePage = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    page: number,
  ): void => {
    event.preventDefault();
    setPage(page);
  };

  return (
    <div>
      <TopNav pages={pages} selected={page} changeHandler={changePage} />
    </div>
  );
};

export default App;
