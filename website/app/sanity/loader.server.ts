import * as queryStore from "@sanity/react-loader";
import { client } from "~/sanity/client";

const clientwithToken = client.withConfig({
  token: process.env.SANITY_READ_TOKEN,
});

// We need to set the client used by `loadQuery` here, it only affects the server and ensures the browser bundle isn't bloated
queryStore.setServerClient(clientwithToken);

export const { loadQuery } = queryStore;
