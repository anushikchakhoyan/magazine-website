import Header from "../Header";
import Footer from "../Footer";

const Sidebar = () => (
    <aside className='w-64 px-3 h-full pt-10 min-h-screen bg-white flex flex-col justify-between'>
        <Header/>
        <Footer/>
    </aside>
)

export default Sidebar;