// remember the uuid not uuidv4 ***

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({sucess: true, route: "blogs", message:"welcome to the blogs page"});
});



router.get("/all", async function (req,res,next){

})



/* 

  router.get("/get-one-example", async function (req, res, next) {
  const blogPosts = await db()
  .collection("posts") 
  .findOne({
      id: {
        $exists: true,
      },
  });

  console.log(blogPosts);

  res.json({
    success: true,
    post: blogPost,
  });
});

  console.log("first");
  //await blocks the execution until the promise resolves
  // aka. make sure line 47 finishes before we get on 
  // with the rest of our program 
  const blogPosts = await db().collection("sample_blogs").findOne({
    id: req.params.id,
  }); /*.catch({
    console.log("something went wrong");
  });*/
  // console.log("second");
  //we don't want to a user to see the result before post is loaded.
  // so we use await, to block this from happening.
  // res.json({
  //  success: true,
  //  posts: blogPosts,
  // });
  
  //NOTE: FIND ONE is READ operation, the output holds the results of the operation.
  // so we add it in our res.json()
  // console.log("third");
  // });


// CREATE

/*
router.post("/create-one", async function (req, res, next) {
  try {
    const newPost = {
      id: uuidv4(),
      createdAt: new Date(),
      title: req.body.title,
      text: req.body.text,
      author: req.body.author,
      email: req.body.email,
      categories: req.body.categories,
      starRating: Number(req.body.starRating),
    };

    
// MULTI

/*
router.get("/get-multi", async function (req, res) {



// DELETE

/*
router.delete('/delete-multi', async function (req, res) {
	try {
      
      const idsToDelete = req.body

      if (idsToDelete.length < 1){
        throw Error("ids to delete empty!");
      }
      const deleteResult = await db().collection("sample_blogs").deleteMany({
        id: {
          $in: idsToDelete
        }
      })
  
  } catch (e) {
    res.send(e);
  }
	res.json({
		success: true,
		deleteResult: deleteResult
	})
})
*/


module.exports = router;
