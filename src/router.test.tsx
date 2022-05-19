import { Component } from "solid-js";
import { useRoutes, Link, useParams, Router } from "solid-app-router";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "solid-testing-library";
import userEvent from "@testing-library/user-event";

const App: Component = () => {
  const Routes = useRoutes(routes);
  return (
    <Router>
      <Routes />
    </Router>
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
  test("basic routing", async () => {
    const user = userEvent.setup();
    render(() => <App />);
    expect(
      screen.getByText("Items Link", { exact: false })
    ).toBeInTheDocument();
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    await user.click(link);

    expect(
      screen.getByText("Item Collection Page", { exact: false })
    ).toBeInTheDocument();

    // alternative: try to wait for the routing to complete
    // we should now on the page we routed to
    // waitFor(() => {
    //   expect(
    //     screen.getByText("Item Collection Page", { exact: false })
    //   ).toBeInTheDocument();
    // });

    // const itemsLink = screen.getByRole("link");
    // expect(itemsLink).toBeInTheDocument();
    // user.click(itemsLink);
    // await Promise.resolve();
    // expect(
    //   screen.getByText("Item Page for 3", { exact: false })
    // ).toBeInTheDocument();
  });
});

export {};
