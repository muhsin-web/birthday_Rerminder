import React from 'react'

export default function List({info, upcoming, recent}) {

  return (
    <ul>
       { dynamicData(info, upcoming, recent)}
      
    </ul>
  )
}

function dynamicData (data, flag, flag_r){

    const bgColor = flag? {backgroundColor: "#ffe66d"}:{};
    const bgColor_r = flag_r ? "red":"";
    return(
        <>
            {
                data.map((person, index) => {
                    let {age, date} = Old(person.birthday)
    
                    return(


                        <li key={index}>
                        <div className="flex" style={bgColor} id={bgColor_r}>
                           <div className="img">
                           <img src={person.img} alt="img" />
                           </div>
            
                            <div className="title">
                                <h3 className="name">{person.name}</h3>
                                <h5 className="age">{age} years old</h5>
                                <h6 className="name dark-color">{date}</h6>
                            </div>
                        </div>
                    </li>
                    )
                })
            }
        </>
    )
}

function Old(personAge){
    let year = new Date(personAge).getFullYear();
    let currentYear = new Date().getFullYear();
    let month = new Date(personAge).toLocaleString('en-US', { month: 'long'});
    let day = new Date(personAge).getDate();

const dy = function(day){
            if (day > 3 && day < 21) return 'th';
            switch (day % 10) {
                case 0: return "zy"
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
            }

}

const dayPosition = dy(day)
   

    let age = currentYear - year;
    // let date = day dayPosition + ' of ' + month + ' . . .';
    let date = `${day}${dayPosition} of ${month}`

    // const dates = new Date(Date.now());
    // console.log(dates.toLocaleString('en-US', {month: 'long'}));

    return {age, date};
}