import axios from "axios";
import mailSender from "../sendmail.js";
import campusInviteTemplate from "../mailTemplate/CampusInviteTemplate.js";

export default async function getCompanyInfo(req, res) {
  try {
    const { data } = await axios.get(process.env.GOOGLE_SHEET_API);
    const companies = data?.data || [];
    console.log("compalies list",companies)
    if (!companies.length) {
      return res.status(404).json({ error: "No company data found" });
    }
    let count=0;
    const emailPromises = companies.slice(1).map((company) =>
      mailSender(
        company.email,
        `Recruitment Drive for ${company.Name} | Aligarh Muslim University`,
        campusInviteTemplate(company.Name, company.hr_name,company.email)
        // "hello kaise ho"
      )
        .then(() => ({ email: company.email, status: "sent" }))
        .catch((err) => ({ email: company.email, status: "failed", error: err.message }))
    );

    const results = await Promise.all(emailPromises);

    res.json({ success: true, total: companies.length, results });
  } catch (error) {
    console.error("Error in getCompanyInfo:", error.message);
    res.status(500).json({ error: "Failed to fetch company info or send emails" });
  }
}