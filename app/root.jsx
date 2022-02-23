import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import NProgress from "nprogress";
import nProgressStyles from "nprogress/nprogress.css";
import { useTransition } from "remix";

export function meta() {
  return { title: "New Remix App" };
}

export let links = () => {
  // if you already have one only add this stylesheet to your list of links
  return [{ rel: "stylesheet", href: nProgressStyles }];
};

export default function App() {
  let transition = useTransition()

  React.useEffect(() => {
    console.log('root useEffect')
  }, [])


  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
