# Next JS 12

## Static generation

Using this generation, the HTML page is generated at build time (the page is generated when running `next build`). It can be cached by a CDN.

### Static generation with data

Some pages require fetching external data for pre-rendering. There are two scenarios, and one or both might apply. In each case, you can use these functions that Next.js provides:

    The page content depends on external data: Use getStaticProps.
    The page paths depend on external data: Use getStaticPaths (usually in addition to getStaticProps).

You should use getStaticProps if:

    The data required to render the page is available at build time ahead of a user’s request
    The data comes from a headless CMS
    The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance
    The data can be publicly cached (not user-specific). This condition can be bypassed in certain specific situation by using a Middleware to rewrite the path.

## Server-Side Rendering (SSR or Dynamic Rendering)

If a page uses **SSR**, the HTML page is generated on each request.

To use it:

```
export default function Page({ data }) {
  // Render data...
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

```
