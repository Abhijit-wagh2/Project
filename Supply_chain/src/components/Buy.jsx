import {ethers} from "ethers"
import "./Buy.css";


const Buy=({state})=>{

  const buyChai = async (event) => {
    event.preventDefault();
  
    try {
      console.log("Initiating transaction...");
      const { contract } = state;
      if (!contract) {
        alert("Contract instance not found. Please check your state.");
        return;
      }
  
      const name = document.querySelector("#name").value;
      const message = document.querySelector("#message").value;
  
      console.log("Name:", name);
      console.log("Message:", message);
  
      const amount = { value: ethers.utils.parseEther("0.001") };
      console.log("Amount:", amount);
  
      const transaction = await contract.buyChai(name, message, amount);
  
      console.log("Transaction:", transaction);
      await transaction.wait();
  
      alert("Transaction is successful!");
      window.location.reload();
    } catch (error) {
      console.error("Error during transaction:", error);
      alert(`Transaction failed: ${error.message}`);
    }
  };
  

    return  (
      <div className="center">
       <h1>Thanks</h1>
        <form onSubmit={buyChai}>
          <div className="inputbox">
            <input type="text" required="required" id="name" />
            <span>Name</span>
          </div>
          <div className="inputbox">
            <input type="text" required="required" id="message" />
            <span>Message</span>
          </div>
          <div className="inputbox">
            <input type="submit" value="Pay" />
          </div>
        </form>
          
        </div>
      );
}
export default Buy;