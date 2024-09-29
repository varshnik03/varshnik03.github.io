import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";

const About = () => {
    const router = useRouter();
    const theme = useTheme();
    const [mount, setMount] = useState(false);
  
    return (<h1>My name is Varshni Karthikeyan and I am a senior studying Software Engineering + pursuing a certificate in Applied Experience Design and Research at the University of Texas at Dallas. Additionally, I am the secretary for the User Experience Club at UTD. 

        Growing up, I had a passion for art and wanted to find a way to merge my creative side with a technical field. That's when I discovered user experience design, which offers a combination of both plus so much more!</h1>);
}

export default About;