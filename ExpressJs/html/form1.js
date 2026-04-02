
export default function form1(){

  return  `
  
    <form action="/submit" method="post">
    <input type="text" placeholder="Enter name" />
     <input type="text" placeholder="Enter address" />
      <input type="tel" placeholder="Enter contact" />
      <button type="submit">submit</button>
    </form>
    
  `
  
}