/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:['res.cloudinary.com',"picsum.photos","loremflickr.com", "i.ytimg.com","www.google.com","cdn.mindmajix.com","encrypted-tbn0.gstatic.com","www.excelptp.com","www.itrainu.in","www.krmangalam.edu.in","media.geeksforgeeks.org","d3njjcbhbojbot.cloudfront.net"]
  },
  env: {
    
    RAZORPAY_KEY_ID:'rzp_test_b8cHkGr5TdcDMC',
    RAZORPAY_KEY_SECRECT:'XsiGwm74U0LDhtL2V7CXkppJ',
  },
};

export default nextConfig;
