import React, { ReactElement, ReactNode } from 'react';
import combineClass from '../../utils/combineClass';
import { CLASS_PREFIX } from '../constants';
import Aside from './aside';
import './layout.scss';

const childrenHasAside = (children: ReactNode): boolean => {
  if (children instanceof Array) {
    return children.some((node: ReactElement) => node.type === Aside);
  } else {
    return false;
  }
};

const Layout: React.FunctionComponent<React.HTMLAttributes<HTMLElement>> = (props): ReactElement => {
  const { className = '', children, ...restProps } = props;
  const asideClassName = childrenHasAside(children) ? `${CLASS_PREFIX}layout-with-aside` : '';

  return (
    <section className={combineClass('layout', asideClassName, className)} {...restProps}>
      {children}
    </section>
  );
};

export default Layout;
