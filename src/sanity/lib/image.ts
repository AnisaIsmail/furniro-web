// import imageUrlBuilder from '@sanity/image-url';
// import { client } from './client';

// const builder = imageUrlBuilder(client);

// export function urlFor(source: any) {
//   return builder.image(source);
// }

import imageUrlBuilder from '@sanity/image-url';
import { client } from './client';

// Define a specific type for source, according to what the Sanity image object looks like
interface SanityImageSource {
  _id: string;
  asset: { _ref: string };
  // Add other fields you might need from the source object
}

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
