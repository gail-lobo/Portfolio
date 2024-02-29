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
    skills: ["MERN Stack", "Stripe Payment Integration"],
    features: [
      "Responsive app design",
      "Efficient categorization and search for pet supplies",
      "User-friendly registration and login",
      "Dynamic cart updates for smooth shopping",
      "Secure checkout with Stripe integration",
      "Comprehensive admin portal for management",
    ],
    gitLink: "https://github.com/gail-lobo/Pawz",
  },
  {
    name: "Pour Me A Glass, Please!",
    image: PourMeAGlass,
    skills: ["React", "REST API", "Axios library", "CSS"],
    features: [
      "Responsive design optimized for various screen sizes",
      "Intuitive filtering and search options for beverages",
      "Detailed recipe information on beverage detail pages",
      "Seamless navigation between different sections of the app",
    ],
    gitLink: "https://github.com/gail-lobo/PourMeAGlass",
  },
  {
    name: "Memory Game",
    image: MemoryGame,
    skills: ["React", "CSS", "Animations"],
    features: [
      "Engaging gameplay: Match identical pairs of images in a grid",
      "Interactive flip animation when cards do not match",
      "Clear notification when the game ends",
      "Convenient 'Play Again' button to restart the game",
    ],
    gitLink: "https://github.com/gail-lobo/MemoryGame",
  },
  {
    name: "Tic Tac Toe",
    image: TicTacToe,
    skills: ["React", "CSS"],
    features: [
      "Classic 'X's and 'O's gameplay",
      "Informative prompts for player turns and prohibited actions",
      "Clear indication of the winner or a draw",
      "Reset button for easy replayability",
    ],
    gitLink: "https://github.com/gail-lobo/TicTacToe",
  },
  {
    name: "Employee Management",
    image: EmployeeManagement,
    skills: ["React", "JSON-Server", "Bootstrap", "CSS"],
    features: [
      "Efficient employee details management with navigable interface",
      "View employee information",
      "Create new employee profiles",
      "Update employee details",
      "Validation mechanisms to handle incorrect data entries",
      "Secure deletion of employee records",
    ],
    gitLink: "https://github.com/gail-lobo/EmployeeManagement",
  },
  {
    name: "Portfolio",
    image: Portfolio,
    skills: ["React", "CSS", "Animations", "Material UI"],
    features: [
      "Showcase of skills, projects, education, and work experience",
      "Seamless navigation and responsive design for optimal user experience",
      "Direct links to GitHub, LinkedIn, and Email for easy contact",
    ],
    gitLink: "https://github.com/gail-lobo/Portfolio",
  },
];

export default ProjectList;
