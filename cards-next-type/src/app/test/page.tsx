async function fetchData() {
  const response = await fetch("http://localhost:4000/cards", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Something went wrong with fetching the data");
  }
  return response.json();
}

//   fetch("http://localhost:4000/cards", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data));

interface CardProps {
  map: Function;
  cards: {
    id: number;
    name: string;
  }[];
}

export default async function TestPage() {
  const data = await fetchData();
  return (
    <div>
      {data.map((cards:any) => {
        return <div key={cards.id}>{cards.name}</div>;
      })}
      <h1>Test Page</h1>
    </div>
  );
}
