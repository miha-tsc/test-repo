// EDIT THIS FILE: replace each sample SVG path with your own photo, e.g. assets/images/photo01.jpg.
// Add at least 12 ORIGINAL photographs: 6 from each student.
// SDG 12 – Responsible Consumption and Production.
// category must be one of the filter keys in index.html:
//   "hrana" (food waste), "moda" (sustainable fashion), "reciklaza" (recycling),
//   "energija" (energy), "plastika" (plastic). "vse" = show all (do not use it on a photo).
const galleryCategories = {
  vse:       {label:"All photos",          icon:"i-loop"},
  hrana:     {label:"Food waste",          icon:"i-apple"},
  moda:      {label:"Sustainable fashion", icon:"i-shirt"},
  reciklaza: {label:"Recycling",           icon:"i-recycle"},
  energija:  {label:"Energy",              icon:"i-bolt"},
  plastika:  {label:"Plastic",             icon:"i-drop"}
};

const galleryPhotos = [
  {src:"assets/images/sample-01.svg",title:"Leftovers in the bin",description:"About one third of all food produced is lost or wasted.",category:"hrana",author:"Student A"},
  {src:"assets/images/sample-02.svg",title:"A second life for clothes",description:"Second-hand shopping keeps clothes out of landfills.",category:"moda",author:"Student A"},
  {src:"assets/images/sample-03.svg",title:"Sorting at home",description:"Separating paper, glass and packaging makes recycling possible.",category:"reciklaza",author:"Student A"},
  {src:"assets/images/sample-04.svg",title:"Lights left on",description:"Saving energy at home reduces the footprint of everything we use.",category:"energija",author:"Student A"},
  {src:"assets/images/sample-05.svg",title:"Single-use everywhere",description:"Plastic bottles and bags are used for minutes but last for centuries.",category:"plastika",author:"Student A"},
  {src:"assets/images/sample-06.svg",title:"Compost, not trash",description:"Food scraps can become nutrient-rich soil instead of waste.",category:"hrana",author:"Student A"},
  {src:"assets/images/sample-07.svg",title:"Fast fashion pile",description:"Cheap clothes worn only a few times create mountains of textile waste.",category:"moda",author:"Student B"},
  {src:"assets/images/sample-08.svg",title:"Repair café",description:"Mending clothes and devices extends their life and saves resources.",category:"moda",author:"Student B"},
  {src:"assets/images/sample-09.svg",title:"From bottle to bench",description:"Recycled materials can be turned into new, useful products.",category:"reciklaza",author:"Student B"},
  {src:"assets/images/sample-10.svg",title:"Powered by the sun",description:"Renewable energy makes production more sustainable.",category:"energija",author:"Student B"},
  {src:"assets/images/sample-11.svg",title:"Bring your own bag",description:"Reusable bags and bottles cut down on plastic waste.",category:"plastika",author:"Student B"},
  {src:"assets/images/sample-12.svg",title:"Local market",description:"Buying local, seasonal food means less packaging and transport.",category:"hrana",author:"Student B"}
];
