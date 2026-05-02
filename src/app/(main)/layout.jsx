import AllBooks from "@/Components/BooksCard.jsx/AllBooks";
import NavBar from "@/Components/Shared/NavBar";


const LayoutPage = () => {
    return (
        <div>
            <NavBar/>
            <AllBooks/>
        </div>
    );
};

export default LayoutPage;