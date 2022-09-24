export const userColumns =[
    { field: 'id', headerName: 'ID', width: 70 },{
    field:"user", headerName:"User", width: 230, renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar"/>
                {params.row.username}
            </div>
        );
    },
},
{
    field: "email", headerName:"Email", width: 230,
},

{
    field: "address",
    headerName: "Address",
    width: 100,
},
{
    field: "phone",
    headerName: "Phone Number",
    width: 100,
},
{
    field: "country",
    headerName: "Country",
    width: 160,
    // renderCell: (params) => {
    //     return (
    //         <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
    //     )
    // }
}

];
// temporary data

// export const userRows = [
//     {
//         id: 1,
//         username: "Snow",
//         img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
//         email: "snowis@gmail.com",
//         status: "passive",
//         age: 35,
//     },
//     {
//         id: 2,
//         username: "Jon",
//         img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
//         email: "snowis@gmail.com",
//         status: "active",
//         age: 35,
//     },
//     {
//         id: 3,
//         username: "Mark",
//         img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
//         email: "snowis@gmail.com",
//         status: "active",
//         age: 35,
//     },
//     {
//         id: 4,
//         username: "Will",
//         img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
//         email: "snowis@gmail.com",
//         status: "passive",
//         age: 35,
//     },
//     {
//         id: 5,
//         username: "Jane",
//         img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
//         email: "snowis@gmail.com",
//         status: "active",
//         age: 35,
//     },
//     {
//         id: 6,
//         username: "Jane",
//         img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
//         email: "snowis@gmail.com",
//         status: "active",
//         age: 35,
//     },
//     {
//         id: 7,
//         username: "Jane",
//         img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
//         email: "snowis@gmail.com",
//         status: "active",
//         age: 35,
//     },
//     {
//         id: 8,
//         username: "Jane",
//         img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
//         email: "snowis@gmail.com",
//         status: "active",
//         age: 35,
//     },
//     {
//         id: 9,
//         username: "Jane",
//         img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
//         email: "snowis@gmail.com",
//         status: "active",
//         age: 35,
//     },
//     {
//         id: 10,
//         username: "Jane",
//         img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
//         email: "snowis@gmail.com",
//         status: "active",
//         age: 35,
//     }
    
// ];