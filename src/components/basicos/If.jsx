/* esse componente não precisa import react, pois não usa o jsx */ 
export default function (props) {
    if(props.test) {
        return props.children
    } else {
        return false
    }
}