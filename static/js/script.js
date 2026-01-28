const codePanel = document.getElementById("code-panel");
const outputPanel = document.getElementById("output-panel");

const pythonCode = [
  "<span class='syntax-comment'># Ali Noori — Back-end Developer Portfolio</span>",
  `<span class='syntax-comment'># Born: 2001/04/16</span>`,
  `<span class='syntax-comment'># Email: e.alinri@gmail.com</span>`,
  `<span class='syntax-comment'># Phone: 09196588985</span>`,
  "",
  "<span class='syntax-keyword'>import</span> datetime",
  "<span class='syntax-keyword'>import</span> json",
  "",
  "<span class='syntax-keyword'>class</span> Developer:",
  "    <span class='syntax-keyword'>def</span> <span class='syntax-function'>__init__</span>(self, profile):",
  "        self.profile = profile",
  "",
  "    <span class='syntax-keyword'>def</span> <span class='syntax-function'>bio</span>(self):",
  "        <span class='syntax-keyword'>print</span>(f\"Name: {self.profile.General.FirstName} {self.profile.General.LastName}\")",
  "        <span class='syntax-keyword'>print</span>(f\"Email: {self.profile.General.Email}\")",
  "        <span class='syntax-keyword'>print</span>(f\"Phone: {self.profile.General.Phone}\")",
  "        <span class='syntax-keyword'>print</span>(f\"Address: {self.profile.General.Address}\")",
  "        <span class='syntax-keyword'>print</span>(f\"BirthDate: {self.profile.General.BirthDate}\")",
  "        <span class='syntax-keyword'>print</span>(\"\\nSkills:\")",
  "        <span class='syntax-keyword'>print</span>(', '.join([s.Name for s in self.profile.Skills]))",
  "        <span class='syntax-keyword'>print</span>(\"\\nLanguages & Technologies:\")",
  "        <span class='syntax-keyword'>print</span>(', '.join([l.Name for l in self.profile.LangTech]))",
  "        <span class='syntax-keyword'>print</span>(\"\\nEducation:\")",
  "        <span class='syntax-keyword'>for</span> edu <span class='syntax-keyword'>in</span> self.profile.Educations:",
  "            <span class='syntax-keyword'>print</span>(f\"{edu.grade} in {edu.in} ({edu.from} - {edu.to if edu.to else 'Present'})\")",
  "        <span class='syntax-keyword'>print</span>(\"\\nWork Experience:\")",
  "        <span class='syntax-keyword'>for</span> work <span class='syntax-keyword'>in</span> self.profile.Work:",
  "            <span class='syntax-keyword'>print</span>(f\"{work.title} at {work.company}, {work.city} ({work.from} - {work.to if work.to else 'Present'})\")",
  "",
  "<span class='syntax-comment'># Initialize Developer with profile</span>",
  "ali = Developer(profile)",
  "ali.bio()",
  "",
  "<span class='syntax-comment'># End of resume</span>",
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
  if (lineIndex < pythonCode.length) {
    const lineContent = pythonCode[lineIndex];

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
