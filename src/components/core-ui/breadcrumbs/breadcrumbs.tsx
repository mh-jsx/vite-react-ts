import { ReactNode } from "react";
import { Params, useMatches } from "react-router-dom";

interface IBreadMatch {
  id: string;
  pathname: string;
  params: Params<string>;
  data: unknown;
  handle: { crumb: (data?: unknown) => JSX.Element };
}

interface IBreadcrumb {
  pathname: string;
  crumb: ReactNode;
  id: string;
}

function BreadCrumbs() {
  const matches: Array<IBreadMatch> = useMatches() as Array<IBreadMatch>;

  const crumbs: Array<IBreadcrumb> = matches
    // first get rid of any matches that don't have handle and crumb
    .filter(match => Boolean(match.handle?.crumb))
    // now map them into an array of elements, passing the loader
    // data to each one
    .map(match => ({ crumb: match.handle.crumb(match.data), pathname: match.pathname, id: match.id }));

  return (
    <ol>
      {crumbs.map(({ crumb, id }) => (
        <li key={id}>{crumb}</li>
      ))}
    </ol>
  );
}

export default BreadCrumbs;
