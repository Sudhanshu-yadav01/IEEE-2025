
// import React from "react";
// import TiltedCard from "./components/TiltedCard";

// const members = [
//   {
//     imageSrc:
//       "https://media.licdn.com/dms/image/v2/D4D35AQE9IZFac2YGAg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1703055882856?e=1757660400&v=beta&t=nwvt9Ir046VoBFPMZCbCo3YpuXjalMQ3tOX7z9Myg5s",
//     altText: "Sudhanshu Yadav - Chief Web Dev",
//     captionText: "Sudhanshu Yadav - Chief Web Dev",
//     overlayContent: (
//       <p className="bg-black text-xs p-1 rounded tilted-card-demo-text">Sudhanshu Yadav - Chief Web Dev</p>
//     ),
//   },
//   {
//     imageSrc: "https://randomuser.me/api/portraits/men/32.jpg",
//     altText: "John Doe - Developer",
//     captionText: "John Doe - Developer",
//     overlayContent: (
//       <p className="bg-black text-xs p-1 rounded tilted-card-demo-text">John Doe - Frontend </p>
//     ),
//   },

    
  
// ];

// const CoreMembers = () => {
//   return (
//     <div className="flex justify-center flex-wrap gap-10 overflow-hidden p-4">
//       {members.map((member, idx) => (
//         <TiltedCard
//           key={idx}
//           imageSrc={member.imageSrc}
//           altText={member.altText}
//           captionText={member.captionText}
//           containerHeight="200px"
//           containerWidth="200px"
//           imageHeight="200px"
//           imageWidth="200px"
//           rotateAmplitude={12}
//           scaleOnHover={1.2}
//           showMobileWarning={false}
//           showTooltip={true}
//           displayOverlayContent={true}
//           overlayContent={member.overlayContent}
//         />
//       ))}
//     </div>
//   );
// };

// export default CoreMembers;

import React from 'react'
import TeamSection from './components/TeamSection'

const CoreMembers = () => {
  return (
    <div><TeamSection/></div>
  )
}

export default CoreMembers
