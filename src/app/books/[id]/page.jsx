import Image from "next/image";

const page = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("http://localhost:3000/allbooks.json");
  const data = await res.json();
  console.log(data);

  console.log(id);

  const book = data.find((b) => b.bookId == id);
  console.log(book);

  return <div className="mt-20 container mx-auto">book details
  <div>
   <div className="mt-4 flex flex-col md:flex-row gap-5">  
  <Image src={book.image} alt={book.bookName} width={300} height={400} />
  <div className="w-100 h-">
    <h2 className="text-4xl font-medium">{book.bookName}</h2>
    <p className="text-lg font-medium">{book.author}</p>
    <p className="mt-4 ">review: {book.review}</p>
  </div>
    
  </div>
  
  </div>
 
  </div>;
};

export default page;