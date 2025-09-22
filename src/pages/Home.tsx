import { ArrowRight, Satellite, BarChart3, Users, CheckCircle, Star, TrendingUp, Clock, Globe, Goal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export const Home = () => {
  const stats = [
    {
      value: "+10%",
      label: "Avg yield improvement",
      description: "Farmers see consistent yield increases",
      icon: TrendingUp
    },
    {
      value: "Real-time",
      label: "Data Prediction ",
      description: "Try our prediction system now",
      icon: BarChart3
    },
    {
      value: "Languages",
      label: "Multi Regional languages",
      description: "Available in your local language",
      icon: Users
    }
  ];

  const features = [
    {
      icon: Goal,
      title: "Precision Agriculture",
      description: "Targeted recommendations based on soil, weather, and crop-specific data."
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Machine learning algorithms that forecast yield with 95% accuracy based on historical data."
    },
    {
      icon: Globe,
      title: "Data-Driven Insights",
      description: "Advanced analytics that turn complex agricultural data into actionable recommendations."
    }
  ];
{}
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Bihar",
      quote: "AI Crop helped me increase my rice yield by 15%. The predictions were spot-on!",
      rating: 4
    },
    {
      name: "Priya Sharma",
      location: "Odisha", 
      quote: "Finally, technology that speaks my language. The Odia interface made it so easy to use.",
      rating: 5
    },
    {
      name: "Anil Singh",
      location: "Punjab",
      quote: "The satellite data insights helped me optimize my irrigation schedule perfectly.",
      rating: 3
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-left animate-fade-in">
              <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                AI-Powered Crop Yield Predictions for Smarter Farming
              </h1>
              <p className="font-inter text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl">
                Data-driven recommendations that increase yield, cut waste, and speak your language.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="https://farmsevakprediction.streamlit.app/"target="_blank">
                  <Button className="btn-primary text-lg px-8 py-4">
                    Let's Predict
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/#"target="_blank">
                  <Button className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-4">
                    How it works
                  </Button>
                </Link>
              </div>

         {/* Trust Indicators */}
          <div className="flex flex-col space-y-2 mt-2">
            {/* First Row - 2 items side by side */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="font-inter text-sm text-white">AI-Powered Predictions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="font-inter text-sm text-white">90% Accuracy Rate</span>
              </div>
            </div>

            {/* Second Row - single item, perfectly aligned to left */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="font-inter text-sm text-white">Suuppot Multi Language</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="font-inter text-sm text-white">Integrated LLM</span>
              </div>
            </div>
          </div>
</div>

            {/* Hero Image Space (content overlay) */}
            <div className="lg:flex hidden"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="stat-card text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="font-poppins font-bold text-3xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-inter font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="font-inter text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-foreground mb-4">
              Powerful Features for Modern Farming
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
              Leverage cutting-edge AI technology to make informed decisions about your crops
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="feature-card text-center animate-bounce-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <feature.icon className="h-16 w-16 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-poppins font-semibold text-xl text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="font-inter text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/features">
              <Button className="btn-secondary">
                View All Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-foreground mb-4">
              Your Smart Farming Partner
            </h2>
            <p className="font-inter text-xl text-muted-foreground">
              Data-driven insights for better decisions and better yields
            </p>
          </div>

         {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="card-hover p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="font-inter text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-poppins font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="font-inter text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>*/}
        </div>
      </section>

      {/* CTA Section */}
      {/*<section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-4xl text-primary-foreground mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="font-inter text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who are already using AI to optimize their yields and increase profits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold">
                Start Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-white/10 border-white border-2 text-primary-foreground hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>*/}
    </div>
  );
};