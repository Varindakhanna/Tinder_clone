import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {

  const[people,setPeople]=useState([
    {
      name:"Katrina",
      url:"https://images.indianexpress.com/2021/12/katrina-kaif-2-1.jpg"
    },
    {
      name:"Hritik",
      url:"https://pbs.twimg.com/profile_images/1166471091663122433/5ULjGFJS_400x400.jpg"
    },
    {
      name:"Kareena kapoor",
      url:"https://upload.wikimedia.org/wikipedia/commons/6/66/Kareena_Kapoor_at_TOIFA16.jpg"

    }
  ]);

  const swiped=(direction,nameToDelete)=>{
    console.log("removing "+ nameToDelete);


  };

  const outOfFrame=(name)=>{
    console.log(name +" left the screen")

  }



  return (
    <div>
     

      <div className="tinderCards__cardContainer">

      {people.map((person)=>(
        <TinderCard className="swipe"
        key={person.name}
       preventSwipe={["up","down"]}
       onSwipe={(dir)=> swiped(dir,person.name)}
       onCardLeftScreen={()=> outOfFrame(person.name)}
        >
          <div
          style={{ backgroundImage: `url(${person.url})`}}
          className="card"
          >

            <h3>{person.name}</h3>

          </div>

        </TinderCard>

      ))}


      </div>

      

    </div>
  );
}

export default TinderCards;

