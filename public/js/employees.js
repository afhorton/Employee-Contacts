const employeeList = [
  {
    id: 100,
    name: "Ronald O'Donnell",
    position: "Burger Technician",
    email: "ronald.odonnell@odonnells.gov",
    phone_num: "555-5555",
    department: "Timely Nutrition",
    photo: {
      src: "img/ronaldOdonnell.jpeg",
      alt: "Ronald O'Donnell",
      size: { width: 300, height: 200 },
    },
    office_address: {
      street: "123 Kansas St.",
      city: "Floridaville",
      state: "New Mexico",
    },
  },

  {
    id: 200,
    name: "Rosie O'Donnell",
    position: "Ambassador for Consumable Delivery",
    email: "rosie.odonnell@odonnells.gov",
    phone_num: "555-5556",
    department: "Consumable Delivery",
    photo: {
      src: "img/rosieOdonnell.jpeg",
      alt: "Rosie O'Donnell",
      size: { width: 300, height: 200 },
    },
    office_address: {
      street: "123 Kansas St.",
      city: "Floridaville",
      state: "New Mexico",
    },
  },

  {
    id: 300,
    name: "Cheese Burglar",
    position: "Chief Stock Warden",
    email: "cheese.burglar@odonnells.gov",
    phone_num: "555-5557",
    department: "Consumable Security",
    photo: {
      src: "img/cheeseBurglar.jpeg",
      alt: "Cheese Burglar",
      size: { width: 300, height: 200 },
    },
    office_address: {
      street: "67 Skid Row",
      city: "Los Angeles",
      state: "California",
    },
  },

  {
    id: 400,
    name: "Royal Flush",
    position: "Urinal Safety Instructor",
    email: "royal.flush@odonnells.gov",
    phone_num: "555-5558",
    department: "Training & Professional Development",
    photo: {
      src: "img/royalFlush.jpeg",
      alt: "Royal Flush",
      size: { width: 300, height: 200 },
    },
    office_address: {
      street: "1 Back Alley",
      city: "Befront",
      state: "Maine",
    },
  },

  {
    id: 500,
    name: "Mugs",
    position: "Customer Liason",
    email: "mugs@odonnells.gov",
    phone_num: "555-5559",
    department: "Customer Satisfaction & Brand Imaging",
    photo: {
      src: "img/mugs.jpeg",
      alt: "Mugs",
      size: { width: 300, height: 200 },
    },
    office_address: {
      street: "123 Kansas St.",
      city: "Floridaville",
      state: "New Mexico",
    },
  },

  {
    id: 600,
    name: "Dewey Cheatum",
    position: "Director of Community Outreach",
    email: "dewey.cheatum@odonnells.gov",
    phone_num: "555-5560",
    department: "Non-Profit Ventures",
    photo: {
      src: "img/deweyCheatum.png",
      alt: "Dewey Cheatum",
      size: { width: 300, height: 200 },
    },
    office_address: {
      street: "36 Jade Wharf",
      city: "Crystal Beach",
      state: "Canary Islands",
    },
  },

  {
    id: 700,
    name: "Etha Green",
    position: "Nutrition Auditor",
    email: "etha.green@odonnells.gov",
    phone_num: "555-5561",
    department: "Consumable Nutrition",
    photo: {
      src: "img/ethaGreen.jpeg",
      alt: "Etha Green",
      size: { width: 300, height: 200 },
    },
    office_address: {
      street: "123 Kansas St.",
      city: "Floridaville",
      state: "New Mexico",
    },
  },

  {
    id: 800,
    name: "Owe Behave",
    position: "Chief Executive Officer",
    email: "owe.behave@odonnells.gov",
    phone_num: "555-5562",
    department: "Executive Enforcement",
    photo: {
      src: "img/oweBehave.jpeg",
      alt: "Owe Behave",
      size: { width: 300, height: 200 },
    },
    office_address: {
      street: "Willow Path",
      city: "Division Bell Cemetary",
      state: "Decomposition",
    },
  },

  {
    id: 900,
    name: "Ernie O'Happy",
    position: "Company Mascot",
    email: "ernie.ohappy@odonnells.gov",
    phone_num: "555-5563",
    department: "Marketing",
    photo: {
      src: "img/ernieOhappy.jpeg",
      alt: "Ernie O'Happy",
      size: { width: 300, height: 200 },
    },
    office_address: {
      street: "Glacier Rock Prison",
      city: "Detroit",
      state: "Michigan",
    },
  },

  {
    id: 1000,
    name: "Mr. Blick",
    position: "Sanitation Engineer",
    email: "racoon.services@odonnells.gov",
    phone_num: "555-5564",
    department: "Sanition",
    photo: {
      src: "img/mrBlick.jpeg",
      alt: "Mr.Blick",
      size: { width: 300, height: 200 },
    },
    office_address: {
      street: "Behind the Wendy's",
      city: "Minot",
      state: "North Dakota",
    },
  },
];

function EmployeeContactsView() {
    return   <>
        {employeeList.map(
            (employee) => 
            <EmployeeView key={employee.id} employeeData={employee} />
        )}
        </>;
}