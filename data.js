import mongoose from 'mongoose';
import MenuItem from './models/menuItem.js'; // Make sure correct path

const MONGO_URL = "mongodb+srv://prj:prj@cluster0.fu0kc3q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const menuItems = [
  {
    name: "Cheeseburger",
    description: "Juicy grilled beef patty with cheese",
    category: "Main Courses",
    price: 180,
    imageUrl: "https://www.google.com/imgres?q=cheeseburger%20image%20url&imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3616956%2Fpexels-photo-3616956.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-daniel-reche-718241-3616956.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcheeseburger%2F&docid=9YD7c0SFRFwPKM&tbnid=YPQYWEz9Wopv2M&vet=12ahUKEwiCsPa6uPqMAxUCxjgGHYbwFz0QM3oECBkQAA..i&w=5329&h=3553&hcb=2&ved=2ahUKEwiCsPa6uPqMAxUCxjgGHYbwFz0QM3oECBkQAA"
  },
  {
    name: "French Fries",
    description: "Crispy golden fries",
    category: "Appetizers",
    price: 80,
    imageUrl: "https://www.google.com/imgres?q=french%20fries%20image%20url&imgurl=https%3A%2F%2Ft4.ftcdn.net%2Fjpg%2F01%2F26%2F02%2F33%2F360_F_126023380_C1VoNoSBkz0hJziJTVDUUFcOo9EgIfxL.jpg&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dfries&docid=q8MmhCqAyPZuMM&tbnid=GZ_YLN7CWONGkM&vet=12ahUKEwjV4IbKuPqMAxXiyzgGHa_rCPkQM3oECGoQAA..i&w=540&h=360&hcb=2&ved=2ahUKEwjV4IbKuPqMAxXiyzgGHa_rCPkQM3oECGoQAA"
  },
  {
    name: "Chocolate Cake",
    description: "Rich chocolate layered cake",
    category: "Desserts",
    price: 120,
    imageUrl: "https://www.google.com/imgres?q=cholate%20cake%20image%20url&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1370520449%2Fphoto%2Fslice-of-chocolate-cake-with-glaze.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DKK-h7w4l0FNA0YMWvkr1X8UrAAB77z0f5tTByBYgReM%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fchocolate-cake&docid=thFB4ftgHqcTNM&tbnid=RBcXNL2J1Aw7pM&vet=12ahUKEwjNmKbTuPqMAxWHzDgGHcrTJSUQM3oECBsQAA..i&w=612&h=408&hcb=2&ved=2ahUKEwjNmKbTuPqMAxWHzDgGHcrTJSUQM3oECBsQAA"
  }
];

async function seedData() {
  try {
    await mongoose.connect(MONGO_URL);
    await MenuItem.insertMany(menuItems);
    console.log("Menu Items Seeded Successfully!");
    process.exit();
  } catch (error) {
    console.error("Seeding Failed", error);
    process.exit(1);
  }
}

seedData();
