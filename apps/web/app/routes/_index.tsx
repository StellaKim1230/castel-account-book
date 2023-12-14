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
  const res = await fetch('http://localhost:4000/');
  const data = await res.text();
  return json(data);
}

export default function Index() {
  const text = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>{text}</h1>
    </div>
  );
}
