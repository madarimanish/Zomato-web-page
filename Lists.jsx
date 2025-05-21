import { FaAngleRight } from "react-icons/fa6"; 

let Lists=()=>{

    let cities = ["Agra", "Ahmedabad", "Ajmer", "Alappuzha", "Allahabad", "Amravati", "Amritsar", "Aurangabad", "Bengaluru",
  "Bhopal", "Bhubaneswar", "Chandigarh", "Chennai", "Coimbatore", "Cuttack", "Darjeeling", "Dehradun", "Delhi NCR",
  "Dharamshala", "Gangtok", "Goa", "Gorakhpur", "Guntur", "Guwahati", "Gwalior", "Haridwar", "Hyderabad",
  "Indore", "Jabalpur", "Jaipur", "Jalandhar", "Jammu", "Jamnagar", "Jamshedpur", "Jhansi", "Jodhpur",
  "Junagadh", "Kanpur", "Khajuraho", "Khamgaon", "Kharagpur", "Kochi", "Kolhapur", "Kolkata", "Kota",
  "Lucknow", "Ludhiana", "Madurai", "Manali", "Mangalore", "Manipal", "Meerut", "Mumbai", "Mussoorie",
  "Mysore", "Nagpur", "Nainital", "Nashik", "Neemrana", "Ooty", "Palakkad", "Patiala", "Patna",
  "Puducherry", "Pune", "Pushkar", "Raipur", "Rajkot", "Ranchi", "Rishikesh", "Salem", "Shimla",
  "Siliguri", "Srinagar", "Surat", "Thrissur", "Tirupati", "Trichy", "Trivandrum", "Udaipur", "Vadodara",
  "Varanasi", "Vellore", "Vijayawada"];




    return <>
    <section id="Listsection">

        <div id="ListDiv1">  
        <h1 class="List-heading">Popular locations in  &nbsp;
            <img class="india-flag" src={"https://img.freepik.com/free-vector/illustration-india-flag_53876-27130.jpg?ga=GA1.1.733999918.1721124181&semt=ais_hybrid&w=740"} alt="" />
           &nbsp;  India
        </h1>
        <p class="List-pragraph">From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, &nbsp; &nbsp; &nbsp; Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; just like you, to find your next great meal.</p>

        </div>
        <div className="ListContainer">
            {
                cities.map((city)=>(
                    <button key={city}className="CityButton">{city} Restaurants      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;      <FaAngleRight /></button>
                ))
            }
        </div>


    </section>
    </>
}
export default Lists;