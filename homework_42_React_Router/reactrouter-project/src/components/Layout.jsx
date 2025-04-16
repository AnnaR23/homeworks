import React from 'react';
import Menu from './Menu';
import { Outlet } from 'react-router';

// Layout - компонент, который оборачивает остальные компоненты и рендерит меню и дочерние компоненты.
const Layout = () => {
  return (
    <div>
      <Menu /> {/*меню показывается один раз*/}
      <main>
        <Outlet /> {/*здесь будет рендериться Home/ About/ Contact */}
      </main>
    </div>
  )
}

export default Layout