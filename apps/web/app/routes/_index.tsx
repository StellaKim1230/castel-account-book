import { json, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Castel Account Book' },
    { name: 'description', content: 'Account Book of Lucas and Stella.' },
  ];
};

// Server-side rendering in Remix
export async function loader() {
  const apiUrl =
    process.env.NODE_ENV === 'development'
      ? process.env.DEV_API_URL
      : process.env.API_URL;

  const res = await fetch(`http://${apiUrl}:4000/users`);
  const data = await res?.json();
  return json(data);
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Hello world!</h1>
      <>
        {data?.length > 0 && (
          <>
            {data[0].email}: {data[0].name}
          </>
        )}
      </>
    </div>
  );
}
