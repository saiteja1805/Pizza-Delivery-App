import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "w3rmhm8d",
    dataset: 'production',
    apiVersion: "2023-04-18",
    useCdn: true,
    token: "skzKEmKvNmBb5ZVb3Vor6npt2wTKzdt3rMywbBICpjSHKdQcSWDu4QE0q0ht5fgd7mTctLCTofVaMJusYpkAHfIPl7Kbzj1j4IXjnIIeNxdhIVYQjTBraDrLpIFUzs1ZcSvlkbDItbADSjJHD7P8k0ngqUvqu4cVSMm0hMXsS0UNTJCFntPJ"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)