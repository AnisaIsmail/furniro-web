import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './sanity'; // Adjust the import path accordingly

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source).width(400).height(400).url(); // You can adjust width and height as needed
}
