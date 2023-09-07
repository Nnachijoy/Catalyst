// // import React from 'react';
// // import email from "../assets/email.png";

// // const Resetsuccessful = () => {
// //   return (
// //     <div className='text-white text-center' style={{ background: "rgb(223, 220, 220)", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
// //       <div className='card' style={{ padding: "20px", background: "white", borderRadius:
// //        "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", margin: "10px" }}>
        
// //         <img src={email} className='mt-5' style={{ maxWidth: '197.25px', maxHeight: '197.25px', margin: '0 auto' }} />
        
// //         <div className='text-center p-5'>
// //         <h5 className='mt-0 fw-bolder'>An email is on its way!</h5>
// //         <p className='mt-2'>We sent an email to <span className='text-black'>hchinweike19@gmail.com</span>, 
// //         You’ll find a<br/>  link that will sign you into the workspace.</p>
// //         </div>

// //         {/* <div className="mt-4"style={{ width: "200px", height: "10px", background: "#E0F8E0", borderRadius: "5px", margin: "0 auto" }}>
// //           <div style={{ width: "50%", height: "100%", background: "green", borderRadius: "5px" }}></div>
// //         </div> */}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Resetsuccessful;

// import React from 'react';
// import email from "../assets/email.png";
// import catalystlogo from "../assets/catalystlogo.png";

// const Resetsuccessful = () => {
//   return (
//     <div style={{ background: "rgb(140, 137, 137)", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
//       {/* Background with Create an account */}
//       <div className="background-content" style={{ padding: "40px 20px 20px 20px", width: "100%", textAlign: "center" }}>
//         <h3 className="fw-bolder mt-3">Create an account</h3>
//       </div>

//       <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', 
//       alignItems: 'center', justifyContent: 'center', maxWidth: '540px'}} >
//         <div className='card' style={{ padding: "20px", background: "white", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", margin: "10px", width: "100%" }}>
//           <img src={email} className='mt-3' style={{ maxWidth: '197.25px', maxHeight: '197.25px', margin: '0 auto' }} />

//           <div className='text-center p-4'>
//             <h5 className='mt-0 fw-bolder'>An email is on its way!</h5>
//             <p className='mt-2'>We sent an email to
//              <span className='text-black'> hchinweike19@gmail.com</span>, You’ll find a link that will sign you into the workspace.</p>
//           </div>
//         </div>
//       </div>

//       {/* Footer with logo */}
//       <div className="mt-4" style={{ backgroundColor: 'rgba(254, 244, 211, 0.7)', padding: '9px', width: '100%', textAlign: 'center' }}>
//         <img src={catalystlogo} alt="" />
//       </div>
//     </div>
//   );
// }

// export default Resetsuccessful;



import React from 'react';
import emaill from "../assets/emaill.png";
import catalystlogo from "../assets/catalystlogo.png";

const Resetsuccessful = ({ email }) => {
  return (
    <div style={{ background: "rgb(140, 137, 137)", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Background with Create an account */}
      <div className="background-content" style={{ padding: "40px 20px 20px 20px", width: "100%", textAlign: "center" }}>
        <h3 className="fw-bolder mt-3">Create an account</h3>
      </div>

      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: '540px'}} >
        <div className='card' style={{ padding: "20px", background: "white", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", margin: "10px", width: "100%" }}>
          <img src={emaill} className='mt-3' style={{ maxWidth: '197.25px', maxHeight: '197.25px', margin: '0 auto' }} />

          <div className='text-center p-4'>
            <h5 className='mt-0 fw-bolder'>An email is on its way!</h5>
            <p className='mt-2'>We sent an email to
             <span className='text-black fw-bolder'> {email}</span>, You’ll find a link that will sign you into the workspace.</p>
          </div>
        </div>
      </div>

      {/* Footer with logo */}
      <div className="mt-4" style={{ backgroundColor: 'rgba(254, 244, 211, 0.7)', padding: '9px', width: '100%', textAlign: 'center' }}>
        <img src={catalystlogo} alt="" />
      </div>
    </div>
  );
}

export default Resetsuccessful;

