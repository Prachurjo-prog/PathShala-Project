import Footer from "@/Components/Shared/Footer";
import NavBar from "@/Components/Shared/NavBar";


const AuthLayout = ({children}) => {
    return (
        <div>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    );
};

export default AuthLayout;