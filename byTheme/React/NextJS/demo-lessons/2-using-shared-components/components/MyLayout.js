import Header from './Header';

const linkStyle = {
    marginLeft: 15,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = props => (
    <div style={linkStyle}>
        <Header />
        {props.children}
    </div>
);

export default Layout;