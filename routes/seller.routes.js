import express from "express";

const router = express.Router();

// mock db
let sellerList = [];

// add seller
router.post("/seller/add", (req, res) => {
  // extract new seller from req.body
  const newSeller = req.body;

  // push new seller to seller list
  sellerList.push(newSeller);

  return res.status(201).send({ message: "Seller is added successfully." });
});

// get seller list
router.get("/seller/list", (req, res) => {
  return res.status(200).send(sellerList);
});

// edit seller
router.put("/seller/edit/:id", (req, res) => {
  // extract seller id to be edited from req.params
  const sellerIdToBeEdited = req.params.id;

  // extract new values from req.body
  const newValues = req.body;

  // check if seller with provided id exists
  const requiredSeller = sellerList.find((item, index, self) => {
    if (item.id === sellerIdToBeEdited) {
      return item;
    }
  });

  // if not seller, throw error
  if (!requiredSeller) {
    return res.status(404).send({ message: "Seller does not exist." });
  }

  const newSellerList = sellerList.map((item, index, self) => {
    if (item.id === sellerIdToBeEdited) {
      return { ...item, ...newValues };
    } else {
      return item;
    }
  });

  sellerList = structuredClone(newSellerList);

  // send appropriate response
  return res.status(200).send({ message: "Seller is updated successfully." });
});
export default router;
