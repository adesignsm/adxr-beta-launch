import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "ud4t52ur",
    dataset: "production",
    useCdn: true,
});