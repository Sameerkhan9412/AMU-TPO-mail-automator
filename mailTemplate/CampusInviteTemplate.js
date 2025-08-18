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
    max-width: 600px;
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
  .cta-button {
    text-align: center;
    margin: 25px 0;
  }
  .cta-button a {
    display: inline-block;
    padding: 12px 24px;
    background-color: #007bff;
    color: #ffffff;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  .cta-button a:hover {
    background-color: #0056b3;
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
    border-radius: 4px;
    border-left: 3px solid #004d99;
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
    <img src="https://res.cloudinary.com/sameerkhan/image/upload/v1755522251/Amu-logo_s4onyb.png" alt="Aligarh Muslim University Logo" style="max-width: 150px; height: auto;">
</div>
    <h1>Campus Recruitment Drive Invitation</h1>
    <p>Aligarh Muslim University, Aligarh, U.P.</p>
  </div>

  <div class="content">
    <p>Greetings from the Training & Placement Department,</p>
    
    <p>Dear <span class="highlight">${receiverName}</span>,</p>

    <p>On behalf of the Department of Computer Science, Aligarh Muslim University, we are delighted to extend a warm invitation to <span class="highlight">${companyName}</span> to participate in our Campus Recruitment Drive for the graduating batch of 2025–26.</p>

    <p>Our students are well-trained in computer science fundamentals, problem-solving, and modern technologies. With their dedication and enthusiasm, we are confident they will contribute positively to your esteemed organization.</p>

    <p>For a detailed overview, please find our Placement Brochure attached below:</p>
    
    <div class="cta-button">
      <a href="https://drive.google.com/file/d/1Bk5h2RGOc1NWDYWlsKgrdyiaUglHQjkT/view?usp=sharing" target="_blank">View Placement Brochure</a>
    </div>

    <p>We would be grateful if you could kindly share your interest along with the following details, so we may proceed with scheduling the drive:</p>
    <ul style="list-style-type: disc; padding-left: 25px;">
      <li><span class="highlight">Updated Job Description(s)</span></li>
      <li><span class="highlight">Eligibility Criteria</span></li>
      <li><span class="highlight">Preferred Dates for the Recruitment Process</span></li>
    </ul>

    <p>Your participation will not only provide valuable opportunities for our students but will also strengthen the industry–academia relationship with <span class="highlight">${companyName}</span>.</p>
    <p>We sincerely hope for your positive response and look forward to collaborating with your team.</p>

    <p>Best regards,<br>
    <span class="highlight">TPO Team</span><br>
    Department of Computer Science<br>
    Aligarh Muslim University<br>
    Email: <a href="mailto:tpo.cs@amu.ac.in">tpo.cs@amu.ac.in</a></p>
  </div>
  
  <div class="footer">
    <div class="contact-info">
      <p><span class="highlight">Faculty Training & Placement Officers</span></p>
      <ul class="contact-list">
        <li>Dr. Mohammad Nadeem – Training & Placement Officer | <a href="tel:+918750919969">+91 8750919969</a></li>
        <li>Dr. Faisal Anwer – Deputy Training & Placement Officer | <a href="tel:+918171318692">+91 8171318692</a></li>
        <li>Dr. Mohammad Sajid – Deputy Training & Placement Officer | <a href="tel:+919634622950">+91 9634622950</a></li>
      </ul>
    </div>

    <div class="contact-info" style="margin-top: 20px;">
      <p><span class="highlight">Student Placement Coordinators</span></p>
      <ul class="contact-list">
        <li>Syed Bilal Ahmad | <a href="tel:+917542825540">+91 7542825540</a></li>
        <li>Sameer | <a href="tel:+919412803911">+91 9412803911</a></li>
        <li>Sonali Varshney | <a href="tel:+917533828772">+91 7533828772</a></li>
        <li>Talibul Haque Khan | <a href="tel:+917000784235">+91 7000784235</a></li>
        <li>Azizur Rahman | <a href="tel:+918795221403">+91 8795221403</a></li>
      </ul>
    </div>
  </div>
  <p><span class="highlight">The university is eager to coordinate and build a long-term partnership with ${companyName}.</span></p>
</div>

</body>
</html>
  `
};

export default campusInviteTemplate;