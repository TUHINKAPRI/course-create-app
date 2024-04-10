/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:['res.cloudinary.com',"picsum.photos","loremflickr.com", "i.ytimg.com","www.google.com","cdn.mindmajix.com","encrypted-tbn0.gstatic.com","www.excelptp.com","www.itrainu.in","www.krmangalam.edu.in"]
  },
  env: {
    RAZORPAY_KEY: 'rzp_test_b8cHkGr5TdcDMC',
  },
};

export default nextConfig;
