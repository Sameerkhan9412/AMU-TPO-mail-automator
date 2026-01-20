const campusInviteTemplate = (companyName, receiverName, receiverEmail) => {
  return `
    <!DOCTYPE html>
<html>
<head>
<title>Campus Recruitment Invitation</title>
<style>
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
  }
  .container {
    max-width: 800px;
    margin: 0 auto;
    background: #ffffff;
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    border: 1px solid #ddd;
  }
  .header {
    text-align: center;
    margin-bottom: 20px;
    border-bottom: 2px solid #004d99;
    padding-bottom: 10px;
  }
  .header h1 {
    color: #004d99;
    font-size: 26px;
    margin: 0;
  }
  .header p {
    color: #555;
    margin: 5px 0 0;
  }
  .content p {
    margin-bottom: 15px;
  }
  .highlight {
    color: #004d99;
    font-weight: bold;
  }
  .link-section {
    margin-top: 25px;
  }
  .link-section p {
    margin-bottom: 8px;
  }
  .list-section {
    margin-top: 20px;
  }
  .list-section ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }
  .list-section li {
    background-color: #f9f9f9;
    margin-bottom: 8px;
    padding: 10px 15px;
    border-left: 3px solid #004d99;
    border-radius: 4px;
  }
  .footer {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #eee;
  }
  .contact-info {
    font-size: 14px;
  }
  .contact-info a {
    color: #007bff;
    text-decoration: none;
  }
  .contact-info a:hover {
    text-decoration: underline;
  }
  .contact-list {
    margin-top: 10px;
  }
  .contact-list li {
    margin-bottom: 5px;
  }
  @media only screen and (max-width: 600px) {
    .container {
      padding: 15px;
    }
    .header h1 {
      font-size: 22px;
    }
  }
</style>
</head>
<body>

<div class="container">
  
  <div class="header">
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="https://res.cloudinary.com/sameerkhan/image/upload/v1755522251/Amu-logo_s4onyb.png" alt="Aligarh Muslim University Logo" style="max-width: 100px; height: auto;">
    </div>
    <h1>Campus Recruitment Drive Invitation</h1>
    <p>Department of Computer Science, Aligarh Muslim University</p>
  </div>

  <div class="content">
  
    <p>Dear <span class="highlight">${receiverName}</span>,</p>
    <p>Greetings from the Training and Placement Office, Department of Computer Science, Aligarh Muslim University (AMU).</p>
    <p>It has always been a privilege to have <span class="highlight">${companyName}</span> as one of our esteemed recruiters in the past. Your continued trust in our students has been a source of encouragement, and we would be delighted to welcome you once again to our campus for the <span class="highlight"> Placement Drive of 2025–26 (B.Tech , M.Tech , M.C.A. and M.Sc. in Cybersecurity & Digital Forensics).  </span> </p>
     <ul style="list-style-type: disc; padding-left: 25px;">
    <li>The Department of Computer Science, Aligarh Muslim University, established in 1971, is one of India's oldest and most pioneering institutions in the fields of Computer Science and Information Technology.</li>
    <li>Aligarh Muslim University has been ranked as the 8th best Indian University as per the National Institutional Ranking Framework (NIRF) Ranking 2024.</li>
    <li>Aligarh Muslim University has been accredited by NAAC with grade “A+”.</li>
    <li>A.M.U. secures 3rd Position in the MDRA India Today University Rankings 2025.</li>
    <li>A.M.U. secures 5th Position as Best Indian University in the US News & World Report 2025.</li>
  </ul>
  <p>Students of our institute, selected through a rigorous process, are among the best of the technical talent available. They are guided and trained through a constantly updated curriculum, by highly qualified and experienced faculty to meet the fast-changing needs of technology. Our laboratories are well equipped with modern, sophisticated instruments and machinery.</p>
  <p>We would like you to know that <span class="highlight">we provide travelling assistance, stay, food facilities, and virtual support for smooth drives. </span> We are confident our students' performance will make you value this decision.</p>
  
    
    <p>We will be extremely obliged if <span class="highlight"> ${companyName} </span> could be a part of our endeavor of making the untapped talents shine. We would be grateful if you could kindly share your interest along with the following details, so we may proceed with scheduling the drive:</p>
     <ul style="list-style-type: disc; padding-left: 25px;">
       <li><span class="highlight">Updated Job Description(s)</span></li>
       <li><span class="highlight">Eligibility Criteria</span></li>
       <li><span class="highlight">Preferred Dates for the Recruitment Process</span></li>
     </ul>
    
     <p>We look forward to a successful collaboration and value the opportunity to strengthen our industry-academia partnership with your team.</p>

<div class="link-section">
      <p>For a detailed overview, please find our Placement Brochure Attached Below: <a href="https://drive.google.com/file/d/1Bk5h2RGOc1NWDYWlsKgrdyiaUglHQjkT/view?usp=sharing" target="_blank">Placement Brochure</a></p>
      <p>A list of our key recruiters is available here: <a href="https://drive.google.com/file/d/1QH-ljXNGAM6X1fVW0dANqGifO-kVlVEH/view?usp=sharing" target="_blank">List of Recruiters</a></p>
    </div>
    <p>Sincerely,</p>
    <p><span class="highlight">Training and Placement Office</span><br>
    Department of Computer Science<br>
    Aligarh Muslim University<br>
    Email: <a href="mailto:tpo.cs@amu.ac.in">tpo.cs@amu.ac.in</a><br>
    TPO Linkedin: <a href="https://www.linkedin.com/company/training-placement-cell-computer-science-dept-aligarh-muslim-university/" target="_blank">Linkedin Page</a></p>
  </div>
  
  <div class="footer">
    <div class="contact-info">
      <p><span class="highlight">Faculty Training & Placement Officers</span></p>
      <ul class="contact-list">
        <li>Dr. Mohammad Nadeem – Training & Placement Officer |+91 8750919969</li>
        <li>Dr. Faisal Anwer – Deputy Training & Placement Officer | +91 8171318692</li>
        <li>Dr. Mohammad Sajid – Deputy Training & Placement Officer | +91 9634622950</li>
      </ul>
    </div>

    <div class="contact-info" style="margin-top: 20px;">
      <p><span class="highlight">Student Placement Coordinators</span></p>
      <ul class="contact-list">
        <li>Syed Bilal Ahmad | +91 7542825540</li>
        <li>Sameer | +91 9412803911</li>
        <li>Sonali Varshney | +91 7533828772</li>
        <li>Talibul Haque Khan | +91 7000784235</li>
        <li>Azizur Rahman | +91 8795221403</li>
      </ul>
    </div>
  </div>
</div>

</body>
</html>
  `;
};

export default campusInviteTemplate;
