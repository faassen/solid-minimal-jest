import { Component } from "solid-js";
import { Link as SolidAppRouterLink, useParams } from "solid-app-router";
import { RouteNode } from "typesafe-routes";

export const Link: Component<
  Omit<Parameters<typeof SolidAppRouterLink>[number], "href"> & {
    href: { $: string };
  }
> = (p) => (
  <SolidAppRouterLink {...p} href={p.href.$}>
    {p.children}
  </SolidAppRouterLink>
);

export function useRouteParams<T extends RouteNode<string, any, any>>(
  route: T
): ReturnType<T["parseParams"]> {
  return route.parseParams(useParams()) as any;
}
