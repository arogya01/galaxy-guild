import Card from "./Cards";

const cardsInfo = [
  {
      header:"Empower",
      content:"Galaxy Guild is a blockchain-based Gaming NFT lending and borrowing platform powered by Solana Network."
  },
  {
      header:"Excel",
      content:"Galaxy Guild is a blockchain-based Gaming NFT lending and borrowing platform powered by Solana Network."
  },
  {
      header:"Excite",
      content:"Galaxy Guild is a blockchain-based Gaming NFT lending and borrowing platform powered by Solana Network."
  },

]

export default function CardsWrapper() {
  return (
    <div className="grid p-12 place-content-center sm:grid-cols-3">
     {
       cardsInfo.map( el => {
         return(<>
          <Card header={el.header} content = {el.content} key={el.header} />
         </>)
       }
         
       )
     }
    </div>
  );
}
