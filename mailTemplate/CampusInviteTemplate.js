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
    border-bottom: 2px solid #4caf50;
    padding-bottom: 10px;
  }
  .header h1 {
    color: #4caf50;
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
    color: #4caf50;
    font-weight: bold;
  }
  .cta-button {
    text-align: center;
    margin: 25px 0;
  }
  .cta-button a {
    display: inline-block;
    padding: 12px 24px;
    background-color: #4caf50;
    color: #ffffff;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  .cta-button a:hover {
    background-color: #4caf50;
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
    border-left: 3px solid #4caf50;
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
    color: #4caf50;
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
    <h1>Campus Recruitment Drive Invitation</h1>
    <p>Aligarh Muslim University, Aligarh, U.P.</p>
  </div>

  <div class="content">
    <p>Greetings from the Training & Placement Department,</p>
    
    <p>Dear <span class="highlight">${receiverName}</span>,</p>

    <p>We are writing to you on behalf of the Department of Computer Science at Aligarh Muslim University to invite <span class="highlight">${companyName}</span> to our Campus Recruitment Drive for the 2025–26 graduating batch.</p>

    <p>Our students are equipped with strong technical knowledge, problem-solving skills, and a motivated mindset. We believe they can be a great asset to your organization.</p>

    <p>For more information, please see our Placement Brochure below:</p>
    
    <div class="cta-button">
      <a href="https://api.amu.ac.in/storage//file/10077/useful-download/1755070514.pdf" target="_blank">View Placement Brochure</a>
    </div>

    <p>To help us move forward, please share your interest along with:</p>
    <ul style="list-style-type: disc; padding-left: 25px;">
      <li><span class="highlight">Updated Job Description(s)</span></li>
      <li><span class="highlight">Eligibility Criteria</span></li>
      <li><span class="highlight">Preferred Dates for the Recruitment Process</span></li>
    </ul>

    <p>We are eager to coordinate with your team and ensure a successful recruitment process. We look forward to building a long-term partnership with <span class="highlight">${companyName}</span>.</p>

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

</div>

</body>
</html>
  `
};

export default campusInviteTemplate;