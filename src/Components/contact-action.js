"use server"

// This is a server action for handling form submissions
export async function sendContactForm(formData) {
  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Simulate success/failure based on random chance (for demo purposes)
  const random = Math.random()

  if (random < 0.9) {
    // 90% chance of success
    return { success: true }
  } else {
    // 10% chance of failure
    throw new Error("Failed to send message")
  }

  // In a real application, you would send an email or save to a database
  // Example with a real email service:
  
  try {
    await sendEmail({
      to: "rajubdpro@gmail.com",
      subject: `Contact Form: ${formData.subject}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Message: ${formData.message}
      `
    });
    
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send message");
  }

}
