import Image from "next/image";
import Link from "next/link";

const StoryBooks = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  console.log(data);
  return (
    <div className="container mx-auto md:py-12 py-5 ">
      

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5 ">
        {data.map((b) => (
          <div
            key={b.id}
            className="border items-center gap-3 rounded-2xl p-5 hover:shadow-lg transition-shadow duration-300 "
          >
            <div className="flex">
              <Image src={b.image_url} alt={b.id} width={200} height={200} />
              <div>
                <h3 className="text-xl pb-3">{b.bookName}</h3>
                <p className="line-clamp-2">{b.title}</p>
              </div>
            </div>

            <Link href={`/books/${b.id}`}>
              <button className="btn btn-primary">Read</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryBooks;
