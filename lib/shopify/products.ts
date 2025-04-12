export type ShopifyImage = {
  src: string;
  altText: string | null;
};

export type ShopifyProduct = {
  id: string;
  title: string;
  handle: string;
  description: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: ShopifyImage[];
};

/**
 * Fetches all products from Shopify
 */
export async function getAllProducts(): Promise<ShopifyProduct[]> {
  try {
    const res = await fetch(
      `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/${process.env.SHOPIFY_API_VERSION}/graphql.json`,
      {
        method: 'POST',
        headers: {
          'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_TOKEN!,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `{
            products(first: 12) {
              edges {
                node {
                  id
                  title
                  handle
                  description
                  priceRange {
                    minVariantPrice {
                      amount
                      currencyCode
                    }
                  }
                  images(first: 4) {
                    edges {
                      node {
                        src
                        altText
                      }
                    }
                  }
                }
              }
            }
          }`
        })
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const json = await res.json();
    
    // Transform the data structure for easier consumption
    return json.data.products.edges.map((edge: any) => {
      const product = edge.node;
      return {
        id: product.id,
        title: product.title,
        handle: product.handle,
        description: product.description,
        priceRange: product.priceRange,
        images: product.images.edges.map((imgEdge: any) => ({
          src: imgEdge.node.src,
          altText: imgEdge.node.altText
        }))
      };
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

/**
 * Fetches a single product by handle from Shopify
 */
export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  try {
    const res = await fetch(
      `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/${process.env.SHOPIFY_API_VERSION}/graphql.json`,
      {
        method: 'POST',
        headers: {
          'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_TOKEN!,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `{
            productByHandle(handle: "${handle}") {
              id
              title
              handle
              description
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 10) {
                edges {
                  node {
                    src
                    altText
                  }
                }
              }
            }
          }`
        })
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch product: ${res.status}`);
    }

    const json = await res.json();
    const product = json.data.productByHandle;
    
    if (!product) {
      return null;
    }
    
    return {
      id: product.id,
      title: product.title,
      handle: product.handle,
      description: product.description,
      priceRange: product.priceRange,
      images: product.images.edges.map((imgEdge: any) => ({
        src: imgEdge.node.src,
        altText: imgEdge.node.altText
      }))
    };
  } catch (error) {
    console.error(`Error fetching product with handle ${handle}:`, error);
    return null;
  }
}