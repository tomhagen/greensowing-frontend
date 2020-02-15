import { withRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children);

  let className = child.props.className || "";
  if (
    router.asPath === props.as ||
    (router.asPath === props.href && props.activeClassName)
  ) {
    className = `${className} ${props.activeClassName}`.trim();
    // className =
    //   `/${router.pathname.split("/")[1]}` === props.href ? `active` : null;
  }

  delete props.activeClassName;

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default withRouter(ActiveLink);
