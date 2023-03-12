import Calendar from 'react-calendar';
import '../calendar.css';
import Button from 'react-bootstrap/Button';
import { IoMdToday } from 'react-icons/io';


function Home() {
     const addImage = (value) => {
        let date = value.toString();
        let subDate = date.substring(0,10);
        console.log(subDate);
     }
    
    const clickDay = (value, event) => {
        let date = value.toString();
        let subDate = date.substring(4,10);
        console.log(subDate);
        if  (subDate == "Mar 11") {
        console.log("Hiii");
    }}
    
  return (
    <div className="Home">
      <header> 
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
      </header>
      <body>
          <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"}}>
              <Calendar calendarType="US" next2Label="" prev2Label="" showNeighboringMonth={false} onClickDay={clickDay} tileContent={addImage}/>
        </div>
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </body>
    </div>
  );
}

export default Home;