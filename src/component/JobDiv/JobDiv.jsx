import React from "react";

import { BiTimeFive } from "react-icons/bi";

const JobDiv = () => {

  // const Data = [
  //   {
  //     id:1,
  //     image:"",
  //     title:'Web Developer',
  //     time:"Now",
  //     location:"Canada",
  //     desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit Consequatur culpa",
  //     company:"Novac Linus Co."
  //   },
    
  // ]

  const Data = [
    {
      "id": 1,
      "name": "DevCon 2023",
      "image": "https://example.com/devcon-logo.png",
      "title": "CodeCrafters Unite: DevCon 2023",
      "time": "14h",
      "location": "Techland County",
      "desc": "DevCon 2023 is the premier gathering for developers, coders, and tech enthusiasts. Join us for a full day of coding workshops, tech talks, and networking opportunities.",
      "company": "CodeCrafters Inc"
    },
    {
      "id": 2,
      "name": "Web Development Summit",
      "image": "https://example.com/webdev-logo.png",
      "title": "Mastering Web Development: 2023 Summit",
      "time": "11h",
      "location": "Webville County",
      "desc": "Join us for a day of in-depth web development discussions and hands-on workshops. Learn from industry experts and boost your web development skills.",
      "company": "WebTech Solutions"
    },
    {
      "id": 3,
      "name": "Data Science Conference",
      "image": "https://example.com/datasci-logo.png",
      "title": "Data Science 2023: Transforming Insights",
      "time": "13h",
      "location": "Dataville County",
      "desc": "Explore the latest trends and advancements in data science. Dive deep into data analytics, machine learning, and artificial intelligence.",
      "company": "Data Insights Labs"
    },
    {
      "id": 4,
      "name": "AI Expo 2023",
      "image": "https://example.com/aiexpo-logo.png",
      "title": "AI Expo: Shaping the Future",
      "time": "10h",
      "location": "AIville County",
      "desc": "Experience the future of artificial intelligence at AI Expo 2023. Discover cutting-edge AI applications and technologies.",
      "company": "AI Innovators Inc"
    }, {
      "id": 5,
      "name": "Mobile App Development Summit",
      "image": "https://example.com/mobiledev-logo.png",
      "title": "Mobile App Dev Summit 2023",
      "time": "15h",
      "location": "Appville County",
      "desc": "Join us for a summit dedicated to mobile app development. Learn about the latest trends and tools for building innovative mobile apps.",
      "company": "AppCrafters Inc"
    },
    {
      "id": 6,
      "name": "Cybersecurity Conference 2023",
      "image": "https://example.com/cybersec-logo.png",
      "title": "Securing the Digital World: CyberSec 2023",
      "time": "12h",
      "location": "Secureville County",
      "desc": "Stay ahead of cybersecurity threats at CyberSec 2023. Explore strategies and technologies to protect your digital assets.",
      "company": "CyberGuard Technologies"
    },  {
      "id": 7,
      "name": "Blockchain Summit 2023",
      "image": "https://example.com/blockchain-logo.png",
      "title": "Blockchain Revolution: Summit 2023",
      "time": "16h",
      "location": "Blockville County",
      "desc": "Explore the world of blockchain technology at the Blockchain Summit 2023. Discover use cases, innovations, and more.",
      "company": "Blockchain Innovations Ltd"
    },
    {
      "id": 8,
      "name": "IoT Expo 2023",
      "image": "https://example.com/iotexpo-logo.png",
      "title": "Connecting the World: IoT Expo 2023",
      "time": "09h",
      "location": "IoTville County",
      "desc": "Witness the latest advancements in the Internet of Things (IoT) at IoT Expo 2023. Explore IoT applications and solutions.",
      "company": "IoT Tech Labs"
    }
  ]
  

  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">


        {
          Data.map((data)=>{
            const {id,image,title,time,location,desc,company} = data;
            return(
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
          <span className="flex justify-between item-center gap-4">
            <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
             {title}
            </h1>
            <span className="flex items-center text-[#ccc] gap-1">
              <BiTimeFive />
              {time}
            </span>
          </span>
          <h6 className="text-[#ccc]">{location}</h6>
          <p className="text-[13px] text[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
            {desc}
          </p>

          <div className="company flex items-center gap-2">
            <img src="" alt="Company logo" className="w-[10%]" />
            <span className="text-[14px] py-[1rem] block group-hover:text-white">
              {company}
            </span>
          </div>
          <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">Apply Now</button>
        </div>
            )
          })
        }


      </div>


    </div>
  );
};

export default JobDiv;
