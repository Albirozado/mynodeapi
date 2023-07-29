import  express  from 'express';
const users = [
  {
    firstName: "Dasrosas",
    lastName: "Simione",
    age: 21,
  },
  {
    firstName: "Bino",
    lastName: "Alfrehedo",
    age: 19,
  },
];

const router = express.Router();

router.get("/", (req, res) => {
  res.send(users); // En lugar de "res.send('users')" enviamos la lista de usuarios.
});

export default router;
