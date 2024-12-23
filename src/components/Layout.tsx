import { Outlet } from 'react-router-dom';
import { useUser } from '../lib/context/user';

function Layout() {
    const user = useUser();

    return (
        <div id="app">
            <nav>
                <div>
                    {user?.current
                        ? (
                            <div className='logged-in-items'>
                                <span><b>Logged in as:</b>{user.current.email}</span>
                                <button
                                    type="button"
                                    onClick={() => user.logout()}
                                    disabled={user.isLoading}
                                >
                                Log Out
                                </button>
                            </div>
                        )
                        : (
                            <div className='logged-out-item'>
                            Using Bryntum Gantt with AppWrite
                            </div>
                        )}
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;