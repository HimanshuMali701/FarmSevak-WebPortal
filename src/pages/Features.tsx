import { 
  Leaf, 
  BarChart3, 
  CloudRain, 
  MonitorSmartphone, 
  Users, 
  Shield, 
  Smartphone, 
  Clock, 
  Database, 
  Cpu 
} from "lucide-react";
import { useTranslation } from "react-i18next";

// ✅ Import images directly from src/assets
import SustainableImg from "../assets/Sustainable.png";
import PredictiveImg from "../assets/predicative_Analycis_Engine.png";
import WeatherImg from "../assets/Wheather.png";
import CropHealthImg from "../assets/crop_health_monitaring.png";

export const Features = () => {
  const mainFeatures = [
    {
      icon: Leaf,
      title: "Sustainable Farming",
      description: "Lower operational costs and increase efficiency while promoting environmentally sustainable farming practices.",
      benefits: ["Environmentally friendly", "Cost-effective farming", "Increased efficiency", "Farm productivity"],
      image: SustainableImg
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics Engine",
      description: "Machine learning algorithms that analyze weather patterns, soil conditions, and crop data to predict yields with industry-leading accuracy.",
      benefits: ["95% prediction accuracy", "30-day forecasts", "Risk assessment", "Optimization recommendations"],
      image: PredictiveImg
    },
    {
      icon: CloudRain,
      title: "Weather Intelligence",
      description: "Integrated weather forecasting and climate analysis to help you make informed decisions about planting, irrigation, and harvesting.",
      benefits: ["Micro-climate data", "7-day forecasts", "Rainfall predictions", "Temperature alerts"],
      image: WeatherImg
    },
    {
      icon: MonitorSmartphone,
      title: "Crop Health Monitoring",
      description: "Early detection of diseases, pests, and nutrient deficiencies using computer vision and IoT sensor integration.",
      benefits: ["Disease early warning", "Pest identification", "Nutrient mapping", "Treatment recommendations"],
      image: CropHealthImg
    }
  ];

  const additionalFeatures = [
    { icon: Users, title: "Multi-Language Support", description: "Available in Hindi and Odia" },
    { icon: Shield, title: "Data Security", description: "Enterprise-grade security and privacy" },
    { icon: Smartphone, title: "Mobile Optimized", description: "Works perfectly on any device" },
    { icon: Clock, title: "Real-time Alerts", description: "Instant notifications for critical events" },
    { icon: Database, title: "Historical Data", description: "10+ years of agricultural data" },
    { icon: Cpu, title: "AI-Powered", description: "Latest machine learning algorithms" },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Connect Your Farm",
      description: "Add your farm location and crop details to our platform. Our system automatically begins monitoring your fields using satellite data."
    },
    {
      step: "2",
      title: "AI Analysis",
      description: "Our AI processes weather data, soil conditions, and historical patterns to understand your farm's unique characteristics."
    },
    {
      step: "3",
      title: "Get Predictions",
      description: "Receive detailed yield predictions, optimization recommendations, and alerts about potential issues before they impact your crops."
    },
    {
      step: "4",
      title: "Optimize & Improve",
      description: "Implement our data-driven recommendations to increase yield, reduce waste, and maximize your farming profits."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* ... Hero Section code remains unchanged ... */}

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-foreground mb-4">
              Core Platform Features
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to make data-driven farming decisions
            </p>
          </div>

          <div className="space-y-20">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Section */}
                <div className="lg:w-1/2">
                  <feature.icon className="h-16 w-16 text-primary mb-4" />
                  <h3 className="font-poppins font-bold text-2xl text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="font-inter text-muted-foreground text-lg mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="font-inter">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Section */}
                <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works & Additional Features sections remain unchanged */}
    </div>
  );
};
