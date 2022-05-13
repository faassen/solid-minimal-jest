import { Component } from "solid-js";
import { useRoutes, Link, useParams } from "solid-app-router";
import { cleanup, fireEvent, render, screen } from "solid-testing-library";

const App: Component = () => {
  const Routes = useRoutes(routes);
  return (
    <div>
      <Routes />
    </div>
  );
};

const RootPage: Component = () => {
  return (
    <div>
      <Link href="/item">Items Link</Link>
    </div>
  );
};

const ItemCollectionPage: Component = () => {
  return (
    <div>
      Item Collection Page <Link href="/item/3">Item Link</Link>
    </div>
  );
};

const ItemPage: Component = () => {
  const params = useParams();
  return <div>Item Page for {params.id}</div>;
};

const NotFoundPage: Component = () => {
  return <div>Not Found</div>;
};

const routes = [
  {
    path: "/",
    component: RootPage,
  },
  {
    path: "/item",
    component: ItemCollectionPage,
  },
  {
    path: "/item/:id",
    component: ItemPage,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];

describe("Routing", () => {
  afterEach(cleanup);
  test("it starts with zero", () => {
    render(() => <App />);
    const link = screen.getByText("Items Link");
    expect(link).toBeInTheDocument();
  });
});

export {};
