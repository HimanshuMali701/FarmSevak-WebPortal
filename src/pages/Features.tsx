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

export const Features = () => {
  const mainFeatures = [
    {
      icon: Leaf,
      title: "Sustainable Farming",
      description: "Lower operational costs and increase efficiency while promoting environmentally sustainable farming practices.",
      benefits: ["Environmentally friendly", "Cost-effective farming", "Increased efficiency", "Farm productivity"],
      image: "src/assets/Sustainable.png"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics Engine",
      description: "Machine learning algorithms that analyze weather patterns, soil conditions, and crop data to predict yields with industry-leading accuracy.",
      benefits: ["95% prediction accuracy", "30-day forecasts", "Risk assessment", "Optimization recommendations"],
      image: "src/assets/predicative_Analycis_Engine.png"
    },
    {
      icon: CloudRain,
      title: "Weather Intelligence",
      description: "Integrated weather forecasting and climate analysis to help you make informed decisions about planting, irrigation, and harvesting.",
      benefits: ["Micro-climate data", "7-day forecasts", "Rainfall predictions", "Temperature alerts"],
      image: "src/assets/Wheather.png"
    },
    {
      icon: MonitorSmartphone,
      title: "Crop Health Monitoring",
      description: "Early detection of diseases, pests, and nutrient deficiencies using computer vision and IoT sensor integration.",
      benefits: ["Disease early warning", "Pest identification", "Nutrient mapping", "Treatment recommendations"],
      image: "src/assets/crop_health_monitaring.png"
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

      {/* Hero Section */}
      
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-5xl text-primary-foreground mb-6">
            Powerful Features for Modern Farming
          </h1>
          <p className="font-inter text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Discover how our AI-powered platform combines Large Language Models (LLM), machine learning, and local expertise to revolutionize your farming operations.
          </p>
        </div>
      </section>

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

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-foreground mb-4">
              How It Works
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes with our simple, intuitive process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-poppins font-bold text-xl mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="font-poppins font-semibold text-xl text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="font-inter text-muted-foreground">{step.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="border-t-2 border-dashed border-primary/30 w-3/4"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-foreground mb-4">
              Additional Capabilities
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
              Every feature designed with farmers in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 text-center group hover:scale-105"
              >
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-poppins font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-inter text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
