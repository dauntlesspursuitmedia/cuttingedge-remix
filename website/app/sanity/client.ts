import { createClient } from "@sanity/client";
import {
  stegaEnabled,
  projectId,
  dataset,
  studioUrl,
  apiVersion,
} from "./projectDetails";

// Do not import this into client-side components unless lazy-loaded
export const client = createClient({
  projectId,
  dataset,
  useCdn: true,

  perspective: "published",
});
