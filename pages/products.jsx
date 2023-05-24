import { Amplify, API, withSSRContext } from "aws-amplify";
import awsmobile from "@/aws-exports";
import { listProducts, getProduct } from "@/graphql/queries";

Amplify.configure({ ...awsmobile, ssr: true });

export default function Products({ products }) {
  if (products.length === 0)
    return (
      <>
        <h2>There are no products!!</h2>
      </>
    );
  return (
    <>
      {/* <p>{JSON.stringify(products)}</p> */}
      <p>Products</p>
    </>
  );
}

export async function getStaticProps() {
  const products = await API.graphql({
    query: listProducts,
    authMode: "API_KEY",
  });
  return {
    props: {
      products: products.data.listProducts.items,
    },
  };
}
