import { useLoaderData } from "@remix-run/react";
import { useQuery } from "@sanity/react-loader";
import type { MetaFunction } from "@vercel/remix";
import { loadQuery } from "~/sanity/loader.server";
import { SERVICES_QUERY } from "~/sanity/queries";
import { Service } from "~/sanity/types";
import { PortableText } from "@portabletext/react";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const initial = await loadQuery<Service[]>(SERVICES_QUERY);

  return { initial, query: SERVICES_QUERY, params: {} };
};

export default function Index() {
  const { initial, query, params } = useLoaderData<typeof loader>();

  const { data, loading, error } = useQuery(query, params, {
    // @ts-expect-error typing needs some work
    initial,
  });

  console.log(data);

  if (error) {
    throw error;
  } else if (loading && !data) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      {data?.map((service) => (
        <div key={service._id}>
          <h2>{service.title}</h2>
          <PortableText value={service?.description.content} />
          {/* <p>{service.description}</p> */}
        </div>
      ))}
    </section>
  );
}
