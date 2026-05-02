const page = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  console.log(data);

  console.log(id);

  const book = data.find((b) => b.id == id);
  console.log(book);

  return <div className="mt-20 container mx-auto">book details
  <p>{book.title}</p>
  </div>;
};

export default page;
