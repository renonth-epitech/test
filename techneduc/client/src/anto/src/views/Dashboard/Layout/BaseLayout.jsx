import Bar from './TopBar';
import Sidebar from './SideBar';

const BaseLayout = () => {
    return <div style={{
        padding: '30px 0px 0px 0px'
    }}>
        <Bar />
        <Sidebar />
    </div>;
};

export default BaseLayout;
