import StoryBooks from "@/Components/BooksCard.jsx/StoryBooks";
import NavBar from "@/Components/Shared/NavBar";
import Footer from "@/Components/Shared/Footer";

const AllBooksPage = async ({searchParams}) => {
  const { catagory } = await searchParams;
  console.log(catagory);
  const res = await fetch("http://localhost:3000/catagory.json");
  const catagories = await res.json();
  // console.log(catagories);


  // const filteredCatagories = catagories.filter((catagory) => catagory.catagory.toLowerCase() === catagory.toLowerCase());
  // console.log(filteredCatagories);

  return (
    <div className="">
      <NavBar />
      <div className="container mx-auto">
        <h2 className="mt-20 text-4xl font-bold ">All Books Page</h2>
        <div className="flex gap-5 mt-5">
          {catagories.map((catagory) => (
           
              <div className="" key={catagory.id}>
              <p className="btn btn-outline rounded-2xl">{catagory.catagory}</p>
            </div>

            
          ))}
        </div>

        {/* <div>
          {
            filteredCatagories.map((catagory) => (
              <p key={catagory.id}>{catagory.title}</p>
            ))
          }
        </div> */}
      </div>

      <StoryBooks />
      <Footer />
    </div>
  );
};

export default AllBooksPage;
