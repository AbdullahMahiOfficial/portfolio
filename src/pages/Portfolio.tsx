  import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import Navigation from '@/components/Navigation';
import AnimatedProgressBar from '@/components/AnimatedProgressBar';
import CircularProgress from '@/components/CircularProgress';
import CertificationDialog from '@/components/CertificationDialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Download, Mail, MapPin, Phone, Globe, Award, Briefcase, GraduationCap, Calendar, Building2, Linkedin, Github, Facebook } from 'lucide-react';

const Portfolio = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const languagesRef = useRef<HTMLDivElement>(null);
  
  const statsVisible = useIntersectionObserver(statsRef);
  const skillsVisible = useIntersectionObserver(skillsRef);
  const languagesVisible = useIntersectionObserver(languagesRef);

  const experienceCount = useAnimatedCounter(7, 2000, statsVisible);
  const certificationsCount = useAnimatedCounter(50, 2000, statsVisible);
  const clientsCount = useAnimatedCounter(100, 2000, statsVisible);

  // Technical Skills Data - 50+ skills from work experience
  const technicalSkills = [
    { name: 'Microsoft Azure', percentage: 95, color: 'high' as const },
    { name: 'Amazon Web Services (AWS)', percentage: 90, color: 'high' as const },
    { name: 'Huawei Cloud', percentage: 85, color: 'high' as const },
    { name: 'Linux System Administration', percentage: 100, color: 'high' as const },
    { name: 'Windows Server', percentage: 100, color: 'high' as const },
    { name: 'Docker', percentage: 95, color: 'high' as const },
    { name: 'Kubernetes', percentage: 90, color: 'high' as const },
    { name: 'Jenkins', percentage: 85, color: 'high' as const },
    { name: 'CI/CD Pipelines', percentage: 90, color: 'high' as const },
    { name: 'Terraform', percentage: 80, color: 'medium' as const },
    { name: 'Ansible', percentage: 80, color: 'medium' as const },
    { name: 'DevOps Tools', percentage: 90, color: 'high' as const },
    { name: 'Configuration Management', percentage: 85, color: 'high' as const },
    { name: 'Continuous Integration (CI)', percentage: 90, color: 'high' as const },
    { name: 'Continuous Delivery (CD)', percentage: 90, color: 'high' as const },
    { name: 'Network Security', percentage: 85, color: 'high' as const },
    { name: 'System Configuration', percentage: 90, color: 'high' as const },
    { name: 'IT Infrastructure Services', percentage: 85, color: 'high' as const },
    { name: 'Troubleshooting', percentage: 100, color: 'high' as const },
    { name: 'Problem-Solving', percentage: 100, color: 'high' as const },
    { name: 'Communication', percentage: 95, color: 'high' as const },
    { name: 'Microsoft 365', percentage: 90, color: 'high' as const },
    { name: 'Microsoft Intune', percentage: 85, color: 'high' as const },
    { name: 'GitHub Enterprise Server', percentage: 85, color: 'high' as const },
    { name: 'VPN Configuration', percentage: 90, color: 'high' as const },
    { name: 'Site-to-Site VPN', percentage: 90, color: 'high' as const },
    { name: 'Point-to-Site VPN', percentage: 90, color: 'high' as const },
    { name: 'Azure Site Recovery', percentage: 85, color: 'high' as const },
    { name: 'Disaster Recovery', percentage: 90, color: 'high' as const },
    { name: 'Virtual Machine Migration', percentage: 90, color: 'high' as const },
    { name: 'Database Migration', percentage: 85, color: 'high' as const },
    { name: 'Hyper-V', percentage: 85, color: 'high' as const },
    { name: 'VMware', percentage: 80, color: 'medium' as const },
    { name: 'Nested Virtualization', percentage: 80, color: 'medium' as const },
    { name: 'Cloud Architecture', percentage: 95, color: 'high' as const },
    { name: 'Cloud Migration', percentage: 90, color: 'high' as const },
    { name: 'Security Monitoring', percentage: 85, color: 'high' as const },
    { name: 'Threat Management', percentage: 85, color: 'high' as const },
    { name: 'Customer Relationship Management', percentage: 90, color: 'high' as const },
    { name: 'Project Management', percentage: 90, color: 'high' as const },
    { name: 'Team Leadership', percentage: 90, color: 'high' as const },
    { name: 'Technical Support', percentage: 95, color: 'high' as const },
    { name: 'Hardware Installation', percentage: 90, color: 'high' as const },
    { name: 'Software Configuration', percentage: 90, color: 'high' as const },
    { name: 'OS Installation', percentage: 95, color: 'high' as const },
    { name: 'Hardware Troubleshooting', percentage: 95, color: 'high' as const },
    { name: 'IT Help Desk', percentage: 90, color: 'high' as const },
    { name: 'Cross-functional Collaboration', percentage: 90, color: 'high' as const },
    { name: 'Time Management', percentage: 90, color: 'high' as const },
    { name: 'Planning & Coordination', percentage: 90, color: 'high' as const },
    { name: 'Strategic Planning', percentage: 85, color: 'high' as const },
    { name: 'Solution Architecture', percentage: 95, color: 'high' as const },
    { name: 'Cloud Security', percentage: 90, color: 'high' as const },
    { name: 'Automation', percentage: 85, color: 'high' as const },
    { name: 'Monitoring & Alerting', percentage: 85, color: 'high' as const },
    { name: 'Performance Optimization', percentage: 85, color: 'high' as const },
    { name: 'Disaster Recovery Planning', percentage: 85, color: 'high' as const },
    { name: 'Backup Solutions', percentage: 90, color: 'high' as const },
    { name: 'Cloud Cost Optimization', percentage: 80, color: 'medium' as const },
    { name: 'Vendor Management', percentage: 80, color: 'medium' as const },
    { name: 'Documentation', percentage: 85, color: 'high' as const },
  ];

  // Language Skills Data
  const languageSkills = [
    { name: 'Bengali', percentage: 100 },
    { name: 'English', percentage: 90 },
    { name: 'Hindi', percentage: 70 },
    { name: 'Urdu', percentage: 60 },
  ];

  // 40 Certification badges
  // Change the content of "badge" tag of each entry. with <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/s1.jpeg" alt="CKA badge" className="w-full h-full object-cover" /></div>

  // upload all the certifiacate images in badges folder and replace src="/badges/certificate-img.png" for each entry

  const certifications= [
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    // Add 24 more certifications to make 40 total
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>},
    { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.png" alt="CKA badge" className="w-full h-full object-cover" /></div>}
  ];

  // Portfolio projects - 12 total, 3 columns
  const portfolioProjects = [
    { 
      title: "E-commerce Platform", 
      category: "E-commerce", 
      description: "Full-stack e-commerce solution with payment integration", 
      icon: "🛒",
      details: "Built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment processing, and admin dashboard."
    },
    { 
      title: "Corporate Website", 
      category: "Corporate", 
      description: "Professional business website with CMS", 
      icon: "🏢",
      details: "Responsive corporate website with content management system, contact forms, and SEO optimization."
    },
    { 
      title: "Restaurant Platform", 
      category: "Food & Beverage", 
      description: "Food ordering and delivery platform", 
      icon: "🍕",
      details: "Multi-restaurant platform with real-time ordering, delivery tracking, and payment integration."
    },
    { 
      title: "Learning Management System", 
      category: "Education", 
      description: "Online learning platform with video streaming", 
      icon: "📚",
      details: "LMS with course management, video streaming, quizzes, and progress tracking."
    },
    { 
      title: "Hospital Management", 
      category: "Healthcare", 
      description: "Hospital management system with patient records", 
      icon: "🏥",
      details: "Complete hospital management with patient records, appointment scheduling, and billing."
    },
    { 
      title: "Inventory Management", 
      category: "Business", 
      description: "Warehouse and inventory tracking system", 
      icon: "📦",
      details: "Real-time inventory tracking with barcode scanning and automated reordering."
    },
    { 
      title: "Real Estate Portal", 
      category: "Real Estate", 
      description: "Property listing and management platform", 
      icon: "🏠",
      details: "Property portal with advanced search, virtual tours, and agent management."
    },
    { 
      title: "Financial Dashboard", 
      category: "Finance", 
      description: "Financial analytics and reporting dashboard", 
      icon: "💰",
      details: "Financial dashboard with real-time analytics, reporting, and data visualization."
    },
    { 
      title: "Social Media App", 
      category: "Social", 
      description: "Social networking platform with messaging", 
      icon: "📱",
      details: "Social platform with real-time messaging, posts, comments, and user profiles."
    },
    { 
      title: "Event Management", 
      category: "Events", 
      description: "Event planning and ticket booking system", 
      icon: "🎟️",
      details: "Event management with ticket booking, attendee management, and payment processing."
    },
    { 
      title: "Travel Booking", 
      category: "Travel", 
      description: "Travel booking and itinerary management", 
      icon: "✈️",
      details: "Travel platform with flight/hotel booking, itinerary planning, and travel guides."
    },
    { 
      title: "Fitness Tracker", 
      category: "Health", 
      description: "Fitness tracking and workout planning app", 
      icon: "💪",
      details: "Fitness app with workout tracking, nutrition planning, and progress analytics."
    }
  ];

  // Experience data with 200x200 logos
  const experiences = [
  {
    title: "Solution Architect",
    company: "ADN Technologies Limited",
    period: "October 2024 - Present (11 Months)",
    description: `Architecting robust cloud solutions in Azure and AWS to meet diverse business needs.
    Managing and optimizing for seamless performance and reliability.
    Resolving complex technical issues in Azure, AWS, Microsoft 365, and Intune.
    Leading successful server migrations for smooth transitions.
    Securing GitHub Enterprise Server within private networks to protect code repositories.
    Streamlining deployments using Docker, Kubernetes, and CI/CD pipelines for faster delivery cycles.
    Monitoring security threats and managing activities within the Microsoft Partner Center.
    Managing customer relationships to ensure satisfaction and success.
    Collaborating with internal IT teams to monitor and address security threats, managing full group IT operations.`,
    logo: (
      <div className="w-[150px] h-[150px] rounded-lg flex items-center justify-center">
        <img src="/badges/1-CKA.png" alt="NASSA Group Logo" className="w-full h-full object-cover rounded-lg" />
      </div>
    )
  },

  {
    title: "System Engineer",
    company: "Corporate Projukti Limited",
    period: "Jan 2023 - Sep 2024 (1 year 9 months)",
    description: `Designed and implemented robust cloud architectures in Azure and Huawei Cloud for optimal scalability.
    Effectively managed and monitored Azure and Huawei-based solutions, ensuring high availability.
    Proactively troubleshoot and resolved complex issues related to Azure and Huawei cloud services.
    Led successful server migrations from AWS to Huawei and Azure, ensuring seamless transitions.
    Implemented secure Site-to-Site (S2S) and Point-to-Site (P2S) VPN solutions in Azure and Huawei Cloud.
    Crafted detailed Price Quotations for Azure and Huawei Cloud Services, aligning with customer requirements.
    Implemented Azure Site Recovery for virtual machines—Hyper-V, and VMware, ensuring robust disaster recovery.
    Orchestrated comprehensive Disaster Recovery Drills for Azure and Huawei Cloud.
    Managed seamless migrations of Virtual Machines and Database from On-premises to Azure and Huawei Cloud.
    Implemented Nested Virtualization on Microsoft Azure for enhanced flexibility.
    Executed Docker and Kubernetes processes, streamlining application deployment.
    Expertly implemented filesystem on Linux partitions, optimizing data organization.`,
      logo: (
        <div className="w-[150px] h-[150px] rounded-lg flex items-center justify-center">
          <img src="/badges/1-CKA.png" alt="NASSA Group Logo" className="w-full h-full object-cover rounded-lg" />
        </div>
      )
    },

    {
      title: "Executive - IT",
      company: "NASSA Group",
      period: "Jul 2018 - Jun 2020 (2 years)",
      description: `• Assisted the IT Support Team in maintaining hardware and software for seamless operations.
      Conducted the installation of computer hardware and configurations, ensuring optimal performance.
      Proficient in OS installation, formatting, and hardware troubleshooting to address technical issues promptly.
      Provided effective solutions for troubleshooting technical issues, contributing to a reliable IT infrastructure.
      Ensured the resolution of all internal IT help desk requests, maintaining a high level of user satisfaction.
      Played a key role in the IT Department, actively contributing to the overall efficiency of the team.
      Worked collaboratively to maintain a well-functioning IT environment, supporting daily operations.`,
      logo: (
        <div className="w-[150px] h-[150px] rounded-lg flex items-center justify-center">
          <img src="/badges/1-CKA.png" alt="NASSA Group Logo" className="w-full h-full object-cover rounded-lg" />
        </div>
      )
    },

    {
      title: "Executive - IT",
      company: "Micro Fibre Group",
      period: "May 2016 - Jun 2018 (2 years 2 months)",
      description: `Collaborated closely with the IT Teams and Company Owner Team, providing valuable support in day-to-day activities.
      Conducted OS installation, formatting, and hardware troubleshooting to ensure a robust and efficient IT infrastructure.
      Offered dedicated support to department heads, facilitating smooth operations across functional teams.
      Demonstrated exceptional organizational and time-management skills, effectively juggling various responsibilities.
      Utilized quick-thinking, planning, coordinating, and executing skills to provide prompt solutions.
      Played a pivotal role in the IT Department contributing to the achievement of team objectives.
      Actively engaged with the IT Teams to enhance overall efficiency and technological advancements.
      Collaborated with Company Owner Team providing valuable insights and support for strategic initiatives.`,
      logo: (
        <div className="w-[150px] h-[150px] rounded-lg flex items-center justify-center">
          <img
            src="/badges/1-CKA.png"
            alt="Micro Fibre Group Logo"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-40 pb-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-80 h-80 rounded-sm overflow-hidden flex-shrink-0 ">
              <img 
                src="/lovable-uploads/profile-photo.png" 
                alt="K M Abdulla Al Mamun"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl font-bold text-primary mb-4">K M Abdulla Al Mamun</h1>
              <p className="text-xl text-cool-primary mb-6 font-semibold">
                Solution Architect | Cloud Strategist | DevOps Innovator
              </p>
              
              <div className="mb-8">
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  I design and deliver secure, scalable, and high-performance cloud solutions tailored to modern business needs. 
                  With deep expertise in Azure, AWS, and Huawei Cloud, I help organizations transform their IT infrastructure, 
                  automate operations, and achieve operational excellence.
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary">My expertise includes:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-start space-x-2 mb-2">
                        <span className="w-2 h-2 bg-cool-primary rounded-full mt-2"></span>
                        <span className="text-sm text-muted-foreground">Architecting cloud-native and hybrid environments</span>
                      </div>
                      <div className="flex items-start space-x-2 mb-2">
                        <span className="w-2 h-2 bg-cool-primary rounded-full mt-2"></span>
                        <span className="text-sm text-muted-foreground">Implementing DevOps pipelines using Kubernetes, Docker, and Jenkins</span>
                      </div>
                      <div className="flex items-start space-x-2 mb-2">
                        <span className="w-2 h-2 bg-cool-primary rounded-full mt-2"></span>
                        <span className="text-sm text-muted-foreground">Managing enterprise-grade Linux systems</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start space-x-2 mb-2">
                        <span className="w-2 h-2 bg-cool-primary rounded-full mt-2"></span>
                        <span className="text-sm text-muted-foreground">Enhancing collaboration and security through Microsoft 365</span>
                      </div>
                      <div className="flex items-start space-x-2 mb-2">
                        <span className="w-2 h-2 bg-cool-primary rounded-full mt-2"></span>
                        <span className="text-sm text-muted-foreground">Leading seamless cloud migrations and automation initiatives</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6">
                  I bring a strategic mindset and hands-on technical leadership to every project—ensuring solutions are not only 
                  technically sound but also aligned with business goals, timelines, and budgets.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <p className="text-sm text-muted-foreground">Nick Name:</p>
                  <p className="font-medium text-primary">Abdullah Mahi</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email:</p>
                  <p className="font-medium text-primary">abdullahmahiofficial@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Mobile:</p>
                  <p className="font-medium text-primary">+880 1687 032087</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date of Birth:</p>
                  <p className="font-medium text-primary">January 9th</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-muted-foreground">Address:</p>
                  <p className="font-medium text-primary">Dhaka, Bangladesh</p>
                </div>
              </div>
              
              {/* Social Profiles */}
              <div className="flex space-x-4 justify-center lg:justify-start">
                <a href="https://linkedin.com/in/abdullahmahiofficial/" target="_blank" rel="noopener noreferrer" className="text-cool-primary hover:text-cool-accent transition-colors">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="https://github.com/abdullahmahiofficial/" target="_blank" rel="noopener noreferrer" className="text-cool-primary hover:text-cool-accent transition-colors">
                  <Github className="w-8 h-8" />
                </a>
                <a href="https://facebook.com/abdullahmahiofficial/" target="_blank" rel="noopener noreferrer" className="text-cool-primary hover:text-cool-accent transition-colors">
                  <Facebook className="w-8 h-8" />
                </a>
                <a href="https://AbdullahMahiOfficial.com" target="_blank" rel="noopener noreferrer" className="text-cool-primary hover:text-cool-accent transition-colors">
                  <Globe className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-cool-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border border-border hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => window.location.reload()}>
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-cool-primary mb-2">{experienceCount}</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border border-border hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => window.location.reload()}>
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-cool-accent mb-2">{certificationsCount}</div>
                <div className="text-muted-foreground">Certifications</div>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border border-border hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => window.location.reload()}>
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-cool-secondary mb-2">{clientsCount}</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section - 4 columns, 40 total */}
      <section id="certifications" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {certifications.map((cert, index) => (

              <div key={index} className="w-[300px] h-[300px] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
                <CertificationDialog
                  badge={cert.badge}
                  title={cert.title}
                  issuer={cert.issuer}
                  description={cert.description}
                  skills={cert.skills}
                  issuedDate={cert.issuedDate}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Animated on click/visit */}
      <section id="skills" className="py-16 bg-cool-light" onClick={() => window.location.reload()}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Skills</h2>
          
          {/* Technical Skills */}
          <div ref={skillsRef} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-primary">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skill, index) => (
                <AnimatedProgressBar
                  key={index}
                  label={skill.name}
                  percentage={skill.percentage}
                  shouldAnimate={skillsVisible}
                  color={skill.color}
                />
              ))}
            </div>
          </div>

          {/* Language Skills */}
          <div ref={languagesRef}>
            <h3 className="text-2xl font-semibold mb-8 text-primary">Language Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
              {languageSkills.map((language, index) => (
                <CircularProgress
                  key={index}
                  percentage={language.percentage}
                  label={language.name}
                  shouldAnimate={languagesVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 border border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      {exp.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-primary mb-2">{exp.title}</h3>
                      <h4 className="text-lg font-semibold text-cool-primary mb-2">{exp.company}</h4>
                      <p className="text-muted-foreground mb-4">{exp.period}</p>
                      <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {exp.description}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-cool-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Education</h2>
          <Card className="p-8 border border-border hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="flex items-start space-x-6">
                <div className="w-[150px] h-[150px] rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="/badges/1-CKA.png" alt="JU ogo" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold text-primary mb-2">Jahangirnagar University</h3>
                  <h4 className="text-lg font-semibold text-cool-primary mb-2">Master of Science in Information Technology (MSc in IT)</h4>
                  <p className="text-muted-foreground mb-4">Institute of Information Technology (IIT)</p>
                  <p className="text-muted-foreground leading-relaxed">
                    The Master of Science in Information Technology is a comprehensive graduate program designed to provide advanced knowledge and practical skills in the field of IT. Offered by the Institute of Information Technology at Jahangirnagar University, the program focuses on key areas such as software engineering, networking, database systems, cybersecurity, and IT project management.
                    Structured to meet the evolving demands of the ICT industry, the MSc in IT equips students with the ability to design, implement, and manage complex information systems, making them well-prepared for leadership roles in technology-driven organization.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolio Section - 3 columns, 12 total, clickable with details */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary">Portfolio</h2>
          <p className="text-center text-muted-foreground mb-12">My Recent Works</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border border-border cursor-pointer" onClick={() => alert(project.details)}>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{project.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">{project.title}</h3>
                    <Badge variant="secondary" className="mb-3 bg-cool-light text-cool-primary">{project.category}</Badge>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-16 bg-cool-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">My Resume</h2>
          
          <Card className="p-8 border border-border hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0 text-center">
              <div className="w-24 h-24 bg-cool-light rounded-lg flex items-center justify-center mx-auto mb-6">
                <Download className="w-12 h-12 text-cool-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-primary">Professional Resume</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Download my complete professional resume with detailed information about my experience, 
                skills, education, and certifications in cloud architecture and DevOps.
              </p>
              
              <Button 
                className="bg-cool-primary hover:bg-cool-accent text-white px-8 py-3"
                onClick={() => window.open('https://drive.google.com/file/d/1ycj4W03a-ntKL5PixE4HwGbZnbTCsW07/view?usp=drive_link', )}
              >
                <Download className="w-4 h-4 mr-2" />
                Download my Resume
              </Button>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">What's Included</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Professional Summary</li>
                    <li>• Work Experience</li>
                    <li>• Technical Skills</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Additional Info</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Certifications</li>
                    <li>• Education Details</li>
                    <li>• Project Portfolio</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Contact Info</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Email & Phone</li>
                    <li>• LinkedIn Profile</li>
                    <li>• Location Details</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary">Get In Touch</h2>
          <p className="text-center text-muted-foreground mb-12">Let's Keep In Touch<br />I am very much looking forward to hearing from you</p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cool-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Address:</h4>
                  <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cool-accent rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Mobile:</h4>
                  <p className="text-muted-foreground">+880 1687 032087</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cool-secondary rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Email:</h4>
                  <p className="text-muted-foreground">abdullahmahiofficial@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cool-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Social Profiles:</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://linkedin.com/in/abdullahmahiofficial/" target="_blank" rel="noopener noreferrer" className="text-cool-primary hover:text-cool-accent transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/abdullahmahiofficial/" target="_blank" rel="noopener noreferrer" className="text-cool-primary hover:text-cool-accent transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href="https://facebook.com/abdullahmahiofficial/" target="_blank" rel="noopener noreferrer" className="text-cool-primary hover:text-cool-accent transition-colors">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="https://AbdullahMahiOfficial.com" target="_blank" rel="noopener noreferrer" className="text-cool-primary hover:text-cool-accent transition-colors">
                      <Globe className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cool-light rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold mb-2 text-primary">Leave me a message</h3>
              <p className="text-muted-foreground mb-6">If you have any observations, I am ready to give you feedback. The quickest way to get in touch with me is to fill up the contact form.</p>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" className="border-border" />
                  <Input placeholder="Your Email Address" className="border-border" />
                </div>
                <Input placeholder="Subject" className="border-border" />
                <Textarea placeholder="Your Message" rows={4} className="border-border" />
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="not-robot" className="rounded" />
                  <label htmlFor="not-robot" className="text-sm text-muted-foreground">I'm not a robot</label>
                </div>
                <Button className="w-full bg-cool-primary hover:bg-cool-accent text-white">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-nav-primary text-nav-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block rounded-full backdrop-blur-sm">
            <p className="text-sm">Copyright © Abdullah Mahi Official. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;