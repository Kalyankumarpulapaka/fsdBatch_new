const Hello=(props)=>{
    console.log(props)
    return (
   <div> <p> Welcome to my application Guys :</p>
        <p> Please Login Here:{props.name }</p>
  </div> )                                      
 }
 export default Hello;