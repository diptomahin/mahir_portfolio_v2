import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { fullName, companyWebsite, primaryGoal, monthlyAdSpend, whatsappNumber } = await request.json();

    // Validate required fields
    if (!fullName || !companyWebsite || !primaryGoal || !monthlyAdSpend || !whatsappNumber) {
      return Response.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create email transporter with Netlify-compatible settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
      pool: {
        maxConnections: 1,
        maxMessages: 1,
      },
      connectionTimeout: 5000,
      socketTimeout: 5000,
    });

    // Email content
    const emailContent = `
      <h2>New Qualification Form Submission</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Company Website:</strong> <a href="${companyWebsite}">${companyWebsite}</a></p>
      <p><strong>Primary Goal:</strong> ${primaryGoal}</p>
      <p><strong>Monthly Ad Spend:</strong> ${monthlyAdSpend}</p>
      <p><strong>WhatsApp Number:</strong> <a href="https://wa.me/${whatsappNumber.replace(/\D/g, '')}">${whatsappNumber}</a></p>
      <hr />
      <p><em>Submitted on ${new Date().toLocaleString()}</em></p>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: `New Client Qualification: ${fullName}`,
      html: emailContent,
      replyTo: whatsappNumber,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: 'We Received Your Qualification Request',
      html: `
        <h2>Thank You, ${fullName}! 🎉</h2>
        <p>We've received your qualification request and will review it shortly.</p>
        <p>You'll receive a WhatsApp message within the next <strong>30 minutes</strong> with your personalized growth plan.</p>
        <p>In the meantime, feel free to:</p>
        <ul>
          <li>Check out our case studies</li>
          <li>Review our latest blog posts</li>
          <li>Explore our service offerings</li>
        </ul>
        <p>Looking forward to working with you!</p>
        <p>Best regards,<br>Mezbah Uddin Mahir</p>
      `,
    });

    return Response.json(
      { message: 'Form submitted successfully. Check your WhatsApp shortly!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error.message);
    console.error('Error details:', error);
    return Response.json(
      { message: 'Failed to submit form. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
