import { useDispatch, useSelector } from 'react-redux';
import { autoLogin, logout } from './store/login';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import Loading from './store/helper/Loading';
import Feed from './components/Feed';
import Button from './components/Button';

function App() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.login.user);
  const [pages, setPages] = useState([1]);

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  function handlePage() {
    setPages((pag) => [...pag, pages.length + 1]);
  }

  return (
    <div className="flex min-h-screen w-full justify-center">
      <section className="relative mt-24 w-96">
        <h1
          onClick={() => dispatch(logout())}
          className={`text-2xl font-semibold after:content-[''] after:border-2 after:border-black after:h-3 after:w-3 after:absolute after:right-0 after:top-4 after:rounded-full  ${
            data && 'after:bg-green-500 after:cursor-pointer'
          }
          `}
        >
          Mini Dogs
        </h1>
        {loading ? (
          <Loading />
        ) : data ? (
          <div className="flex flex-col items-end">
            {pages.map((page) => (
              <Feed key={page} page={page} />
            ))}
            <Button
              onClick={handlePage}
              className="flex animeLeft rounded-full w-6 p-6 items-center justify-center"
            >
              <div className="h-4 w-[2px] bg-white after:content-[''] after:h-4 after:w-[2px] after:bg-white after:inline-block after:rotate-90 after:mb-10"></div>
            </Button>
          </div>
        ) : (
          <Login />
        )}
      </section>
    </div>
  );
}

export default App;
