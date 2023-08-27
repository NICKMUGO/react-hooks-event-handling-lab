// Code Keypad Component Here

function Keypad (){
const handleInputChange = () => {
console.log('Entering password...');}; 
    return (
        <div> <h2>Keypad Component</h2>
        <input type="password" onChange={handleInputChange} /></div>
    )
}

export default Keypad;