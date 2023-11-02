export default function Heading(props) {
    return (
        // children is a property that every prop has 
        <h2 className="site-header">{props.children}</h2>
    );
}