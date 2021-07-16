import React, { Fragment, useContext } from "react";
import { BreadcrumbItem } from "./BreadcrumbItem/BreadcrumbItem";
import { CategoriasContext } from "../../contexts/CategoriasContext";
import { Breadcrumbs as BreadcrumbsComponent, OrderedList } from "./styles";
function Breadcrumbs() {
  const breadcrumbsMenu = useContext(CategoriasContext);
  console.log(breadcrumbsMenu);
  return (
    <BreadcrumbsComponent>
      <OrderedList>
        {breadcrumbsMenu.categorias.current.map((breadcrumb, index, arr) => {
          if (index === arr.length - 1) {
            return <BreadcrumbItem key={index} value={breadcrumb.name} />;
          }
          return (
            <Fragment>
              <BreadcrumbItem key={index} value={breadcrumb.name} />
            </Fragment>
          );
        })}
      </OrderedList>
    </BreadcrumbsComponent>
  );
}

export default Breadcrumbs;
