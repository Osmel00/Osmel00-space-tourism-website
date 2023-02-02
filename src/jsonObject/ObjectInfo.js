// import img from "../images/icons-images/destination/image-moon.png"
export const info = {
  
   
    destination:  [{
    id : crypto.randomUUID() ,
    title: "MOON",
    text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travelTime: "3 DAYS",
    img:"image-moon.png",
  },
   {
    id : crypto.randomUUID(),
    title: "MARS",
    text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    travelTime: "9 MONTHS",
    img:"image-mars.png",
  },

  {
    id : crypto.randomUUID(),
    title: "EUROPA",
    text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    travelTime: "3 YEARS",
    img:"image-europa.png",
  }, 
  {
    id : crypto.randomUUID(),
    title: "TITAN",
    text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    travelTime: "7 YEARS",
    img:"image-titan.png",
  },],



  crew:[{
  id : crypto.randomUUID(),
  rango: "COMMANDER",
  name:"Douglas Hurley",
  text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  img:"image-douglas-hurley.png",
},

{
  id : crypto.randomUUID(),
  rango: "Mission Specialist",
  name:"MARK SHUTTLEWORTH",
  text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  img:"image-mark-shuttleworth.png",
},
{
  id : crypto.randomUUID(),
  rango: "PILOT",
  name:"Victor Glover",
  text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  img:"image-victor-glover.png",
},
{
  id : crypto.randomUUID(),
  rango: "Flight Engineer",
  name:"Anousheh Ansari",
  text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  img:"image-anousheh-ansari.png",
},
  ],
  technology:[{
    id : crypto.randomUUID(),
    typeTech: "LAUNCH VEHICLE",
    text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch",
    img:"image-launch-vehicle-landscape.jpg",
    imgXL:"image-launch-vehicle-portrait.jpg",
  },
  
  {
    id : crypto.randomUUID(),
    typeTech: "SPACEPORT",
    text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    img:"image-spaceport-landscape.jpg",
    imgXL:"image-spaceport-portrait.jpg"
  },
  {
    id : crypto.randomUUID(),
    typeTech: "SPACE CAPSULE",
    text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    img:"image-space-capsule-landscape.jpg",
    imgXL:"image-space-capsule-portrait.jpg",
  },
  
  ],
     
    

    

};
//image-mark-shuttleworth.png image-victor-glover.png  image-anousheh-ansari.png
console.log(info.crew[2]);