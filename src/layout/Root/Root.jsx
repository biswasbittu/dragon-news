
import { Outlet, useNavigation } from 'react-router';
import Header from '../../components/Header/Header';
import Latestnews from '../../components/Latestnews/Latestnews';
import Navbar from '../../components/Navbar/Navbar';
import Leftaside from '../../components/LeftAside/Leftaside';
import Rightaside from '../../components/Rightaside/Rightaside';
import Loading from '../../components/pages/Loading/Loading';

const Root = () => {
    const { state } = useNavigation();
    return (
        <div className='container mx-auto'>
            <header className='mt-8'>
                <Header />
                {import.meta.env.VITE_name}
                <section className='w-11/12 mx-auto my-3'>
                    <Latestnews />
                </section>
                <nav className='w-11/12 mx-auto my-3' >
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-3  grid grid-cols-12 gap-4'>
                <aside className='col-span-3 sticky h-fit top-0'>
                    <Leftaside></Leftaside>
                </aside>
                <section className=" col-span-6">
                    {state == 'loading' ? <Loading /> : <Outlet></Outlet>}
                </section>
                <aside className='col-span-3 sticky h-fit top-0'>
                    <Rightaside />
                </aside>

            </main>
        </div>
    );
};

export default Root;