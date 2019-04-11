import * as React from 'react';
import FilterLink from '../containers/filterLink';

const Footer = () => (
  <p>
    show:
    {" "}
    <FilterLink filter= "SHOW_ALL">
      Todos
    </FilterLink>
    { ", "}
    <FilterLink filter="SHOW_ACTIVE">
      Activos
    </FilterLink>
    { ", "}
    <FilterLink filter="SHOW_COMPLETED">
      Activos
    </FilterLink>
  </p>
);

export default Footer;