import sanityClient from "@sanity/client";
import ImageUrlBuilder from '@sanity/image-url';
const Client = sanityClient({
    projectId: '1w1lwiho',
    dataset: 'production',
    apiVersion:"2023-01-16",
    token:"skdDP1swAJ670GxunBJXiPHnhOFfh5iQF4aVIXI1jTZdC9azQhLlcU7PXFpOUmQQuY6cgSN93rAMEyHMhCElHXG5vVibVDJtG2lOn4YHbNobKFFm0V9WKnBO5A1xk3GZ9xaVh9DHr54cewNQSmlcjfjru3zhIpKoyTKHlxJ4A2E5aYuqtqHh", 
    useCdn: true // `false` if you want to ensure fresh data
  });
  const builder=ImageUrlBuilder(Client)

  export const urlFor=(source)=>builder.image(source)
export default Client;