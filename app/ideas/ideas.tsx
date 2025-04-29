export interface Ideas {
    id: string;
    title: string;
    imageSrc: string;
    image2?: string;
    info: string;
    info2?: string;
    info3?: string;
    info4?: string;
    tags: string[];
    git?: string;
    host?: string;
}

 export const ideas: Ideas[] = [
    {
        id: "Digital_Spotify_Turntable",
        title: "Digital Spotify Turntable",
        imageSrc: "/images/C999.jpg",
        image2: "/images/C999.jpg",
        info: "A high definition OLED turntable audio device.",
        info2: "Additional details and features of SocialLift go here.",
        info3: "A social media app built with React Native and Firebase.",
        info4: "Additional details and features of SocialLift go here.",
        tags: ["React Native", "Firebase", "API"],
        git: "GITHUB URL HERE",
        host: "HOST URL HERE",
    } /*,
    
    {
        id: "The_Emperor",
        title: "The Emperor",
        imageSrc: "/images/C1.png",
        info: "A Chrome extension for enhancing your browsing experience. This is ome text that will force the window to get even bigger when in a pretty narrow view",
        info2: "Additional details and features of SocialLift go here.",
        tags: ["Chrome Extension", "HTML", "CSS", "JavaScript"],
    },
    {
        id: "SeenIt",
        title: "SeenIt",
        imageSrc: "/images/C1.png",
        info: "A project utilizing various APIs including NASA API.",
        info2: "Additional details and features of SocialLift go here.",
        tags: ["React", "Node.js", "Express", "MAP thingy API", "NASA API"],
    },
    {
        id: "Meteor_Map",
        title: "Meteor Map",
        imageSrc: "/images/C1.png",
        info: "A web application built with Python and Flask.",
        info2: "Additional details and features of SocialLift go here.",
        tags: ["Python", "Flask"] 
        ]; 
        
    },

    */

]