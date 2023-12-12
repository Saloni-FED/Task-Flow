export const signin = (req, res) => {
  res.send("fake signin section");
  const body  = req.body;
  console.log(body)
};
export const signup = (req, res) => {
  res.send("fake login section");
  const { body } = req.body;
  console.log(body);
};
