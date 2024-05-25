import asyncHandler from 'express-async-handler'


//@desc     Auth user/set token
//router    POST /api/users/auth
//access    public
const authUser = asyncHandler(async(req,res) => {
    res.status(200).json({message:"Auth user"});
});

//@desc     register user
//router    POST /api/users
//access    public
const registerUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message: "register user"});
});


//@desc     Logout user
//router    POST /api/users
//access    Public
const logoutUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:'Logout user.'})
});


//@desc     Get User profile
//router    GET /api/users/profile
//accesss   Private
const getUserProfile = asyncHandler(async(req,res)=>{
    res.status(200).json({message:'User Profile'});
});

//@desc     Profile update
//router    PUT /api/user/profile
//access    Private
const updateProfile = asyncHandler(async(req, res) =>{
    res.status(200).json({message: 'Profile Update.'})
}) 



export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateProfile,

};