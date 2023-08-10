import React, { useEffect, useState } from 'react'
import './Ctr.css'





const Ctr = () => {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState(null);
  const [value, setValue] = useState(null);
  const [date, setDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;


  // const [users, setUsers] = useState([]);
  const getUsers = async () => {
    let url = 'https://api.spacexdata.com/v3/capsules';

    if (state !== null || value !== null || date !== null) {
      url = `https://api.spacexdata.com/v3/capsules?status=${state}&type=${value}&original_launch=${date}`;
    }

    const response = await fetch(url);
    const finalData = await response.json();
    console.log(finalData);
    setUsers(finalData);
  };

  useEffect(() => {
    getUsers();
    console.log(getUsers)
  }, [state, value, date]);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = users.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    
    <div className="container">
               
    {
        users.map((el) => {
            return (

                <div className="card_item" key={el.capsule_serial}>
                    <div className="card_inner">
                        {/* <img src={el.avatar_url} alt="" /> */}
                        <div className="userName">{el.status}</div>
                        <div className="userUrl">{el.original_launch}</div>
                        <div className="detail-box">

                            <div className="gitDetail"><span>Articles</span>23</div>
                            <div className="gitDetail"><span>Following</span>45</div>
                            <div className="gitDetail"><span>Followers</span>11</div>
                        </div>
                        <button className="seeMore">See More</button>
                       
                    </div>
                  

                </div>
                
            )
            
        })
    }


     
    <div className="pagination">
        {Array.from({ length: Math.ceil(users.length / cardsPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>




</div>        
  )
}

export default Ctr