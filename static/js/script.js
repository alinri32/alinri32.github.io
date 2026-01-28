const codePanel = document.getElementById("code-panel");
const outputPanel = document.getElementById("output-panel");

const csharpCode = [
  "<span class='syntax-comment'>// Ali Noori — Back-end Developer Portfolio</span>",
  `<span class='syntax-comment'>// Born: 2001/04/16</span>`,
  `<span class='syntax-comment'>// Email: e.alinri@gmail.com</span>`,
  `<span class='syntax-comment'>// Phone: 09196588985</span>`,
  "",
  "<span class='syntax-keyword'>using</span> System;",
  "<span class='syntax-keyword'>using</span> System.Collections.Generic;",
  "",
  "<span class='syntax-keyword'>namespace</span> Portfolio",
  "{",
  "    <span class='syntax-keyword'>public class</span> Developer",
  "    {",
  "        <span class='syntax-keyword'>public</span> Profile Profile { <span class='syntax-keyword'>get</span>; <span class='syntax-keyword'>set</span>; }",
  "",
  "        <span class='syntax-keyword'>public</span> Developer(Profile profile)",
  "        {",
  "            Profile = profile;",
  "        }",
  "",
  "        <span class='syntax-keyword'>public void</span> Bio()",
  "        {",
  "            Console.WriteLine($\"Name: {Profile.General.FirstName} {Profile.General.LastName}\");",
  "            Console.WriteLine($\"Email: {Profile.General.Email}\");",
  "            Console.WriteLine($\"Phone: {Profile.General.Phone}\");",
  "            Console.WriteLine($\"Address: {Profile.General.Address}\");",
  "            Console.WriteLine($\"BirthDate: {Profile.General.BirthDate}\");",
  "            Console.WriteLine(\"\\nSkills:\");",
  "            Console.WriteLine(string.Join(\", \", Profile.Skills.ConvertAll(s => s.Name)));",
  "            Console.WriteLine(\"\\nLanguages & Technologies:\");",
  "            Console.WriteLine(string.Join(\", \", Profile.LangTech.ConvertAll(l => l.Name)));",
  "            Console.WriteLine(\"\\nEducation:\");",
  "            <span class='syntax-keyword'>foreach</span> (var edu <span class='syntax-keyword'>in</span> Profile.Educations)",
  "            {",
  "                Console.WriteLine($\"{edu.Grade} in {edu.In} ({edu.From} - {(edu.To != null ? edu.To : \"Present\")})\");",
  "            }",
  "            Console.WriteLine(\"\\nWork Experience:\");",
  "            <span class='syntax-keyword'>foreach</span> (var work <span class='syntax-keyword'>in</span> Profile.Work)",
  "            {",
  "                Console.WriteLine($\"{work.Title} at {work.Company}, {work.City} ({work.From} - {(work.To != null ? work.To : \"Present\")})\");",
  "            }",
  "        }",
  "    }",
  "",
  "    <span class='syntax-comment'>// Initialize Developer with profile</span>",
  "    <span class='syntax-keyword'>var</span> ali = <span class='syntax-keyword'>new</span> Developer(profile);",
  "    ali.Bio();",
  "}",
  "",
  "<span class='syntax-comment'>// End of resume</span>",
];

// Simulated JSON object (your resume)
const profile = {
  General: {
    FirstName: "Ali",
    LastName: "Noori",
    Email: "e.alinri@gmail.com",
    Phone: "09196588985",
    BirthDate: "2001/04/16 - 1380/01/27",
    Address: "Qazvin",
  },
  Skills: [
    { Name: "Self Study" },
    { Name: "Curious" },
    { Name: "Problem-solving ability " },
    { Name: "Fast Learner" },
    { Name: "Creative" },
  ],
  LangTech: [
    { Name: "Netowrk+" },
    { Name: "C#" },
    { Name: "Python" },
    { Name: "Asp.Net Core" },
    { Name: "RESTful API" },
    { Name: "Async Programming" },
    { Name: "Docker/DockerCompose" },
    { Name: "HTML & CSS" },
    { Name: "JavaScript" },
    { Name: "Machin Learning Skils" },
    { Name: "NumPy/Pandas | MathplotLib/Seaborn | Scikit-Learn" },
    { Name: "PostgreSQL/SQLserver" },
    { Name: "Redis" },
    { Name: "Git/Github" },
    { Name: "Docker/Dockerhub" },
  ],
  Educations: [
    {
      from: 2024,
      to: "",
      grade: "Master",
      in: "AI and Robotics",
      institute: "Qazvin Azad University",
    },
    {
      from: 2019,
      to: 2023,
      grade: "Bachelor",
      in: "Information Technology",
      institute: "Qazvin Azad University",
    },
  ],
  Work: [
    {
      from: "2021-05",
      to: "2023-09",
      title: "Technical Support Specialist ",
      city: "Tehran",
      company: "Pars Online",
      mode: "Full time - Remote",
    },
    {
      from: "2024-09",
      to: "Now",
      title: "Back-End Developer (C#)",
      city: "Qazvin",
      company: "Sepidyarhesab",
      mode: "Full time",
    },
  ],
};

let lineIndex = 0;

function printLine(text) {
  const line = document.createElement("div");
  line.classList.add("typed-line");
  line.innerHTML = text;
  codePanel.appendChild(line);
}

function printOutput(text) {
  const line = document.createElement("div");
  line.innerText = text;
  outputPanel.appendChild(line);
}

function typeLine() {
  if (lineIndex < csharpCode.length) {
    const lineContent = csharpCode[lineIndex];

    if (lineContent.includes("ali.bio()")) {
      printLine(lineContent);
      simulateBio();
    } else {
      printLine(lineContent);
    }

    lineIndex++;
    setTimeout(typeLine, 200);
  } else {
    const cursor = document.createElement("span");
    cursor.id = "cursor";
    cursor.innerText = "|";
    outputPanel.appendChild(cursor);
    setInterval(() => {
      cursor.style.visibility =
        cursor.style.visibility === "hidden" ? "visible" : "hidden";
    }, 500);
  }
}

// Simulate printing the bio in output panel
function simulateBio() {
  printOutput(`Name: ${profile.General.FirstName} ${profile.General.LastName}`);
  printOutput(`Email: ${profile.General.Email}`);
  printOutput(`Phone: ${profile.General.Phone}`);
  printOutput(`Address: ${profile.General.Address}`);
  printOutput(`BirthDate: ${profile.General.BirthDate}`);

  printOutput("\nSkills:");
  printOutput(profile.Skills.map((s) => `• ${s.Name}`).join("\n"));

  printOutput("\nLanguages & Technologies:");
  printOutput(profile.LangTech.map((l) => `• ${l.Name}`).join("\n"));

  printOutput("\nEducation:");
  profile.Educations.forEach((e) => {
    printOutput(`• ${e.grade} in ${e.in} (${e.from} - ${e.to || "Present"})`);
  });

  printOutput("\nWork Experience:");
  profile.Work.forEach((w) => {
    printOutput(
      `• ${w.title} at ${w.company}, ${w.city} (${w.from} - ${
        w.to || "Present"
      })`
    );
  });
}

typeLine();

const profileCard = document.querySelector(".profile-card");
const blurOverlay = document.querySelector(".blur-overlay");

document
  .querySelector(".profile-card .close-btn")
  .addEventListener("click", () => {
    profileCard.style.opacity = "0";
    profileCard.style.transform = "translate(-50%, -50%) scale(0.9)";
    blurOverlay.classList.add("hidden"); // hide blur

    setTimeout(() => {
      profileCard.style.display = "none";
      blurOverlay.style.display = "none"; // remove overlay completely if needed
    }, 500);
  });
