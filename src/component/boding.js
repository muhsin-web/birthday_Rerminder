import './bodying.css'
import List from './list';
import useFetch from './useFetch'


export default function Bodying() {

    const {data} = useFetch('http://localhost:8000/people')
    console.log(data)

  return (
    <main className='site-main'>
        <h1 className="text-dark title">Birthday Remainder</h1>

        <div className="board">
                        {data && <List info = {today(data)}/>}

                            <h3 className='upcoming text-dark'>Upcomign Birthdays</h3>
                            {data && <List info = {upcomingBirthdays(data, 4)} upcoming = {true}/>}

                            <h3 className="upcoming text-dark">Recent Birthdays</h3>
                       {data &&  <List info = {rcentBirthdays(data)} recent = {true}/>}
        </div>
    </main>
  )
}


function today(person){
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();

    let filter = person.filter(data => {

        let days = new Date(data.birthday).getDate();
        let months = new Date(data.birthday).getMonth();
        
        return currentDay == days && currentMonth == months;
    })
    return filter
}


// upcoming birthdays

function upcomingBirthdays(person, toMonth){
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDate()

    
    let filter = person.filter(upcoming => {
        let month = new Date(upcoming.birthday).getMonth()

        let date = new Date(upcoming.birthday).getDate()
        if(currentDay == date)return;
 
        return month >= currentMonth && month <= currentMonth + 1;

    })
    return filter;
}

// RECENT BIRTHDAYS

function rcentBirthdays(person, toMonth){
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDate()

    
    let filter = person.filter(upcoming => {
        let month = new Date(upcoming.birthday).getMonth()
        let date = new Date(upcoming.birthday).getDate()
        if(currentDay == date)return;
 
        return month <= currentMonth && month >= currentMonth - 7;

    })
    return filter;
}






