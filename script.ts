//listing element
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();

    ///type arrested
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as  HTMLTextAreaElement;
    const expereinceElement = document.getElementById('expereince') as  HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as  HTMLTextAreaElement;



    //** 
    const usernameElement = document.getElementById(
        "username"
    ) as HTMLInputElement;


    if(
        profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        expereinceElement &&
        skillsElement 
 ) {
        const name = nameElement.value
        const email = emailElement.value
        const phone = phoneElement.value
        const education = educationElement.value
        const expereince = expereinceElement.value
        const skills = skillsElement.value


    //picture elements
    const profilePicturefile = profilePictureInput.files?.[0]
    const profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile):'';
     

    //**
    const username = usernameElement.value;
    const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`





    //create resume HTML
    const resumeHTML = `
    <h2>Resume</h2>
    
     ${profilePictureURL ? `<img src="${profilePictureURL} alt="profile picture" class="profilePicture">`:""}

    <p><strong>Name:</strong>${name}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Phone:</strong>${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Expereince</h3>
    <p>${expereince}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

   
// display the resume in the outuput container
    const resumeOutputElement= document.getElementById('resumeOutput')
    if(resumeOutputElement){
        resumeOutputElement.innerHTML= resumeHTML
        resumeOutputElement.classList.remove('hidden')

   //create container for buttons
   const buttonsContainer = document.createElement("div")
   buttonsContainer.id="buttonsContainer";
   resumeOutputElement.appendChild(buttonsContainer);

   //Add download PDF button
   const downloadButton = document.createElement('button');
   downloadButton.textContent='download as PDF'
   downloadButton.addEventListener("click",() =>{
    window.print()//open the print dialog,allowing the user to save as PDF
   });
   buttonsContainer.appendChild(downloadButton);

   //Add Shareable Link button
   const shareLinkButton = document.createElement("button")
   shareLinkButton.textContent="copy Shareable Link";
   shareLinkButton.addEventListener("click",async () =>{
    try{
        //create a unique shareable link (simulate it in this case)
        const shareableLink = `https://yourdomain.com/resumes/${name.replace(
        /\s+/g,
    "__")}_cv.html`;
    
    //use clipboard API to copy the shareable link
    await navigator.clipboard.writeText(shareableLink);
    alert('Shareable link copied to clipboard!');
    }catch(err){;
    
        console.error("Failed to copy link:",err);
        alert("Failed to copy link to clipboard.please try again.")
    }
   });
   buttonsContainer.appendChild(shareLinkButton);
}
} else {console.error("Resume output container not found");

}
}
)