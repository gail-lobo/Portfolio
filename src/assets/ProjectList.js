import Portfolio from "../assets/Portfolio.png";
import EmployeeManagement from "../assets/EmployeeManagement.png";
import TicTacToe from "../assets/TicTacToe.png";
import PourMeAGlass from "../assets/PourMeAGlass.png";
import MemoryGame from "../assets/MemoryGame.png";
import Pawz from "../assets/Pawz.png";

const ProjectList = [
  {
    name: "Pawz: Pet Supplies eComm App",
    image: Pawz,
    skills: ["MERN Stack,", "Stripe Payment Integration"],
    features: [
      "Responsive App",
      "Categories & Search for Pet Supplies",
      "User Registration/ Login",
      "Dynamic Cart Updation",
      "Checkout Form integrated with Stripe Payment System",
      "Admin portal for Product and Order Management",
    ],
    gitLink: "https://github.com/gail-lobo/Pawz",
  },
  {
    name: "Pour Me A Glass, Please!",
    image: PourMeAGlass,
    skills: ["React,", "REST API,", "Axios library,", "CSS"],
    features: [
      "Responsive App",
      "Filter & Search for Beverages",
      "Detail Page contains recipes",
      "Navigation between pages",
    ],
    gitLink: "https://github.com/gail-lobo/PourMeAGlass",
  },
  {
    name: "Memory Game",
    image: MemoryGame,
    skills: ["React,", "CSS,", "Animations"],
    features: [
      "Match identical pairs of images in a grid",
      "Animations when there is a match/no match",
      "Notify user when game is over",
      "Play Again button - resets the game",
    ],
    gitLink: "https://github.com/gail-lobo/MemoryGame",
  },
  {
    name: "Tic Tac Toe",
    image: TicTacToe,
    skills: ["React,", "CSS"],
    features: [
      "Game of 'X's and 'O's",
      "Notify Player's turn",
      "Notify double clicking is not allowed",
      "Notify game winner or if it's a draw",
      "Reset button to play again",
    ],
    gitLink: "https://github.com/gail-lobo/TicTacToe",
  },
  {
    name: "Employee Management",
    image: EmployeeManagement,
    skills: ["React,", "JSON-Server,", "Bootstrap,", "CSS"],
    features: [
      "Navigable App to manage employee details",
      "View Employee Details",
      "Create New Employee",
      "Update Employee Details",
      "Validation errors for incorrect entry format",
      "Delete Employee details",
    ],
    gitLink: "https://github.com/gail-lobo/EmployeeManagement",
  },
  {
    name: "Portfolio",
    image: Portfolio,
    skills: ["React,", "CSS,", "Animations,","Material UI"],
    features: [
      "Showcases my skills, projects, education and work experience",
      "Navigable and Responsive",
      "Links to GitHub, LinkedIn and Email",
    ],
    gitLink: "https://github.com/gail-lobo/Portfolio",
  },
];

export default ProjectList;
